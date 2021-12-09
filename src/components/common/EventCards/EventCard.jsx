import React from 'react';
import { ReactComponent as Add } from 'assets/Icons/add.svg';
import { ReactComponent as Share } from 'assets/Icons/share.svg';
import { ReactComponent as People } from 'assets/Icons/people.svg';
import PropTypes from 'prop-types';

import {
  Card,
  CardHeader,
  CardFooter,
  EventImage,
  EventDate,
  Title,
  EventInfo,
  FooterTop,
  FooterBottom,
  Attendees,
  ListingProperties,
  Property,
} from './event-card.styles';

export default function EventCard({
  title,
  date,
  startTime,
  endTime,
  location,
  attendees,
  imageUrl,
  eventType,
}) {
  return (
    <Card>
      <CardHeader>
        <EventImage alt="Event" src={imageUrl} />
      </CardHeader>
      <ListingProperties>
        <Property eventType={eventType}>{eventType}</Property>
      </ListingProperties>
      <EventDate>
        <p>{date}</p>
      </EventDate>
      <CardFooter>
        <FooterTop>
          <div>
            <Title>{title}</Title>
            <EventInfo>
              {startTime}-{endTime} @{location}
            </EventInfo>
          </div>
          <div>
            <Add />
            <Share />
          </div>
        </FooterTop>
        <FooterBottom>
          <Attendees>
            <People />
            <p>{attendees}</p>
          </Attendees>
        </FooterBottom>
      </CardFooter>
    </Card>
  );
}
EventCard.propTypes = {
  attendees: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
