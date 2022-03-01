import { yupResolver } from '@hookform/resolvers/yup';
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
} from './edit-listing-schedule.style';
import listingScheduleSchema from './listing-schedule-schema';

/**
 *
 * @return component for the schedule page
 */
function EditListingSchedule() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [updateDate, setUpdateDate] = useState(null);
  const [dateRange, setDateRange] = useState(weekDays);

  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(listingScheduleSchema),
  });

  const handleChange = (daySelected) => {
    Object.entries?.(dateRange).find(
      (day) =>
        day?.[1]?.id === daySelected.id &&
        setDateRange((currentDate) => ({
          ...currentDate,
          [day?.[0]]: {
            ...day?.[1],
            active: !daySelected.active,
            endHour: null,
            startHour: null,
          },
        }))
    );
  };

  const filterPassedTime = (time, startTime) => {
    const currentDate = new Date(startTime);
    const selectedDate = new Date(time);

    if (startTime) {
      return currentDate.getTime() < selectedDate.getTime();
    }
    return null;
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
    setStartDate(null);
    setEndDate(null);
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
              [day?.[0]]: {
                ...day?.[1],
                outOfDate: false,
              },
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
  }, [startDate, endDate, updateDate]);

  useEffect(() => {
    getScheduleData();

    if (updateDate) {
      setEndDate(updateDate?.endDate ? new Date(updateDate?.endDate) : null);
      setStartDate(
        updateDate?.startDate ? new Date(updateDate?.startDate) : null
      );
      setDateRange(updateDate?.days);
    }
  }, [updateDate?.endDate, updateDate?.startDate]);

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
        {startDate && endDate && (
          <>
            <div>
              {Object.values?.(dateRange)?.map(
                (day, index) =>
                  !day?.outOfDate &&
                  index < 7 && (
                    <SetTime key={day?.id}>
                      <Switch
                        day={day}
                        handleChange={handleChange}
                        register={register}
                      />
                      <TimeInput
                        Controller={Controller}
                        control={control}
                        name={`${day?.label}-start`}
                        schemaName={`${day?.label}Start`}
                        setDateRange={setDateRange}
                        day={day}
                        dateRange={dateRange}
                        time={day?.startHour}
                        error={errors[`${day?.label}Start`]?.message}
                      />
                      <span>To </span>
                      <TimeInput
                        Controller={Controller}
                        control={control}
                        name={`${day.label}-end`}
                        schemaName={`${day?.label}End`}
                        setDateRange={setDateRange}
                        filterPassedTime={filterPassedTime}
                        day={day}
                        dateRange={dateRange}
                        error={errors[`${day?.label}End`]?.message}
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
          </>
        )}
      </form>
    </div>
  );
}

export default EditListingSchedule;
