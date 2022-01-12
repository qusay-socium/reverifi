import Button from 'components/shared/Button';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const DateInput = styled(DatePicker)`
  background-color: transparent;
  border-radius: 1.75rem;
  border: none;
  color: ${colors.mineshaft};
  flex: 1;
  font-size: 0.75rem;
  font-weight: 400;
  outline: none;
  padding: 0.8rem 1rem 0.8rem 2rem;
`;

export const DateInputWrapper = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2.18rem;
  border: 0.06rem ${colors.midGray} solid;
  display: flex;
  margin: 1.3rem 3rem;
  max-width: 90%;
  position: relative;

  input {
    width: 100%;
  }

  /* while picking a date color */
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
    background-color: ${colors.green};
    opacity: 0.7;
  }

  .react-datepicker__day--in-range {
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

  svg {
    position: absolute;
    right: 1.2rem;
  }

  ${mq.tablet`
      justify-content: flex-start;
      max-width: 20rem;
    `}
`;

export const SetTime = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  max-width: 90%;

  p {
    color: ${colors.gray};
    font-size: 1rem;
  }

  ${mq.tablet`
    align-items: center;
    flex-direction: row;
    margin: 0 3rem;
  `}
`;

export const ButtonCancel = styled(Button)`
  background-color: transparent;
  border: 0.06rem ${colors.dustyGray} solid;
  color: ${colors.dustyGray};
  margin-right: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 1rem;

  ${mq.tablet`
      margin: 1rem 3rem;
    `}
`;

export const DateTwoInputsContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  max-width: 100%;

  p {
    color: ${colors.gray};
    padding: 0;
  }
`;
