import { yupResolver } from '@hookform/resolvers/yup';
import FeatureSelection from 'components/create-listing/FeatureSelection';
import FormInputFields from 'components/create-listing/FormInputFields';
import ListingFormMap from 'components/create-listing/ListingFormMap';
import ListingImageInput from 'components/create-listing/ListingImageInput';
import Button from 'components/shared/Button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import listingFormSchema from './create-listing-form-schema';
import { SubmitSection, Wrapper } from './create-listing-form.styles';

/**
 * Render new listing form.
 *
 * @return {JSX.Element}
 */
function CreateListingForm() {
  const [images, setImages] = useState([]);
  const [overviewText, setOverviewText] = useState('');
  const [selectedIdentifiers, setSelectedIdentifiers] = useState(new Set());
  const [featureIds, setFeatureIds] = useState(new Set());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(listingFormSchema),
  });

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
   * Handle clicking on identifier buttons.
   *
   * @param {String} value The text of the clicked button.
   */
  const handleIdentifierClick = (value) => {
    if (!selectedIdentifiers.has(value)) {
      setSelectedIdentifiers((oldState) => new Set(oldState).add(value));
    } else {
      const newState = new Set(selectedIdentifiers);
      newState.delete(value);
      setSelectedIdentifiers(newState);
    }
  };

  setValue('identifier', selectedIdentifiers.size);

  /**
   * Click handling function that will add or remove the feature id from the array.
   *
   * @param {number} id Id of the event invoking element.
   */
  const handleFeatureClick = (id) => {
    if (featureIds.has(id)) {
      setFeatureIds((prevState) => {
        prevState.delete(id);
        return new Set(prevState);
      });
    } else {
      setFeatureIds((prevState) => {
        prevState.add(id);
        return new Set(prevState);
      });
    }
  };

  /**
   * Handle form submit
   */
  const submit = () => {
    reset();
  };

  return (
    <>
      <Wrapper>
        <h1> Create New Listing </h1>
        <form noValidate>
          <ListingFormMap />
          <FormInputFields
            errors={errors}
            handleIdentifierClick={handleIdentifierClick}
            overviewText={overviewText}
            register={register}
            setOverviewText={setOverviewText}
            selectedIdentifiers={selectedIdentifiers}
          />
        </form>
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
        <Button type="submit" onClick={handleSubmit(submit)}>
          Save
        </Button>
      </SubmitSection>
    </>
  );
}

export default CreateListingForm;
