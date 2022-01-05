/* eslint-disable react/prop-types */
import { ReactComponent as DateIcon } from 'assets/date-picker.svg';
import Button from 'components/shared/Button';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import colors from 'styles/colors';
import data from './data';
import {
  DateCard,
  DateContainer,
  DateSliderContainer,
  MainContainer,
  SubmitDateSection,
  Title,
} from './schedule-visit.styles';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <Button
    type="button"
    onClick={onClick}
    forwardedRef={ref}
    backgroundColor={colors.white}
    color="black"
    padding="0"
  >
    <DateContainer>
      <DateIcon />
      {value}
    </DateContainer>
  </Button>
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
          {data.map((item) => (
            <DateCard key={item.date}>
              <span>{item.day}</span>
              {item.date}
            </DateCard>
          ))}
        </Slider>
      </DateSliderContainer>
      <SubmitDateSection>
        <Button type="button">Request this time</Button>
      </SubmitDateSection>
    </MainContainer>
  );
}

export default ScheduleVisit;
