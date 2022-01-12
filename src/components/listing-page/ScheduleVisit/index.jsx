import { ReactComponent as DateIcon } from 'assets/date-picker.svg';
import PropTypes from 'prop-types';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import data from './data';
import {
  DateButton,
  DateCard,
  DateContainer,
  DateSliderContainer,
  MainContainer,
  SubmitButton,
  Title,
} from './schedule-visit.styles';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <DateButton type="button" onClick={onClick} forwardedRef={ref}>
    <DateContainer>
      <DateIcon />
      {value}
    </DateContainer>
  </DateButton>
));

const responsive = [
  {
    breakpoint: 1370,
    settings: {
      slidesToScroll: 6,
      slidesToShow: 6,
    },
  },
  {
    breakpoint: 1250,
    settings: {
      slidesToScroll: 5,
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 1130,
    settings: {
      slidesToScroll: 4,
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 1030,
    settings: {
      slidesToScroll: 3,
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 980,
    settings: {
      slidesToScroll: 7,
      slidesToShow: 7,
    },
  },
  {
    breakpoint: 740,
    settings: {
      slidesToScroll: 6,
      slidesToShow: 6,
    },
  },
  {
    breakpoint: 650,
    settings: {
      slidesToScroll: 5,
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 560,
    settings: {
      slidesToScroll: 4,
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 470,
    settings: {
      slidesToScroll: 3,
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 385,
    settings: {
      slidesToScroll: 2,
      slidesToShow: 2,
    },
  },
];

/**
 * Listing page schedule-visit section.
 *
 * @returns {JSX.Element}
 */
function ScheduleVisit() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <MainContainer>
      <Title>Schedule Visit</Title>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
      />
      <DateSliderContainer>
        <Slider
          arrows
          dots={false}
          infinite={false}
          slidesToScroll={7}
          slidesToShow={7}
          responsive={responsive}
        >
          {data.map(({ date, day }) => (
            <DateCard key={date}>
              <span>{day}</span>
              {date}
            </DateCard>
          ))}
        </Slider>
      </DateSliderContainer>
      <SubmitButton type="button">Request this time</SubmitButton>
    </MainContainer>
  );
}

CustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};
CustomInput.defaultProps = {
  onClick: null,
  value: '',
};

export default ScheduleVisit;
