import { ReactComponent as DateIcon } from 'assets/date-picker.svg';
import PropTypes from 'prop-types';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import { Title } from 'components/listing-page/Details/details.styles';
import { mockDates, breakPoints } from './data';
import {
  Container,
  DateButton,
  DateCard,
  DateContainer,
  DateSliderContainer,
  SubmitButton,
} from './schedule-visit.styles';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <DateButton type="button" onClick={onClick} forwardedRef={ref}>
    <DateContainer>
      <DateIcon />
      {value}
    </DateContainer>
  </DateButton>
));

/**
 * Listing page schedule-visit section.
 *
 * @returns {JSX.Element}
 */
function ScheduleVisit() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
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
          responsive={breakPoints}
        >
          {mockDates.map(({ date, day }) => (
            <DateCard key={date}>
              <span>{day}</span>
              {date}
            </DateCard>
          ))}
        </Slider>
      </DateSliderContainer>
      <SubmitButton type="button">Request this time</SubmitButton>
    </Container>
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
