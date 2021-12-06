import React from 'react';

import Card from './Card';
import data from './data';
import Title, { CardsFlex } from './featured-listing.styles';

/**
 * Home page featured listing section.
 *
 * @return {JSX.Element}
 */
function FeaturedListing() {
  return (
    <div>
      <Title>Our Featured Listing</Title>
      <CardsFlex>
        <Card data={data[0]} />
        <Card data={data[1]} />
        <Card data={data[2]} />
      </CardsFlex>
    </div>
  );
}

export default FeaturedListing;
