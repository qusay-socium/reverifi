import React, { useRef } from 'react';
import { ReactComponent as RButton } from 'assets/Icons/arrow.svg';
import { ReactComponent as LButton } from 'assets/Icons/larrow.svg';
import Event from 'Mock/events.json';
import EventCard from '../EventCards/EventCard';
import { Container, GridContainer } from './event-card-container.styles';
import { ScrollButtonsContainer } from '../ScrollButtons/scroll-button.styles';

export default function EventCardContainer() {
  const data = Event;
  const ecc = useRef();

  function ScrollLeft() {
    ecc.current.scrollLeft -= 340;
  }
  function ScrollRight() {
    ecc.current.scrollLeft += 340;
  }
  return (
    <GridContainer>
      <ScrollButtonsContainer>
        <LButton onClick={(e) => ScrollLeft(e)} />
        <RButton onClick={(e) => ScrollRight(e)} />
      </ScrollButtonsContainer>

      <Container columns={data.length} ref={ecc}>
        {data.map((event) => (
          <EventCard
            key={event.id}
            date={event.date}
            title={event.title}
            startTime={event.startTime}
            endTime={event.endTime}
            location={event.location}
            attendees={event.attendees}
            imageUrl={event.imageUrl}
            eventType={event.eventType}
          />
        ))}
      </Container>
    </GridContainer>
  );
}
