/* eslint-disable react/prop-types */
import { ReactComponent as DateIcon } from 'assets/date-picker.svg';
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
    breakpoint: 750,
    settings: {
      slidesToScroll: 6,
      slidesToShow: 6,
    },
  },
  {
    breakpoint: 660,
    settings: {
      slidesToScroll: 5,
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 580,
    settings: {
      slidesToScroll: 4,
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 450,
    settings: {
      slidesToScroll: 3,
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 360,
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

export default ScheduleVisit;
