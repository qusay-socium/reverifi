import { ReactComponent as BedroomsIcon } from 'assets/icons/bedrooms.svg';
import { ReactComponent as PriceIcon } from 'assets/icons/dollar-sign.svg';
import { ReactComponent as FullBathroomsIcon } from 'assets/icons/full-bathrooms.svg';
import { ReactComponent as GarageIcon } from 'assets/icons/garage.svg';
import { ReactComponent as HomeAreaIcon } from 'assets/icons/home-area.svg';
import { ReactComponent as PropertyTypeIcon } from 'assets/icons/home-property.svg';
import { ReactComponent as ListingTypeIcon } from 'assets/icons/listing-type.svg';
import { ReactComponent as LotAreaIcon } from 'assets/icons/lot-area.svg';
import { ReactComponent as LotDimensionsIcon } from 'assets/icons/lot-dimensions.svg';
import { ReactComponent as OverviewIcon } from 'assets/icons/overview.svg';
import { ReactComponent as OwnerIcon } from 'assets/icons/owner.svg';
import { ReactComponent as RoomsIcon } from 'assets/icons/rooms.svg';
import { ReactComponent as AgentIcon } from 'assets/icons/seller-agent.svg';
import { ReactComponent as PartialBathroomsIcon } from 'assets/icons/shower.svg';
import { ReactComponent as YearBuiltIcon } from 'assets/icons/year-built.svg';
import FormInput from 'components/shared/FormInput';
import SelectInput from 'components/shared/FormSelectInput';
import TextAreaInput from 'components/shared/FormTextArea';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  getAllListingTypes,
  getAllPropertyTypes,
} from 'services/listing-create-service';
import {
  ButtonsContainer,
  DetailsInputsContainer,
  IdentifierButton,
  SelectOneError,
  TextInputContainer,
} from './form-input-fields.styles';

/**
 * Render the form input fields.
 *
 * @param {Object}   props                               The component props.
 * @param {Function} [props.register=null]               The react-hook-form register function.
 * @param {Object}   props.errors                        Error message/s.
 * @param {Function} props.setValue                      Sets form values.
 * @param {Object}   props.values                        Form values.
 *
 * @return {JSX.Element}
 */
function FormInputFields({ register, errors, setValue, values }) {
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [listingTypes, setListingTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPropertyTypes(await getAllPropertyTypes());
      setListingTypes(await getAllListingTypes());
    };

    fetchData();
  }, []);

  return (
    <>
      <ButtonsContainer>
        <IdentifierButton
          aria-label="I am the owner(s)"
          onClick={() => {
            setValue('isOwner', !values.isOwner);
          }}
          selected={values.isOwner}
        >
          <OwnerIcon />I am the owner(s)
        </IdentifierButton>
        <IdentifierButton
          aria-label="I am the Seller Agent"
          onClick={() => {
            setValue('isAgent', !values.isAgent);
          }}
          selected={values.isAgent}
        >
          <AgentIcon /> I am the Seller Agent
        </IdentifierButton>
        {errors.AtLeastOneIsSelected && (
          <SelectOneError>{errors.AtLeastOneIsSelected.message}</SelectOneError>
        )}
      </ButtonsContainer>

      <DetailsInputsContainer>
        <SelectInput
          error={errors.propertyType?.message}
          id="propertyType"
          label="Property type"
          name="property_type_id"
          placeholder="please select a property type"
          register={register}
          options={propertyTypes}
          labelIconElement={<PropertyTypeIcon />}
          onChange={(e) => {
            setValue('propertyType', e.target.value);
          }}
        />

        <SelectInput
          error={errors.listingType?.message}
          id="listingType"
          label="Listing type"
          name="listing_type_id"
          placeholder="please select listing type"
          register={register}
          options={listingTypes}
          labelIconElement={<ListingTypeIcon />}
          onChange={(e) => {
            setValue('listingType', e.target.value);
          }}
        />

        <FormInput
          error={errors.yearBuilt?.message}
          id="yearBuilt"
          label="Year built"
          name="yearBuilt"
          register={register}
          type="number"
          min="0"
          max="2022"
          step="1"
          placeholder="1995"
          labelIconElement={<YearBuiltIcon />}
          onChange={(e) => {
            setValue('yearBuilt', e.target.value);
          }}
        />

        <FormInput
          error={errors.bedrooms?.message}
          id="bedrooms"
          label="Bedrooms"
          name="bedrooms"
          register={register}
          type="number"
          min="0"
          step="1"
          placeholder="1"
          labelIconElement={<BedroomsIcon />}
          onChange={(e) => {
            setValue('bedrooms', e.target.value);
          }}
        />

        <FormInput
          error={errors.fullBathrooms?.message}
          id="fullBathrooms"
          label="Full bathrooms"
          name="fullBathrooms"
          register={register}
          type="number"
          min="0"
          step="1"
          placeholder="1"
          labelIconElement={<FullBathroomsIcon />}
          onChange={(e) => {
            setValue('fullBathrooms', e.target.value);
          }}
        />

        <FormInput
          error={errors.partialBathrooms?.message}
          id="partialBathrooms"
          label="Partial bathrooms"
          name="partialBathrooms"
          register={register}
          type="number"
          min="0"
          step="1"
          placeholder="1"
          labelIconElement={<PartialBathroomsIcon />}
          onChange={(e) => {
            setValue('partialBathrooms', e.target.value);
          }}
        />

        <FormInput
          error={errors.homeArea?.message}
          id="homeArea"
          label="Home Area (Sq. Ft.)"
          name="homeArea"
          register={register}
          labelIconElement={<HomeAreaIcon />}
          onChange={(e) => {
            setValue('homeArea', e.target.value);
          }}
        />

        <FormInput
          error={errors.lotArea?.message}
          id="lotArea"
          label="Lot area (Sq. Ft.)"
          name="lotArea"
          register={register}
          labelIconElement={<LotAreaIcon />}
          onChange={(e) => {
            setValue('lotArea', e.target.value);
          }}
        />

        <FormInput
          error={errors.lotDimensions?.message}
          id="lotDimensions"
          label="Lot dimensions"
          name="lotDimensions"
          register={register}
          labelIconElement={<LotDimensionsIcon />}
          onChange={(e) => {
            setValue('lotDimensions', e.target.value);
          }}
        />

        <FormInput
          error={errors.rooms?.message}
          id="rooms"
          label="Rooms"
          name="rooms"
          register={register}
          type="number"
          min="0"
          step="1"
          placeholder="1"
          labelIconElement={<RoomsIcon />}
          onChange={(e) => {
            setValue('rooms', e.target.value);
          }}
        />

        <FormInput
          error={errors.garages?.message}
          id="garages"
          label="Garages"
          name="garages"
          register={register}
          type="number"
          min="0"
          step="1"
          placeholder="1"
          labelIconElement={<GarageIcon />}
          onChange={(e) => {
            setValue('garages', e.target.value);
          }}
        />

        <FormInput
          error={errors.price?.message}
          id="price"
          label="Price"
          name="price"
          register={register}
          placeholder="$10000"
          maxLength="7"
          labelIconElement={<PriceIcon />}
          onChange={(e) => {
            setValue('price', e.target.value);
          }}
        />
      </DetailsInputsContainer>

      <TextInputContainer>
        <TextAreaInput
          error={errors.overview?.message}
          id="overview"
          label="Overview"
          name="overview"
          rounded={false}
          register={register}
          defaultValue={values.overview}
          limit={140}
          labelIconElement={<OverviewIcon />}
        />

        <h4> To do: Implement Chips input </h4>
      </TextInputContainer>
    </>
  );
}

FormInputFields.propTypes = {
  errors: PropTypes.objectOf(
    PropTypes.shape({
      message: PropTypes.string,
      ref: PropTypes.instanceOf(Element),
      type: PropTypes.string,
    })
  ),
  register: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  values: PropTypes.shape({
    isAgent: PropTypes.bool,
    isOwner: PropTypes.bool,
    overview: PropTypes.string,
  }),
};

FormInputFields.defaultProps = {
  errors: null,
  register: null,
  values: {
    isAgent: false,
    isOwner: false,
    overview: '',
  },
};

export default FormInputFields;
