import LeftArrow from 'assets/visit-left-arrow.svg';
import RightArrow from 'assets/visit-right-arrow.svg';
import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGray};
  padding: 1.75rem 1.5rem;

  .react-datepicker-wrapper {
    border: 0.06rem solid ${colors.midGray};
    border-radius: 0.5rem;
    margin: 2rem 0;
    padding: 0.5rem 1rem;
  }
`;

export const DateButton = styled.button`
  font-size: 1rem;
  border: none;
`;

export const DateContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;

  svg {
    max-width: 1rem;
    max-height: 1rem;
    opacity: 0.5;
  }
`;

export const DateSliderContainer = styled.div`
  margin: 0 1rem;

  .slick-prev {
    :before {
      content: url(${LeftArrow});
    }
  }

  .slick-next {
    :before {
      content: url(${RightArrow});
    }
  }

  .input {
    border: none;
    outline: none;
    width: 100%;
  }
`;

export const DateCard = styled.div`
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGray};
  cursor: pointer;
  max-height: 5rem;
  max-width: 5rem;
  padding: 1rem 0.5rem;
  text-align: center;
  margin: 1rem;

  border: ${({ activeDay }) => activeDay && `0.06rem solid ${colors.green}`};

  span {
    display: block;
    padding-bottom: 0.5rem;
  }
`;

export const SubmitButton = styled(Button)`
  min-width: 100%;
  font-size: 1rem;
`;

export const MonthDate = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;
