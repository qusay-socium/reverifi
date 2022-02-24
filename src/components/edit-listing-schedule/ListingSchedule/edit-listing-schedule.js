import Button from 'components/shared/Button';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const DateInput = styled(DatePicker)`
  background-color: transparent;
  border-radius: 1.75rem;
  color: ${colors.mineShaft};
  flex: 1;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.4rem;
`;

export const DateInputWrapper = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2.18rem;
  display: flex;
  margin: 1.3rem 2rem;
  max-width: 90%;
  position: relative;

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

  ${mq.tablet`
      justify-content: flex-start;
      max-width: 26rem;
    `}
`;

export const SetTime = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  max-width: 90%;

  span {
    color: ${colors.gray};
    font-size: 1rem;
    margin: 0.9rem 0;
  }

  ${mq.tablet`
    align-items: center;
    flex-direction: row;
    margin: 0 2rem;
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
      margin: 1rem 2rem;
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
