import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  FeaturesItem,
  Image,
  Label,
  Title,
  Wrapper,
} from './features.styles';

/**
 * Listing page details section.
 *
 * @param {Object} props      The component props.
 * @param {Object} props.data The component data.
 *
 * @return {JSX.Element}
 */
function Features({ data }) {
  const { features, icons } = data;

  return (
    <Container>
      <Title> Features </Title>
      <Wrapper>
        {Object.keys(features).map(
          (key, index) =>
            features[key] && (
              <FeaturesItem key={key}>
                <Image src={icons[index]} alt={key} />
                <Label>{key}</Label>
              </FeaturesItem>
            )
        )}
      </Wrapper>
    </Container>
  );
}

Features.propTypes = {
  data: PropTypes.shape({
    features: PropTypes.shape({
      'Air Conditioning': PropTypes.bool.isRequired,
      'Central Heating': PropTypes.bool.isRequired,
      'Cleaning Service': PropTypes.bool.isRequired,
      'Dining Room': PropTypes.bool.isRequired,
      Dryer: PropTypes.bool.isRequired,
      GYM: PropTypes.bool.isRequired,
      Parking: PropTypes.bool.isRequired,
      Sauna: PropTypes.bool.isRequired,
      'Swimming Pool': PropTypes.bool.isRequired,
      'TV Cable': PropTypes.bool.isRequired,
      WIFI: PropTypes.bool.isRequired,
    }).isRequired,
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Features;
