import { ReactComponent as AddSVG } from 'assets/add-icon.svg';
import { ReactComponent as PeopleSVG } from 'assets/people.svg';
import { ReactComponent as ShareSVG } from 'assets/share-icon.svg';
import propTypes from 'prop-types';
import React from 'react';
import {
  AddButton,
  Attendees,
  ButtonsWrapper,
  CardContainer,
  CardImg,
  Description,
  EventDate,
  EventHeader,
  EventTimePlace,
  EventType,
  ShareButton,
} from './card.styles';

/**
 * Card component of Feature Selection section.
 *
 * @param {Object} props Component props.
 * @param {Object} props.data Data object of each card.
 *
 * @return {JSX.Element}
 */
function Card({ data }) {
  const { attendees, date, img, place, time, title, type } = data;

  return (
    <CardContainer>
      <CardImg src={img} />
      <EventType isPersonal={type === 'Personal'}>{type}</EventType>
      <EventDate>
        {date?.split('-')[0]} <br /> {date?.split('-')[1].toUpperCase()}
      </EventDate>
      <Description>
        <div>
          <EventHeader>{title}</EventHeader>
          <EventTimePlace>
            {time} @{place}
          </EventTimePlace>
        </div>
        <div>
          <ButtonsWrapper>
            <AddButton type="button">
              <AddSVG />
            </AddButton>
            <ShareButton type="button">
              <ShareSVG />
            </ShareButton>
          </ButtonsWrapper>
          <Attendees>
            <PeopleSVG />
            {attendees}
          </Attendees>
        </div>
      </Description>
    </CardContainer>
  );
}

Card.propTypes = {
  data: propTypes.shape({
    attendees: propTypes.number,
    date: propTypes.string,
    img: propTypes.string,
    place: propTypes.string,
    time: propTypes.string,
    title: propTypes.string,
    type: propTypes.string,
  }).isRequired,
};

export default Card;
