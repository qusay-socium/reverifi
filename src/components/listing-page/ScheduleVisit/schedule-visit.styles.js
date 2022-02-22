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
    margin-bottom: 2rem;
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
  margin: 1rem;
  max-width: calc(100% - 2rem);

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
`;

export const DateCard = styled.div`
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGray};
  cursor: pointer;
  max-height: 5rem;
  max-width: 5rem;
  padding: 1rem 0;
  text-align: center;

  span {
    display: block;
    padding-bottom: 0.5rem;
  }
`;

export const SubmitButton = styled(Button)`
  min-width: 100%;
  font-size: 1rem;
`;
