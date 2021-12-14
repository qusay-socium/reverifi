import React, { useState } from 'react';
import EventSlideShow from 'components/common/Slider/EventSlideShow';
import EventsArray from 'Mock/events.json';

import {
  EventsSection,
  FilterButton,
  FilterButtonsContainer,
  SectionContainer,
  SectionTitle,
} from './events.styles';

/**
 * Home page events section.
 * @constant   activeFilter    Value of which the array of events will be filtered by
 * @method     reduceArray()   Uses filter and months to filter to recreate the data array
 * @return     {JSX.Element}
 */

export default function Events() {
  const [filteredEventsArray, setFilteredEventsArray] = useState(EventsArray);
  const [activeFilter, setActiveFilter] = useState('All');

  function reduceArray(filterBy) {
    const today = new Date();
    if (filterBy === 'Upcoming') {
      setFilteredEventsArray(
        EventsArray.filter((obj) => new Date(obj.date) > today)
      );
    } else if (filterBy === 'Past')
      setFilteredEventsArray(
        EventsArray.filter((obj) => new Date(obj.date) < today)
      );
    else {
      setFilteredEventsArray(EventsArray);
    }
  }

  return (
    <SectionContainer>
      <SectionTitle>Events</SectionTitle>
      <FilterButtonsContainer>
        <FilterButton
          active={!(activeFilter === 'All')}
          type="button"
          onClick={() => setActiveFilter('All', reduceArray('All'))}
        >
          All
        </FilterButton>
        <FilterButton
          active={!(activeFilter === 'Upcoming')}
          type="button"
          onClick={() => setActiveFilter('Upcoming', reduceArray('Upcoming'))}
        >
          Upcoming
        </FilterButton>
        <FilterButton
          active={!(activeFilter === 'Past')}
          type="button"
          onClick={() => setActiveFilter('Past', reduceArray('Past'))}
        >
          Past
        </FilterButton>
      </FilterButtonsContainer>

      <EventsSection>
        <EventSlideShow data={filteredEventsArray} />
      </EventsSection>
    </SectionContainer>
  );
}
