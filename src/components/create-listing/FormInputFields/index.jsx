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
import { ReactComponent as PropertyConditionIcon } from 'assets/icons/property-condition.svg';
import { ReactComponent as RoomsIcon } from 'assets/icons/rooms.svg';
import { ReactComponent as AgentIcon } from 'assets/icons/seller-agent.svg';
import { ReactComponent as PartialBathroomsIcon } from 'assets/icons/shower.svg';
import { ReactComponent as YearBuiltIcon } from 'assets/icons/year-built.svg';
import FormInput from 'components/shared/FormInput';
import SelectInput from 'components/shared/FormSelectInput';
import TextAreaInput from 'components/shared/FormTextArea';
import PropTypes from 'prop-types';
import React from 'react';
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
 * @param {string}   props.overviewText                  Overview input value.
 * @param {Function} [props.register=null]               The react-hook-form register function.
 * @param {Object}   props.errors                        Error message/s.
 * @param {Function} [props.handleIdentifierClick =null] The function to handle on click event for buttons.
 * @param {Set}      props.selectedIdentifiers           The currently selected buttons.
 * @param {Function} props.setOverviewText               Update the value of the overviewText state.
 *
 * @return {JSX.Element}
 */
function FormInputFields({
  overviewText,
  register,
  errors,
  handleIdentifierClick,
  selectedIdentifiers,
  setOverviewText,
}) {
  /**
   * @type {number} Maximum characters allowed for overview input.
   */
  const overviewCharsLimit = 140;

  /**
   * Updates overview input value.
   *
   * @param {React.ChangeEvent} event Object containing the new value for overview input.
   */
  const updateOverviewText = (event) => {
    const newValue = event.target.value;

    if (newValue.length <= overviewCharsLimit) {
      setOverviewText(newValue);
    }
  };

  return (
    <>
      <ButtonsContainer>
        <IdentifierButton
          aria-label="I am the owner(s)"
          onClick={() => handleIdentifierClick('I am the owner(s)')}
          selected={selectedIdentifiers?.has('I am the owner(s)')}
        >
          <OwnerIcon />I am the owner(s)
        </IdentifierButton>
        <IdentifierButton
          aria-label="I am the Seller Agent"
          onClick={() => handleIdentifierClick('I am the Seller Agent')}
          selected={selectedIdentifiers?.has('I am the Seller Agent')}
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
          name="propertyType"
          register={register}
          options={[
            'Residential',
            'Commercial',
            'Industrial',
            'Raw Land',
            'Special Use',
          ]}
          labelIconElement={<PropertyTypeIcon />}
        />

        <SelectInput
          error={errors.listingType?.message}
          id="listingType"
          label="Listing Type"
          name="listingType"
          register={register}
          options={[
            'Open Listings',
            'Exclusive Agency Listings',
            'Exclusive Right to Sell Listings',
            'Net Listings',
            'Multiple Listing Service (MLS)',
            'Limited-Service Listing Agreement',
          ]}
          labelIconElement={<ListingTypeIcon />}
        />

        <FormInput
          error={errors.yearBuilt?.message}
          id="yearBuilt"
          label="Year Built"
          name="yearBuilt"
          register={register}
          type="number"
          min="0"
          max="2022"
          step="1"
          placeholder="1995"
          labelIconElement={<YearBuiltIcon />}
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
        />

        <FormInput
          error={errors.homeArea?.message}
          id="homeArea"
          label="Home Area (Sq. Ft.)"
          name="homeArea"
          register={register}
          labelIconElement={<HomeAreaIcon />}
        />

        <FormInput
          error={errors.lotArea?.message}
          id="lotArea"
          label="Lot Area (Sq. Ft.)"
          name="lotArea"
          register={register}
          labelIconElement={<LotAreaIcon />}
        />

        <FormInput
          error={errors.lotDimensions?.message}
          id="lotDimensions"
          label="Lot dimensions"
          name="lotDimensions"
          register={register}
          labelIconElement={<LotDimensionsIcon />}
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
        />

        <FormInput
          error={errors.garage?.message}
          id="garage"
          label="Garage"
          name="garage"
          register={register}
          type="number"
          min="0"
          step="1"
          placeholder="1"
          labelIconElement={<GarageIcon />}
        />

        <SelectInput
          error={errors.propertyCondition?.message}
          id="propertyCondition"
          label="Property Condition"
          name="propertyCondition"
          register={register}
          options={['G', 'H', 'I']}
          labelIconElement={<PropertyConditionIcon />}
        />

        <FormInput
          error={errors.price?.message}
          id="price"
          label="Price"
          name="price"
          register={register}
          placeholder="$10000"
          labelIconElement={<PriceIcon />}
        />
      </DetailsInputsContainer>

      <TextInputContainer>
        <TextAreaInput
          error={errors.overview?.message}
          id="overview"
          label="Overview"
          name="overview"
          register={register}
          limit={overviewCharsLimit - overviewText.length}
          value={overviewText}
          onChange={updateOverviewText}
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
  handleIdentifierClick: PropTypes.func,
  overviewText: PropTypes.string,
  register: PropTypes.func,
  selectedIdentifiers: PropTypes.objectOf(PropTypes.string).isRequired,
  setOverviewText: PropTypes.func.isRequired,
};

FormInputFields.defaultProps = {
  errors: null,
  handleIdentifierClick: null,
  overviewText: '',
  register: null,
};

export default FormInputFields;
