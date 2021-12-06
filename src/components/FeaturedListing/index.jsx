import React from 'react';

import Card from './Card';
import data from './data';
import Title, { Flex } from './featured-listing.styles';

/**
 * Home page featured listing section.
 *
 * @return {JSX.Element}
 */
function FeaturedListing() {
  return (
    <div>
      <Title>TODO: implement featured listing.</Title>
      <Flex>
        <Card data={data[0]} />
        {/* <Card data={data[1]} />
        <Card data={data[2]} /> */}
      </Flex>
    </div>
  );
}

export default FeaturedListing;
