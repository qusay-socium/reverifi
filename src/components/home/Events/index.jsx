import Card from 'components/home/Card';
import React, { useState } from 'react';
import Slider from 'react-slick';
import data from './data';
import {
  CardsContainer,
  FilterButton,
  FilterList,
  MainContainer,
  Title,
} from './events.styles';

/**
 * Slider responsive config
 */
const responsiveConfig = [
  {
    breakpoint: 650,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 980,
    settings: {
      slidesToScroll: 2,
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToScroll: 3,
      slidesToShow: 3,
    },
  },
];

/**
 * Home page events section.
 *
 * @return {JSX.Element}
 */
function Events() {
  const [isActive, setIsActive] = useState('all');

  /**
   * Changes the state of the feature component (can be all, past or upcoming).
   *
   * @param {string} filter Chosen filter passed by the clicked element.
   */
  const handleFilterChange = (filter) => {
    setIsActive(filter);
  };

  /**
   * Filters events data depending on if it was already established or not (can be all, past or upcoming).
   *
   * @return {Array} Filtered array.
   */
  const filterData = () =>
    data.filter(
      ({ establish }) => isActive === 'all' || establish === isActive
    );

  return (
    <MainContainer>
      <Title>Events</Title>
      <FilterList>
        <FilterButton
          onClick={() => handleFilterChange('all')}
          isActive={isActive === 'all'}
        >
          All
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterChange('upcoming')}
          isActive={isActive === 'upcoming'}
        >
          Upcoming
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterChange('past')}
          isActive={isActive === 'past'}
        >
          Past
        </FilterButton>
      </FilterList>
      <CardsContainer>
        <Slider
          infinite={filterData().length > 3}
          dots={false}
          slidesToShow={4}
          slidesToScroll={4}
          arrows
          responsive={responsiveConfig}
        >
          {filterData().map(({ id, ...itemData }) => (
            <Card key={id} data={itemData} />
          ))}
        </Slider>
      </CardsContainer>
    </MainContainer>
  );
}

export default Events;
