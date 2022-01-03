import { ReactComponent as AddSVG } from 'assets/add-icon.svg';
import { ReactComponent as PeopleSVG } from 'assets/people.svg';
import { ReactComponent as ShareSVG } from 'assets/share-icon.svg';
import React, { useState } from 'react';
import Slider from 'react-slick';
import breakpoints from 'styles/breakpoints';
import data from './data';
import {
  AddButton,
  Attendees,
  Buttons,
  Card,
  CardImg,
  CardsContainer,
  ClickableItem,
  Description,
  EventDate,
  EventHeader,
  EventTimePlace,
  EventType,
  FilterList,
  MainContainer,
  ShareButton,
  Title,
} from './events.styles';

/**
 * Home page events section.
 *
 * @return {JSX.Element}
 */
function Events() {
  const [activeFilter, setActiveFilter] = useState('all');

  /**
   * Changes the state of the feature component (can be either active or inactive).
   *
   * @param {event} event The event triggered by the click.
   */
  const changeActive = (event) => {
    const theActiveFilter = event.target.textContent.toLowerCase();
    setActiveFilter(theActiveFilter);
  };

  /**
   * Filters events data depending on if it was already established or not (can be either all, past or upcoming).
   *
   * @return {Array} Filtered array.
   */
  const filterData = () =>
    data.filter(
      (item) => activeFilter === 'all' || item.establish === activeFilter
    );

  const remToPx = (remString) =>
    Math.round(Number(remString.replace('rem', '')) * 16);

  return (
    <MainContainer>
      <Title>Events</Title>
      <FilterList>
        <li>
          <ClickableItem
            onClick={changeActive}
            activeFilter={activeFilter === 'all'}
          >
            All
          </ClickableItem>
        </li>
        <li>
          <ClickableItem
            onClick={changeActive}
            activeFilter={activeFilter === 'upcoming'}
          >
            Upcoming
          </ClickableItem>
        </li>
        <li>
          <ClickableItem
            onClick={changeActive}
            activeFilter={activeFilter === 'past'}
          >
            Past
          </ClickableItem>
        </li>
      </FilterList>
      <CardsContainer>
        <Slider
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={4}
          slidesToScroll={4}
          arrows
          responsive={[
            {
              breakpoint: remToPx(breakpoints.tablet),
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
              },
            },
            {
              breakpoint: remToPx(breakpoints.desktop),
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: remToPx(breakpoints.desktopMax),
              settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
              },
            },
          ]}
        >
          {filterData().map((item) => {
            const splitdate = item.date.split('-');
            const day = splitdate[0];
            const month = splitdate[1].toUpperCase();
            let isPersonal = true;
            if (item.type === 'Webinar') isPersonal = false;
            return (
              <Card key={item.id}>
                <CardImg src={item.img} />
                <EventType isPersonal={isPersonal}>{item.type}</EventType>
                <EventDate>
                  {day} <br /> {month}
                </EventDate>
                <Description>
                  <div>
                    <EventHeader>{item.title}</EventHeader>
                    <EventTimePlace>
                      {item.time} @{item.place}
                    </EventTimePlace>
                  </div>
                  <div>
                    <Buttons>
                      <AddButton type="button">
                        <AddSVG />
                      </AddButton>
                      <ShareButton type="button">
                        <ShareSVG />
                      </ShareButton>
                    </Buttons>
                    <Attendees>
                      <PeopleSVG />
                      {item.attendees}
                    </Attendees>
                  </div>
                </Description>
              </Card>
            );
          })}
        </Slider>
      </CardsContainer>
    </MainContainer>
  );
}

export default Events;
