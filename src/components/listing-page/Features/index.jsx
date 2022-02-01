import { Image } from 'components/home/FeaturedListingCard/featured-listing-card.styles';
import { Title } from 'components/listing-page/Details/details.styles';
import PropTypes from 'prop-types';
import React from 'react';
import data from './data';
import { Container, FeaturesItem, Label, Wrapper } from './features.styles';

/**
 * Listing page details section.
 *
 * @param {Object} props      The component props.
 * @param {Object} props.data The component data.
 *
 * @return {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
function Features({ features }) {
  if (features.length === 0) return null;
  return (
    <Container>
      <Title> Features </Title>
      <Wrapper>
        {data.map((key) => (
          <FeaturesItem
            key={key.feature}
            selected={features.find((list) => list.feature === key.feature)}
          >
            <Image src={key.icon} />
            <Label>{key.feature}</Label>
          </FeaturesItem>
        ))}
      </Wrapper>
    </Container>
  );
}

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Features;
