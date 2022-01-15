import LeftArrow from 'assets/visit-left-arrow.svg';
import RightArrow from 'assets/visit-right-arrow.svg';
import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const MainContainer = styled.div`
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGray};
  padding: 1.75rem 1.5rem;

  .react-datepicker-wrapper {
    border: 0.06rem solid ${colors.midGray};
    margin: 0 0 2rem 0;
    padding: 0.5rem 1.12rem 0.37rem 1.12rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.37rem;
  margin: 0 0 1.37rem 0;
`;

export const DateButton = styled(Button)`
  background-color: ${colors.white};
  color: black;
  padding: 0;
`;

export const DateContainer = styled.div`
  align-items: center;
  display: flex;
  font-weight: normal;
  gap: 0.5rem;

  svg {
    min-width: 1rem;
    min-height: 1rem;
    opacity: 0.5;
  }
`;

export const DateSliderContainer = styled.div`
  margin: 0 1rem 2.12rem 1rem;
  max-width: calc(100% - 2rem);

  .slick-list {
    margin: 0 0.31rem;
  }

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
  border-radius: 0.62rem;
  border: 0.06rem solid ${colors.midGray};
  font-size: 1rem;
  max-height: 5rem;
  max-width: 5rem;
  padding: 1rem 0;
  text-align: center;

  span {
    display: block;
    padding-bottom: 0.56rem;
  }
`;

export const SubmitButton = styled(Button)`
  font-size: 1rem;
  min-width: 100%;
`;
