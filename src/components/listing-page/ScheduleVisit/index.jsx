import { Title } from 'components/listing-page/Details/details.styles';
import Toast from 'components/shared/Toast';
import { useUser } from 'contexts/UserContext';
import useShowToastBar from 'hooks/use-show-toast-bar';
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
  const [isActiveDay, setIsActiveDay] = useState(null);
  const [selectedDay, setSelectedDay] = useState([]);
  const [filteredDays, setFilteredDays] = useState([]);
  const [selectedHour, setSelectedHour] = useState(null);
  const [requestedDate, setRequestedDate] = useState(null);
  const [isScheduleSaved, setIsScheduleSaved] = useState(false);

  const { endDate, startDate, days } = data;
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();
  useShowToastBar(isScheduleSaved, setIsScheduleSaved);

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

    Object.values(days).find(
      (currentDay) =>
        (currentDay.id === filteredData?.[0]?.date.getDay() &&
          setSelectedDay(currentDay),
        isActiveDay) || setIsActiveDay(filteredData?.[0]?.date.toString()),
      selectedHour || setSelectedHour(selectedDay?.startHour),
      requestedDate || setRequestedDate(filteredData?.[0]?.date)
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

    if (requestedDate && selectedHour) {
      submitListingVisit({
        dateTime: { date: requestedDate, time: selectedHour },
        listingId: id,
      });
      setIsScheduleSaved(true);
    }
  };

  useEffect(() => {
    setDateRange(findPeriodBetweenDates(time));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedHour]);

  useEffect(() => {
    filterActiveDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange, isActiveDay]);

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
          {filteredDays?.map(({ dayName, month, number, date }) => (
            <DateCard
              IsActiveDay={isActiveDay === date?.toString()}
              key={date}
              onClick={() => {
                getSelectedDate(date);
                setRequestedDate(date);
                setSelectedHour(null);
                setIsActiveDay(date.toString());
              }}
            >
              <span>{dayName}</span>
              <MonthDate>
                <span>{month}</span>
                <span>{number}</span>
              </MonthDate>
            </DateCard>
          ))}
        </Slider>

        {selectedDay?.startHour && (
          <ReactDatePicker
            selected={
              selectedHour
                ? new Date(selectedHour)
                : new Date(selectedDay?.startHour)
            }
            className="input"
            onChange={(e) => {
              setSelectedHour(e);
            }}
            placeholderText="Choose a Time"
            dateFormat="h:mm aa"
            timeIntervals={15}
            showTimeSelect
            showTimeSelectOnly
            minTime={new Date(selectedDay?.startHour)}
            maxTime={new Date(selectedDay?.endHour)}
            popperModifiers={[
              {
                name: 'arrow',
                options: {
                  padding: 50,
                },
              },
            ]}
          />
        )}
      </DateSliderContainer>
      <SubmitButton onClick={handleSubmit} type="button">
        Request This Time
      </SubmitButton>

      {isScheduleSaved && (
        <Toast status="success" message="Your request has been sent!" />
      )}
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
