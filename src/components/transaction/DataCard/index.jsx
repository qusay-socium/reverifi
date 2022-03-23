import { ReactComponent as BathroomIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as BedIcon } from 'assets/icons/bedroom.svg';
import Tooltip from 'components/shared/Tooltip';
import {
  Card,
  PrimaryText,
  SecondaryText,
  Services,
} from 'components/transaction/DataCard/data-card.styles';
import PropTypes from 'prop-types';
import React from 'react';
import { toUpperCaseFirstLetter } from 'utils/helpers';

/**
 * Agent Card.
 *
 * @param {Object} props Props passed to Data Card.
 * @param {string} props.address Address of apartment.
 * @param {string} props.propertyType Name of apartment.
 * @param {number} props.price Price of the apartment.
 * @param {number} bathtubs Number of bathrooms in the apartment.
 * @param {number} rooms Number of rooms in the apartment.
 * @param {string} lotArea Total area of lot.
 * @param {string} lotDimensions Size of lot.
 * @return {JSX.Element} The data card holding all of the apartment's information.
 */
function DataCard({
  address,
  bathtubs,
  lotArea,
  lotDimensions,
  price,
  propertyType,
  rooms,
}) {
  const formatPrice = (priceInt) => {
    if (price) {
      const priceText = priceInt.toString();
      const lastElement = priceText.length - 1;
      let formattedPrice = '$';
      for (let index = 0; index < priceText.length; index += 1) {
        formattedPrice += priceText[index];
        if (index !== lastElement && (lastElement - index) % 3 === 0) {
          formattedPrice += ',';
        }
      }

      return formattedPrice;
    }
    return '0';
  };

  return (
    <Card>
      <PrimaryText>
        {toUpperCaseFirstLetter(address)}
        <Tooltip
          text={toUpperCaseFirstLetter(address)}
          arrowPosition="top"
          position={[2.8, 6]}
        />
      </PrimaryText>

      <SecondaryText>{propertyType || 'others'}</SecondaryText>
      <Services>
        <SecondaryText>
          {`${rooms} `}
          <BedIcon />
        </SecondaryText>
        <SecondaryText>
          {`${bathtubs} `}
          <BathroomIcon />
        </SecondaryText>
        <SecondaryText>{lotArea} sqft</SecondaryText>
        <SecondaryText>{lotDimensions} sqft</SecondaryText>
      </Services>
      <PrimaryText>{formatPrice(price)}</PrimaryText>
    </Card>
  );
}

DataCard.defaultProps = {
  address: '107 Rose Dr, Knoxville, TN 37918',
  bathtubs: 1,
  lotArea: '687',
  lotDimensions: '768',
  price: 30000,
  propertyType: 'others',
  rooms: 1,
};

DataCard.propTypes = {
  address: PropTypes.string,
  bathtubs: PropTypes.number,
  lotArea: PropTypes.string,
  lotDimensions: PropTypes.string,
  price: PropTypes.number,
  propertyType: PropTypes.string,
  rooms: PropTypes.number,
};

export default DataCard;
