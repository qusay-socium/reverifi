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
  LeftContent,
  ListItem,
  MainContainer,
  RightContent,
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

  const changeActive = (e) => {
    const theActiveFilter = e.target.textContent.toLowerCase();
    setActiveFilter(theActiveFilter);
  };

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
        <ListItem>
          <ClickableItem
            onClick={changeActive}
            activeFilter={activeFilter === 'all'}
          >
            All
          </ClickableItem>
        </ListItem>
        <ListItem>
          <ClickableItem
            onClick={changeActive}
            activeFilter={activeFilter === 'upcoming'}
          >
            Upcoming
          </ClickableItem>
        </ListItem>
        <ListItem>
          <ClickableItem
            onClick={changeActive}
            activeFilter={activeFilter === 'past'}
          >
            Past
          </ClickableItem>
        </ListItem>
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
                  <LeftContent>
                    <EventHeader>{item.title}</EventHeader>
                    <EventTimePlace>
                      {item.time} @{item.place}
                    </EventTimePlace>
                  </LeftContent>
                  <RightContent>
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
                  </RightContent>
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
