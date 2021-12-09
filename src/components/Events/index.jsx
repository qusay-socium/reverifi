import React, { useState } from 'react';
import EventCardContainer from 'components/common/EventCardContainer/EventCardContainer';
import EventSlideShow from 'components/ReactSlick/EventSlideShow';
import {
  EventsSection,
  FilterButton,
  FilterButtonsContainer,
  SectionTitle,
} from './events.styles';

/**
 * Home page events section.
 *
 * @return {JSX.Element}
 */

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('All');
  return (
    <>
      <EventsSection>
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

        <EventCardContainer filter={activeFilter} />
      </EventsSection>

      <EventsSection>
        <EventSlideShow filter={activeFilter} />
      </EventsSection>
    </>
  );
}
