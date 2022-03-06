import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const DateInputsWrapper = styled.div`
  align-items: center;
  border-radius: 2.18rem;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 8rem;
  position: relative;

  svg {
    margin-left: 2rem;
    position: absolute;
    right: 1rem;
    z-index: -1;
  }

  ${mq.tablet`
    margin: 0 1rem;
  `}
`;

export const DateInputs = styled.div`
  align-items: center;
  border-radius: 2.18rem;
  border: 0.06rem ${colors.midGray} solid;
  display: flex;

  .input {
    background-color: transparent;
    border-radius: 1.75rem;
    border: 0.06rem ${colors.midGray} solid;
    border: none;
    color: ${colors.mineshaft};
    flex: 1;
    font-size: 0.75rem;
    font-weight: 400;
    outline: none;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    width: 100%;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: ${colors.green};
    border-radius: 0.15rem;

    &:hover {
      background-color: ${colors.green};
    }
  }
`;

export const ErrorContainer = styled.div`
  height: 1.4rem;
`;
