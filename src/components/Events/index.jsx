import React, { useState } from 'react';
import EventCardContainer from 'components/common/EventCardContainer/EventCardContainer';
import { EventsSection, SectionTitle } from './events.styles';

/**
 * Home page events section.
 *
 * @return {JSX.Element}
 */
function Events() {
  const [filter, setFilter] = useState('');
  return (
    <EventsSection>
      <SectionTitle>Events</SectionTitle>
      <button type="button" onClick={() => setFilter('All')}>
        All
      </button>
      <button type="button" onClick={() => setFilter('Upcoming')}>
        Upcoming
      </button>
      <button type="button" onClick={() => setFilter('Past')}>
        Past
      </button>
      <EventCardContainer filter={filter} />
    </EventsSection>
  );
}

export default Events;
