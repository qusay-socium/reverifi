import { ReactComponent as AddressIcon } from 'assets/icons/location.svg';
import { ReactComponent as BedIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as WifiIcon } from 'assets/icons/wifi.svg';
import { ReactComponent as BathroomIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as ConditionerIcon } from 'assets/icons/air-conditioner.svg';
import { ReactComponent as BenchIcon } from 'assets/icons/bench.svg';
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
 * @param {string} props.price Price of the apartment.
 *
 * @return {JSX.Element} The data card holding all of the apartment's information.
 */
function DataCard({ title, address, price }) {
  return (
    <Card>
      <PrimaryText>{toUpperCaseFirstLetter(title)}</PrimaryText>
      <Address>
        <AddressIcon />
        <SecondaryText>{address}</SecondaryText>
      </Address>
      <Services>
        <SecondaryText>
          {'2 '}
          <BedIcon />
        </SecondaryText>
        <WifiIcon />
        <SecondaryText>
          {'1 '}
          <BathroomIcon />
        </SecondaryText>
        <ConditionerIcon />
        <BenchIcon />
      </Services>
      <PrimaryText>{price}</PrimaryText>
    </Card>
  );
}

DataCard.defaultProps = {
  address: '107 Rose Dr, Knoxville, TN 37918',
  price: '$30,000',
  title: 'Entire residential home hosted by Beach',
};

DataCard.propTypes = {
  address: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
};

export default DataCard;
