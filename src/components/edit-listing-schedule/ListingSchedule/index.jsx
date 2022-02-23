import Button from 'components/shared/Button';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { submitListingSchedule } from 'services/listing-create-service';
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
// eslint-disable-next-line react/prop-types
function EditListingSchedule() {
  const { id } = useParams();
  const { handleSubmit, reset, control } = useForm();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateRange, setDateRange] = useState(weekDays);
  const navigate = useNavigate();

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

  const onSubmit = async (data) => {
    if (startDate && endDate) {
      setDateRange((currentDate) => ({
        ...currentDate,
        date: { endDate, startDate },
      }));
    }
    const date = {
      days: data,
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

  useEffect(() => {
    setDateRange(weekDays);

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
  }, [startDate, endDate]);

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
                    />
                    <p>To</p>
                    <TimeInput
                      Controller={Controller}
                      control={control}
                      name={`${day.label}-end`}
                      setStartDate={setStartDate}
                      filterPassedTime={filterPassedTime}
                      day={day}
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
