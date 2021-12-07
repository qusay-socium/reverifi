import React from 'react';

import Card from './Card';
import data from './data';
import Title from './featured-listing.styles';
import Scrollable from './Scrollable';

/**
 * Home page featured listing section.
 *
 * @return {JSX.Element}
 */
function FeaturedListing() {
  return (
    <div>
      <Title>Our Featured Listing</Title>
      <Scrollable initialCount={3} cardsNum={data.length}>
        {data.map((item) => (
          <Card data={item} key={item.title} />
        ))}
      </Scrollable>
    </div>
  );
}

export default FeaturedListing;
