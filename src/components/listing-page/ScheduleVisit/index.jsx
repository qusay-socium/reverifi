import { Title } from 'components/listing-page/Details/details.styles';
import { useUser } from 'contexts/UserContext';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { submitListingVisit } from 'services/listing-create-service';
import { getDifferenceBetweenTwoDates } from 'utils/helpers';
import { breakPoints } from './data';
import {
  Container,
  DateCard,
  DateSliderContainer,
  MonthDate,
  SubmitButton,
} from './schedule-visit.styles';

/**
 * Listing page schedule-visit section.
 *
 * @param {object} data schedule date and time
 * @param {uuid} id for the listing
 *
 * @returns {JSX.Element}
 */
function ScheduleVisit({ data, id }) {
  const [dateRange, setDateRange] = useState([]);
  const [selectedDay, setSelectedDay] = useState([]);
  const [filteredDays, setFilteredDays] = useState([]);
  const [selectedHour, setSelectedHour] = useState(null);
  const [requestedDate, setRequestedDate] = useState(null);

  const { endDate, startDate, days } = data;
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();

  const time = getDifferenceBetweenTwoDates?.(startDate, endDate);

  const findPeriodBetweenDates = (missingDays) => {
    const renderDays = [];
    [...Array(missingDays)].forEach((day, index) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + index);
      renderDays.push(currentDate);
    });

    const newDays = renderDays?.map((day) => ({
      date: day,
      dayName: day?.toString()?.split(' ')?.[0],
      month: day?.toString()?.split(' ')?.[2],
      number: day?.toString()?.split(' ')?.[1],
    }));

    return newDays;
  };

  const filterActiveDays = () => {
    const filteredData = [];
    dateRange.map((date) =>
      Object.values?.(days).map(
        (day) =>
          date?.date?.getDay() === day.id &&
          day?.active &&
          filteredData.push(date)
      )
    );
    setFilteredDays(filteredData);
  };

  const getSelectedDate = (day) => {
    Object.values(days).find(
      (currentDay) =>
        currentDay.id === day.getDay() && setSelectedDay(currentDay)
    );
  };

  const handleSubmit = () => {
    if (!isLoggedIn) {
      navigate('/login');
    }
    submitListingVisit({
      dateTime: { date: requestedDate, time: selectedHour },
      listingId: id,
    });
  };

  useEffect(() => {
    setDateRange(findPeriodBetweenDates(time));
  }, [selectedHour]);

  useEffect(() => {
    filterActiveDays();
  }, [dateRange]);

  return (
    <Container>
      <Title>Schedule Visit</Title>

      <DateSliderContainer>
        <Slider
          arrows
          dots={false}
          infinite={false}
          slidesToScroll={7}
          slidesToShow={filteredDays.length < 7 ? filteredDays.length : 7}
          responsive={breakPoints}
        >
          {filteredDays?.map(
            ({ dayName, month, number, date }) =>
              true && (
                <DateCard
                  key={dayName}
                  onClick={() => {
                    getSelectedDate(date);
                    setRequestedDate(date);
                  }}
                >
                  <span>{dayName}</span>
                  <MonthDate>
                    <span>{month}</span>
                    <span>{number}</span>
                  </MonthDate>
                </DateCard>
              )
          )}
        </Slider>

        {selectedDay?.startHour && (
          <ReactDatePicker
            selected={selectedHour ? new Date(selectedHour) : null}
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
      <SubmitButton onClick={handleSubmit} type="button">
        Request This Time
      </SubmitButton>
    </Container>
  );
}

ScheduleVisit.propTypes = {
  data: PropTypes.string,
  id: PropTypes.string.isRequired,
};

ScheduleVisit.defaultProps = {
  data: null,
};
export default ScheduleVisit;
