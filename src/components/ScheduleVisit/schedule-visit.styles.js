import datePicker from 'assets/date-picker.svg';
import LeftArrow from 'assets/visit-left-arrow.svg';
import RightArrow from 'assets/visit-right-arrow.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const MainContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${colors.midGrey};
  padding: 1.75rem 1.5rem;

  .react-datepicker-wrapper {
    margin: 0 0 2rem 0;
    padding: 0.5rem 1.12rem 0.37rem 1.12rem;
    border: 1px solid ${colors.midGrey};
  }
`;

export const Title = styled.h3`
  color: ${colors.black};
  font-size: 1.37rem;
  margin: 0 0 1.37rem 0;
`;

export const DateButton = styled.button`
  background: ${colors.white};
  border: none;
  color: ${colors.black};
  cursor: pointer;
  font-family: Montserrat;
  min-width: 100%;
  outline: none;
  padding: 0 0 0 1.5rem;
  position: relative;
  text-align: left;

  :before {
    content: url(${datePicker});
    left: 0;
    min-height: 1rem;
    min-width: 1rem;
    opacity: 0.5;
    position: absolute;
    top: 0;
  }
`;

export const DateSliderContainer = styled.div`
  margin: 0 1rem 2.12rem 1rem;
  max-width: calc(100% - 2rem);

  .slick-list {
    margin: 0 0.31rem;
  }

  .slick-prev {
    left: -1.37rem;

    :before {
      content: url(${LeftArrow});
    }
  }

  .slick-next {
    right: -1.37rem;

    :before {
      content: url(${RightArrow});
    }
  }
`;

export const DateCard = styled.div`
  border-radius: 10px;
  border: 1px solid ${colors.midGrey};
  color: ${colors.black};
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

export const SubmitDateSection = styled.div`
  display: flex;
  gap: 0.62rem;
  justify-content: center;
`;
