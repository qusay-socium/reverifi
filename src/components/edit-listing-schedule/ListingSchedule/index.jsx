import Button from 'components/shared/Button';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getListingSchedule,
  submitListingSchedule,
} from 'services/listing-create-service';
import { getDifferenceBetweenTwoDates } from 'utils/helpers';
import DatePickerInputHandler from '../DateInput';
import Switch from '../Switch';
import TimeInput from '../TimeInput';
import { weekDays } from './days';
import {
  ButtonCancel,
  ButtonsContainer,
  DateInputWrapper,
  SetTime,
} from './edit-listing-schedule';

/**
 *
 * @return component for the schedule page
 */
function EditListingSchedule() {
  const { id } = useParams();
  const { handleSubmit, reset, control } = useForm();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [updateDate, setUpdateDate] = useState({});
  const [dateRange, setDateRange] = useState(weekDays);
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();

  const handleChange = (daySelected) => {
    Object.entries?.(dateRange).find(
      (day) =>
        day?.[1]?.id === daySelected.id &&
        setDateRange((currentDate) => ({
          ...currentDate,
          [day?.[0]]: { ...day?.[1], active: !daySelected.active },
        }))
    );
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const onSubmit = async () => {
    if (startDate && endDate) {
      setDateRange((currentDate) => ({
        ...currentDate,
        date: { endDate, startDate },
      }));
    }
    const date = {
      days: dateRange,
      endDate,
      listingId: id,
      startDate,
    };

    await submitListingSchedule(date);
    navigate(`/my-listings`);
    reset();
  };

  const handleCancel = () => {
    setDateRange(weekDays);
    reset();
  };

  const findPickedDays = (missingDays) => {
    const renderDays = [];
    [...Array(missingDays)].forEach((day, index) => {
      renderDays.push(
        new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate() + index
        ).getDay()
      );
    });
    return renderDays;
  };

  const getScheduleData = async () => {
    setUpdateDate(await getListingSchedule(id));
  };

  useEffect(() => {
    if (!isLoggedIn) navigate('/sign-up');
    getScheduleData();

    if (
      startDate &&
      endDate &&
      getDifferenceBetweenTwoDates(startDate, endDate, 7)
    ) {
      const pickedDaysDate = getDifferenceBetweenTwoDates(startDate, endDate);
      const PickedDaysNumber = findPickedDays(pickedDaysDate);

      PickedDaysNumber.forEach((dayNumber) =>
        Object.entries?.(dateRange).find(
          (day) =>
            day?.[1]?.id === dayNumber &&
            setDateRange((currentDate) => ({
              ...currentDate,
              [day?.[0]]: { ...day?.[1], outOfDate: false },
            }))
        )
      );
    } else {
      Object.entries?.(dateRange).forEach((day) => {
        setDateRange((currentDate) => ({
          ...currentDate,
          [day?.[0]]: { ...day?.[1], outOfDate: false },
        }));
      });
    }
  }, []);

  useEffect(() => {
    if (updateDate?.endDate) {
      setEndDate(updateDate?.endDate ? new Date(updateDate?.endDate) : null);
      setStartDate(
        updateDate?.startDate ? new Date(updateDate?.startDate) : null
      );
      setDateRange(updateDate?.days);
    }
  }, [updateDate]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DateInputWrapper>
          <DatePickerInputHandler
            placeholder="Select Date"
            date={startDate}
            setDate={setStartDate}
            minDate={new Date()}
            label="From"
          />
          <DatePickerInputHandler
            placeholder="Select Date"
            date={endDate}
            setDate={setEndDate}
            minDate={startDate || new Date()}
            label="To"
          />
        </DateInputWrapper>
        <div>
          {startDate &&
            endDate &&
            Object.values?.(dateRange)?.map(
              (day, index) =>
                !day.outOfDate &&
                index < 7 && (
                  <SetTime key={day?.id}>
                    <Switch day={day} handleChange={handleChange} />

                    <TimeInput
                      Controller={Controller}
                      control={control}
                      name={`${day?.label}-start`}
                      setStartDate={setStartDate}
                      day={day}
                      dateRange={dateRange}
                      setDateRange={setDateRange}
                      time={day?.startHour}
                    />
                    <span>To </span>
                    <TimeInput
                      Controller={Controller}
                      control={control}
                      name={`${day.label}-end`}
                      setStartDate={setStartDate}
                      filterPassedTime={filterPassedTime}
                      day={day}
                      dateRange={dateRange}
                      setDateRange={setDateRange}
                      time={day?.endHour}
                    />
                  </SetTime>
                )
            )}
        </div>

        <div>
          <ButtonsContainer>
            <ButtonCancel onClick={handleCancel}>Cancel</ButtonCancel>
            <Button type="submit">Add Schedule</Button>
          </ButtonsContainer>
        </div>
      </form>
    </div>
  );
}

export default EditListingSchedule;
