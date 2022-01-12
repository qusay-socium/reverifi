/* eslint-disable arrow-body-style */
import { ReactComponent as ArrowDown } from 'assets/mocks/images/arrow-down.svg';
import Button from 'components/shared/Button';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import DatePickerInput from '../DateInput';
import Switch from '../Switch';
import TimeInput from '../TimeInput';
import { weekDays } from './days';
import {
  ButtonCancel,
  ButtonsContainer,
  DateInputWrapper,
  DateTwoInputsContainer,
  SetTime,
} from './edit-listing-schedule';

/**
 *
 * @return component for the schedule page
 */
function EditListingSchedule() {
  const { handleSubmit, reset, control } = useForm();
  const [dateRange, setDateRange] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [weekComponent, setWeekComponent] = useState(weekDays);

  const handleToggle = (dayNumber) => {
    setWeekComponent((currDay) => {
      return currDay.map((day) => {
        if (day.number === dayNumber) {
          return { ...day, available: !day.available };
        }
        return day;
      });
    });
  };

  const onSubmit = () => {
    if (dateRange) {
      setWeekComponent(
        [...weekComponent],
        (weekComponent.StartEndDate = {
          endDate: dateRange[1],
          startDate: dateRange[0],
        })
      );
    }
    reset();
  };

  const filterPassedTime = (time) => {
    const currentDate = startDate;
    const selectedDate = new Date(time);

    if (startDate) {
      return currentDate.getTime() < selectedDate.getTime();
    }
    return null;
  };
  const handleCancel = () => {
    setWeekComponent(weekDays);
    reset();
  };

  useEffect(() => {
    setWeekComponent(weekDays);

    if (dateRange) {
      const daysDiff = Math.abs(dateRange[1]) - Math.abs(dateRange[0]);
      if (daysDiff <= 432000000) {
        const daysNumber = Math.abs(
          (dateRange[1] - Math.abs(dateRange[0])) / 86400000
        );
        const renderDays = [];
        if (daysNumber < 7) {
          [...Array(daysNumber + 1)].forEach((day, index) => {
            renderDays.push(
              new Date(
                dateRange[0].getFullYear(),
                dateRange[0].getMonth(),
                dateRange[0].getDate() + index
              ).getDay()
            );
          });

          setWeekComponent((currDay) => {
            return currDay.map((day) => {
              return {
                ...day,
                available: false,
                outOfDate: true,
              };
            });
          });

          renderDays.map((dayNumber) => {
            setWeekComponent((currDay) => {
              return currDay.map((day) => {
                if (day.number === dayNumber) {
                  return {
                    ...day,
                    available: true,
                    outOfDate: false,
                  };
                }
                return day;
              });
            });
            return null;
          });
        }
      }
    }
  }, [dateRange]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DateInputWrapper>
          <DatePickerInput onChange={setDateRange} />
          <ArrowDown />
        </DateInputWrapper>

        <div>
          {weekComponent.map((day) => (
            <SetTime key={day.label}>
              <Switch key={day.number} handleToggle={handleToggle} day={day} />

              <DateTwoInputsContainer>
                <TimeInput
                  Controller={Controller}
                  control={control}
                  name={`${day.label}-start`}
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
              </DateTwoInputsContainer>
            </SetTime>
          ))}

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
