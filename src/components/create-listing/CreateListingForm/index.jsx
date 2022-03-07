import { yupResolver } from '@hookform/resolvers/yup';
import FeatureSelection from 'components/create-listing/FeatureSelection';
import FormInputFields from 'components/create-listing/FormInputFields';
import ListingImageInput from 'components/create-listing/ListingImageInput';
import Button from 'components/shared/Button';
import { useUser } from 'contexts/UserContext';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getListingsById } from 'services/listing';
import {
  submitListingForm,
  updateListingForm,
} from 'services/listing-create-service';
import { generateLabelValuePairs } from 'utils/helpers';
import listingFormSchema from './create-listing-form-schema';
import {
  CreateListingContainer,
  SubmitSection,
  Wrapper,
} from './create-listing-form.styles';

/**
 * Render new listing form.
 *
 * @return {JSX.Element}
 */
function CreateListingForm({ date }) {
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
    control,
  } = useForm({
    defaultValues: {
      overview: '',
    },
    resolver: yupResolver(listingFormSchema),
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getListingsById(formId);
      response.isOwner = !!response.owner;
      response.isAgent = !!response.agent;
      response.lotArea = response.lotArea.sqft;
      response.lotDimensions = response.lotDimensions.sqft;
      response.homeArea = response.homeArea.sqft;
      response.tags = generateLabelValuePairs(response.tags);

      reset(response);
    }
    setValue('featureIds', featureIds);

    if (formId) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId, reset, featureIds]);

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
  };

  /**
   * Handle form submit
   */
  const submit = async () => {
    if (!isLoggedIn) {
      navigate('/sign-up');
    } else {
      values.featureIds = Array.from(values?.featureIds || []);
      values.homeArea = { sqft: values?.homeArea };
      values.lotArea = { sqft: values?.lotArea };
      values.lotDimensions = { sqft: values?.lotDimensions };
      values.tags = values?.tags?.map((tag) => tag?.value);

      if (!formId) {
        const { id } = await submitListingForm(values);
        navigate(`/listing/${id}`);
      } else {
        updateListingForm(values, formId);
        navigate(`/listing/${formId}`);
      }
    }
  };

  return (
    <CreateListingContainer>
      <form onSubmit={handleSubmit(submit)}>
        <Wrapper>
          <h1> {date || 'Create New Listing'} </h1>
          <FormInputFields
            errors={errors}
            register={register}
            setValue={setValue}
            values={values}
            control={control}
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
    </CreateListingContainer>
  );
}

CreateListingForm.propTypes = {
  date: PropTypes.string,
};

CreateListingForm.defaultProps = {
  date: null,
};

export default CreateListingForm;
