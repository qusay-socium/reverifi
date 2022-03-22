import arrow from 'assets/icons/arrow-down.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import { Error } from '../FormInput/form-input.styles';

export const DatePickerContainer = styled.div`
  max-width: 100%;
  position: relative;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: ${colors.green};
    opacity: 0.7;
  }

  .react-datepicker__day--in-range,
  .react-datepicker__day--selected {
    background-color: ${colors.green};
    &:hover {
      background-color: ${colors.green};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${colors.green};
    &:hover {
      background-color: ${colors.green};
    }
  }

  .react-datepicker__close-icon {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0 0.3rem;
    position: absolute;
    top: 0;
    right: 10%;
    height: 100%;
    vertical-align: middle;
  }

  .react-datepicker__close-icon::after {
    background-color: ${colors.green};
    border-radius: 50%;
    color: ${colors.white};
    content: '×';
    cursor: pointer;
    font-size: ${({ small }) => (small ? '0.9rem' : '1.2rem')};
    height: ${({ small }) => (small ? '1.1rem' : '1.5rem')};
    padding: 0.1rem;
    text-align: center;
    vertical-align: middle;
    width: ${({ small }) => (small ? '1.1rem' : '1.5rem')};
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    ${({ small }) =>
      !small &&
      ` width: 3rem;
    line-height: 2rem;
    margin: 0.17rem;`}
  }

  .date-picker {
    border: ${({ error }) =>
      error
        ? `0.06rem solid ${colors.red}`
        : `0.06rem solid ${colors.midGray}`};
    padding: ${({ small }) => (small ? '0.5rem 1.2rem' : '1.1rem 1.8rem')};
    border-radius: ${({ smallBorderRadius }) =>
      smallBorderRadius ? '0.45rem' : '1.9rem'};
    width: 100%;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position-x: 96%;
    background-position-y: ${({ small }) => (small ? '0.7rem' : '1.4rem')};
    font-size: ${({ small }) => (small ? '1rem' : '1.2rem')};
    font-family: inherit;
  }
`;

export const ErrorMessage = styled(Error)`
  margin: 0.3rem 0;
  height: 0.6rem;
`;
