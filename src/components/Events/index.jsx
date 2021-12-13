import React, { useState } from 'react';
import EventSlideShow from 'components/common/Slider/EventSlideShow';
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
 * @return     {JSX.Element}
 */

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('All');
  return (
    <>
      <SectionContainer>
        <SectionTitle>Events</SectionTitle>
        <FilterButtonsContainer>
          <FilterButton
            active={!(activeFilter === 'All')}
            type="button"
            onClick={() => setActiveFilter('All')}
          >
            All
          </FilterButton>
          <FilterButton
            active={!(activeFilter === 'Upcoming')}
            type="button"
            onClick={() => setActiveFilter('Upcoming')}
          >
            Upcoming
          </FilterButton>
          <FilterButton
            active={!(activeFilter === 'Past')}
            type="button"
            onClick={() => setActiveFilter('Past')}
          >
            Past
          </FilterButton>
        </FilterButtonsContainer>
      </SectionContainer>

      <EventsSection>
        <EventSlideShow filter={activeFilter} />
      </EventsSection>
    </>
  );
}
