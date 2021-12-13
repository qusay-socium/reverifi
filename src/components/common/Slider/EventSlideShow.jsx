import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as RButton } from 'assets/Icons/arrow.svg';
import { ReactComponent as LButton } from 'assets/Icons/larrow.svg';
import Events from 'Mock/events.json';
import PropTypes from 'prop-types';
import EventCard from 'components/common/EventCards/EventCard';
import { StyledSlide } from './event-slide-show.styles';

/**
 * @module     Events        A mock Representation of an array of event objects
 * @param      filter        Filters Events Based on date
 * @constant   months        array of months
 * @method     reduceArray() uses filter and months to filter to recreate the data array
 * @returns    {JSX.Element}
 */

export default function EventSlideShow({ filter }) {
  const data = Events;
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
    <StyledSlide>
      <Slider
        nextArrow={<RButton />}
        prevArrow={<LButton />}
        speed={500}
        slidesToScroll={Math.min(4, newArr.length)}
        slidesToShow={Math.min(4, newArr.length)}
        infinite
        swipeToSlide
        responsive={[
          {
            // 360px
            breakpoint: 360,
            settings: {
              infinite: true,
              slidesToScroll: 1,
              slidesToShow: 1,
            },
          },

          {
            // 768px
            breakpoint: 767,
            settings: {
              infinite: true,
              slidesToScroll: 1,
              slidesToShow: 1,
            },
          },

          {
            // 1180px
            breakpoint: 1179,
            settings: {
              infinite: true,
              slidesToScroll: Math.min(2, newArr.length),
              slidesToShow: Math.min(2, newArr.length),
            },
          },

          {
            // 1440px
            breakpoint: 1439,
            settings: {
              infinite: true,
              slidesToScroll: Math.min(3, newArr.length),
              slidesToShow: Math.min(3, newArr.length),
            },
          },

          {
            // 1920px
            breakpoint: 1919,
            settings: {
              infinite: true,
              slidesToScroll: Math.min(4, newArr.length),
              slidesToShow: Math.min(4, newArr.length),
            },
          },
        ]}
      >
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
      </Slider>
    </StyledSlide>
  );
}

EventSlideShow.propTypes = {
  filter: PropTypes.string.isRequired,
};
