import React, { useRef, useState, useEffect } from 'react';
import { ReactComponent as RButton } from 'assets/Icons/arrow.svg';
import { ReactComponent as LButton } from 'assets/Icons/larrow.svg';
import Event from 'Mock/events.json';
import PropTypes from 'prop-types';
import EventCard from '../EventCards/EventCard';
import { Container, GridContainer } from './event-card-container.styles';
import { ScrollButtonsContainer } from '../ScrollButtons/scroll-button.styles';

export default function EventCardContainer({ filter }) {
  const data = Event;
  const ecc = useRef();
  const [newArr, setNewArr] = useState(data);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  function ScrollLeft() {
    ecc.current.scrollLeft -= 340;
  }
  function ScrollRight() {
    ecc.current.scrollLeft += 340;
  }
  useEffect(() => {
    function reduceArray() {
      const today = new Date();
      if (filter === 'Upcoming') {
        setNewArr(data.filter((obj) => new Date(obj.date) > today));
      } else if (filter === 'Past')
        setNewArr(data.filter((obj) => new Date(obj.date) < today));
      else if (filter === 'All') {
        setNewArr(data);
      }
    }
    reduceArray();
  }, [data, filter]);

  return (
    <GridContainer>
      <ScrollButtonsContainer>
        <LButton onClick={(e) => ScrollLeft(e)} />
        <RButton onClick={(e) => ScrollRight(e)} />
      </ScrollButtonsContainer>

      <Container columns={data.length} ref={ecc}>
        {newArr.map((event) => (
          <EventCard
            key={event.id}
            date={`${new Date(event.date).getDate()} ${
              months[new Date(event.date).getMonth()]
            }`}
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

EventCardContainer.propTypes = {
  filter: PropTypes.string.isRequired,
};
