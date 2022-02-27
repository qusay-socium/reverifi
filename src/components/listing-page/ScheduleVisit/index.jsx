import { ReactComponent as DateIcon } from 'assets/date-picker.svg';
import { Title } from 'components/listing-page/Details/details.styles';
import PropTypes from 'prop-types';
import React, { forwardRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import { getDifferenceBetweenTwoDates } from 'utils/helpers';
import { breakPoints } from './data';
import {
  Container,
  DateButton,
  DateCard,
  DateContainer,
  DateSliderContainer,
  MonthDate,
  SliderWrapper,
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
function ScheduleVisit({ data }) {
  const [dateRange, setDateRange] = useState([]);
  const [selectedDay, setSelectedDay] = useState([]);
  const [selectedHour, setSelectedHour] = useState(null);

  const { endDate, startDate, days } = data;

  const time = getDifferenceBetweenTwoDates?.(startDate, endDate);

  const findPickedDays = (missingDays) => {
    const renderDays = [];
    [...Array(missingDays)].forEach((day, index) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + index + 1);
      renderDays.push(currentDate);
    });
    return renderDays;
  };
  const getSelectedDate = (day) => {
    Object.values(days).find(
      (currentDay) =>
        currentDay.id === day.getDay() && setSelectedDay(currentDay)
    );
  };

  useEffect(() => {
    setDateRange(findPickedDays(time));
  }, [selectedHour]);

  return (
    <Container>
      <Title>Schedule Visit</Title>

      <DateSliderContainer>
        <SliderWrapper>
          <Slider
            arrows
            dots={false}
            infinite={false}
            slidesToScroll={7}
            slidesToShow={7}
            responsive={breakPoints}
          >
            {dateRange?.map((day) => (
              <DateCard key={day} onClick={() => getSelectedDate(day)}>
                <span>{day.toString().split(' ')[0]}</span>
                <MonthDate>
                  <span>{day.toString().split(' ')[2]}</span>
                  <span>{day.toString().split(' ')[1]}</span>
                </MonthDate>
              </DateCard>
            ))}
          </Slider>
        </SliderWrapper>

        {selectedDay?.startHour && (
          <ReactDatePicker
            selected={new Date(selectedHour || selectedDay?.startHour)}
            className="input"
            onChange={(e) => {
              setSelectedHour(e);
            }}
            placeholderText="Choose a Time"
            dateFormat="h:mm aa"
            timeIntervals={60}
            showTimeSelect
            showTimeSelectOnly
            minTime={new Date(selectedDay?.startHour)}
            maxTime={new Date(selectedDay?.endHour)}
          />
        )}
      </DateSliderContainer>
      <SubmitButton type="button">Request This Time</SubmitButton>
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

ScheduleVisit.propTypes = {
  data: PropTypes.string,
};

ScheduleVisit.defaultProps = {
  data: null,
};
export default ScheduleVisit;
