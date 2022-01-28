import { yupResolver } from '@hookform/resolvers/yup';
import FeatureSelection from 'components/create-listing/FeatureSelection';
import FormInputFields from 'components/create-listing/FormInputFields';
import ListingFormMap from 'components/create-listing/ListingFormMap';
import ListingImageInput from 'components/create-listing/ListingImageInput';
import Button from 'components/shared/Button';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getListingData,
  submitListingForm,
} from 'services/listing-create-service';
import listingFormSchema from './create-listing-form-schema';
import { SubmitSection, Wrapper } from './create-listing-form.styles';
/**
 * Render new listing form.
 *
 * @return {JSX.Element}
 */
function CreateListingForm() {
  const navigate = useNavigate();
  const { id: formId } = useParams();
  const [images, setImages] = useState([]);
  const [featureIds, setFeatureIds] = useState(new Set());
  const { isLoggedIn } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(listingFormSchema),
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getListingData(formId);
      response.isOwner = !!response.owner;
      response.isAgent = !!response.agent;
      reset(response);
    }

    if (formId) fetchData();
  }, [formId, reset]);

  const values = watch();

  const handleAddImages = (acceptedImages) => {
    const updated = [...images, ...acceptedImages];
    setImages(updated);
  };

  const handleDeleteImage = (imageToDelete) => {
    const updated = [...images];
    const index = updated.indexOf(imageToDelete);
    updated.splice(index, 1);
    setImages(updated);
  };

  /**
   * Click handling function that will add or remove the feature id from the array.
   *
   * @param {number} featureId Id of the event invoking element.
   */
  const handleFeatureClick = (featureId) => {
    if (featureIds.has(featureId)) {
      setFeatureIds((prevState) => {
        prevState.delete(featureId);
        return new Set(prevState);
      });
    } else {
      setFeatureIds((prevState) => {
        prevState.add(featureId);
        return new Set(prevState);
      });
    }
    setValue('featureIds', featureIds);
  };

  /**
   * Handle form submit
   */
  const submit = async () => {
    if (!isLoggedIn) {
      navigate(`/sign-up`);
    } else {
      values.featureIds = Array.from(values.featureIds);
      const { id } = await submitListingForm(values);
      navigate(`/listings/${id}`, { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Wrapper>
        <h1> Create New Listing </h1>
        <ListingFormMap />
        <FormInputFields
          errors={errors}
          register={register}
          setValue={setValue}
          values={values}
        />
      </Wrapper>
      <ListingImageInput
        images={images}
        onAddImages={handleAddImages}
        onDeleteImage={handleDeleteImage}
      />
      <FeatureSelection
        featureIds={featureIds}
        handleFeatureClick={handleFeatureClick}
      />
      <SubmitSection>
        <Button type="submit">Save</Button>
      </SubmitSection>
    </form>
  );
}

export default CreateListingForm;
