import datePicker from 'assets/date-picker.svg';
import LeftArrow from 'assets/visit-left-arrow.svg';
import RightArrow from 'assets/visit-right-arrow.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const MainContainer = styled.div`
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midgrey};
  padding: 1.75rem 1.5rem;

  .react-datepicker-wrapper {
    margin: 0 0 2rem 0;
    padding: 0.5rem 1.12rem 0.37rem 1.12rem;
    border: 0.06rem solid ${colors.midgrey};
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

  .slick-arrow {
    background: ${colors.white};
  }

  .slick-prev {
    left: -1.37rem;

    :before {
      background: ${colors.white};
      content: url(${LeftArrow});
    }
  }

  .slick-next {
    right: -1.37rem;

    :before {
      background: ${colors.white};
      content: url(${RightArrow});
    }
  }
`;

export const DateCard = styled.div`
  border-radius: 0.62rem;
  border: 0.06rem solid ${colors.midgrey};
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

export const SubmitDateButton = styled.button`
  background: ${colors.lightgreen};
  border-radius: 1.25rem;
  border: none;
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 600;
  min-width: 100%;
  padding: 0.68rem 0.43rem 0.56rem 0.43rem;
  outline: none;

  :hover {
    cursor: pointer;
  }
`;
