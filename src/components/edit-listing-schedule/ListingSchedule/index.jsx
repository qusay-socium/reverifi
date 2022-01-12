import { ReactComponent as ArrowDown } from 'assets/mocks/images/arrow-down.svg';
import Button from 'components/shared/Button';
import Switch from 'components/shared/Switch';
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import DatePickerInput from '../DateInput';
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
  const { handleSubmit, control } = useForm();
  const [dateRangeValue, setDateRangeValue] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [days, setDays] = useState(weekDays);

  const onSubmit = () => {
    if (dateRangeValue) {
      days.StartEndDate = {
        endDate: dateRangeValue[1],
        startDate: dateRangeValue[0],
      };
    }
  };

  useEffect(() => {
    days.map((day) => {
      setDays([...days], (day.outOfDate = false));
      setDays([...days], (day.available = true));

      return null;
    });
    if (dateRangeValue) {
      const daysDiff =
        Math.abs(dateRangeValue[1]) - Math.abs(dateRangeValue[0]);
      if (daysDiff <= 432000000) {
        const daysNumber = Math.abs(
          (dateRangeValue[1] - Math.abs(dateRangeValue[0])) / 86400000
        );
        const renderDays = [];
        if (daysNumber < 7) {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < daysNumber + 1; i++) {
            renderDays.push(
              new Date(
                dateRangeValue[0].getFullYear(),
                dateRangeValue[0].getMonth(),
                dateRangeValue[0].getDate() + i
              ).getDay()
            );
          }
          days.map((day) => {
            setDays([...days], (day.outOfDate = true));
            setDays([...days], (day.available = false));

            return null;
          });

          days.map((day) => {
            renderDays.map((number) => {
              if (day.number === number) {
                setDays([...days], (day.outOfDate = false));
                setDays([...days], (day.available = true));
              }
              return null;
            });
            return null;
          });
        }
      }
    }
  }, [dateRangeValue]);

  const filterPassedTime = (time) => {
    const currentDate = startDate;
    const selectedDate = new Date(time);

    if (startDate) {
      return currentDate.getTime() < selectedDate.getTime();
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DateInputWrapper>
          <DatePickerInput setDateRangeValue={setDateRangeValue} />
          <ArrowDown />
        </DateInputWrapper>

        <div>
          {days.map((day) => (
            <SetTime key={day.label}>
              <Switch
                name={day.label}
                textLabel={day.label}
                dayAvailable={day}
                setDays={setDays}
                days={days}
                outOfDate={day.outOfDate}
              />

              <DateTwoInputsContainer>
                <TimeInput
                  Controller={Controller}
                  control={control}
                  name={`${day.label}-start`}
                  setStartDate={setStartDate}
                  setTime={day.time}
                  readOnly={!day.available}
                />

                <p>To</p>

                <TimeInput
                  Controller={Controller}
                  control={control}
                  name={`${day.label}-end`}
                  setStartDate={setStartDate}
                  filterPassedTime={filterPassedTime}
                  setTime={day.time}
                  readOnly={!day.available}
                />
              </DateTwoInputsContainer>
            </SetTime>
          ))}

          <ButtonsContainer>
            <ButtonCancel>Cancel</ButtonCancel>
            <Button type="submit">Add Schedule</Button>
          </ButtonsContainer>
        </div>
      </form>
    </div>
  );
}

export default EditListingSchedule;
