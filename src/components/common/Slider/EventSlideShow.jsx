import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as RButton } from 'assets/Icons/arrow.svg';
import { ReactComponent as LButton } from 'assets/Icons/larrow.svg';
import PropTypes from 'prop-types';
import EventCard from 'components/common/EventCards/EventCard';
import { StyledSlide } from './event-slide-show.styles';

/**
 * @param      data        Array of Event Objects
 * @constant   months                     Array of strings representing months
 * @returns    {JSX.Element}
 */

export default function EventSlideShow({ data }) {
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
  return (
    <StyledSlide>
      <Slider
        nextArrow={<RButton />}
        prevArrow={<LButton />}
        speed={500}
        slidesToScroll={Math.min(4, data.length)}
        slidesToShow={Math.min(4, data.length)}
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
              slidesToScroll: Math.min(2, data.length),
              slidesToShow: Math.min(2, data.length),
            },
          },

          {
            // 1440px
            breakpoint: 1439,
            settings: {
              infinite: true,
              slidesToScroll: Math.min(3, data.length),
              slidesToShow: Math.min(3, data.length),
            },
          },

          {
            // 1920px
            breakpoint: 1919,
            settings: {
              infinite: true,
              slidesToScroll: Math.min(4, data.length),
              slidesToShow: Math.min(4, data.length),
            },
          },
        ]}
      >
        {data.map((event) => (
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
