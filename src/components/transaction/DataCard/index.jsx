import { ReactComponent as AddressIcon } from 'assets/icons/location.svg';
import { ReactComponent as BedIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as BathroomIcon } from 'assets/icons/bathtub.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { toUpperCaseFirstLetter } from 'utils/helpers';
import {
  Card,
  Services,
  PrimaryText,
  SecondaryText,
  Address,
} from 'components/transaction/DataCard/data-card.styles';

/**
 * Agent Card.
 *
 * @param {Object} props Props passed to Data Card.
 * @param {string} props.address Address of apartment.
 * @param {string} props.title Name of apartment.
 * @param {number} props.price Price of the apartment.
 * @param {number} bathtubs Number of bathrooms in the apartment.
 * @param {number} rooms Number of rooms in the apartment.
 * @param {string} lotArea Total area of lot.
 * @param {string} lotDimensions Size of lot.
 * @return {JSX.Element} The data card holding all of the apartment's information.
 */
function DataCard({
  title,
  address,
  price,
  bathtubs,
  rooms,
  lotArea,
  lotDimensions,
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
      <PrimaryText>{toUpperCaseFirstLetter(title)}</PrimaryText>
      <Address>
        <AddressIcon />
        <SecondaryText>{address}</SecondaryText>
      </Address>
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
  price: 30000,
  title: 'Entire residential home hosted by Beach',
  bathtubs: 1,
  rooms: 1,
  lotArea: '687',
  lotDimensions: '768',
};

DataCard.propTypes = {
  address: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  bathtubs: PropTypes.number,
  rooms: PropTypes.number,
  lotArea: PropTypes.string,
  lotDimensions: PropTypes.string,
};

export default DataCard;
