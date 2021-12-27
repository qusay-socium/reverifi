import ArrowLeft from 'assets/arrow-left.svg';
import ArrowRight from 'assets/arrow-right.svg';
import bottomBorder from 'assets/bottom-border.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const MainContainer = styled.div`
  background: ${colors.alabaster};
  padding: 2.25rem 0.75rem;

  ${mq.desktop`
    padding: 2rem 1.75rem;
  `}
`;

export const Title = styled.h3`
  color: ${colors.mineShaft};
  font-size: 1.3rem;
  margin: 0 0 1.1rem 0;
  text-align: center;

  ${mq.desktop`
    font-size: 2rem;
    margin: 0 0 2rem 0;
  `}
`;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.25rem;
  justify-content: center;
  list-style-type: none;
  margin: 0 0 1.12rem 0;
  padding: 0;
  text-align: center;

  ${mq.desktop`
    margin: 0 0 2rem 0;
  `}
`;

export const ClickableItem = styled.button`
  background: none;
  border: none;
  color: ${(props) =>
    props.activeFilter ? colors.lightgreen : colors.mineShaft};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  opacity: ${(props) => (props.activeFilter ? '1' : '0.5')};
  padding: 0 0 0.25rem 0;
  position: relative;

  :hover {
    cursor: pointer;
  }

  :after {
    content: ${(props) => (props.activeFilter ? `url(${bottomBorder})` : '')};
    position: absolute;
    right: 0;
    left: 0;
    top: 0.62rem;
  }
`;

export const CardsContainer = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;

    > div {
      flex: 1;
      margin: 0 0.5rem;
    }
  }

  .slick-arrow {
    background: ${colors.lightgreen};
    border-radius: 50%;
    color: ${colors.white};
    min-height: 2rem;
    min-width: 2rem;
    z-index: 2;

    :hover {
      background: ${colors.lightgreen};
    }

    :focus {
      background: ${colors.lightgreen};
    }
  }

  .slick-prev {
    left: -0.5rem;
  }

  .slick-prev:before {
    content: url(${ArrowLeft});
  }

  .slick-next {
    right: -0.5rem;
  }

  .slick-next:before {
    content: url(${ArrowRight});
  }
`;

export const Card = styled.div`
  background: ${colors.white};
  border-radius: 0.43rem;
  box-shadow: 0rem 0.06rem 0.5rem ${colors.boxshadowgrey};
  overflow: hidden;
  position: relative;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export const CardImgContainer = styled.div`
  max-height: 14.31rem;
  overflow: hidden;
`;

export const CardImg = styled.img`
  max-height: 14.31rem;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const EventType = styled.div`
  background: ${(props) =>
    props.isPersonal ? colors.orange : colors.lightgreen};
  border: 0.06rem solid ${colors.orange};
  border-color: ${(props) =>
    props.isPersonal ? colors.orange : colors.lightgreen};
  border-radius: 0.25rem;
  color: ${colors.white};
  display: none;
  font-size: 0.6rem;
  left: 1rem;
  padding: 0.31rem 0.56rem;
  position: absolute;
  top: 1rem;

  ${mq.desktop`
    display: block;
  `}
`;

export const EventDate = styled.h3`
  background: ${colors.lightgreen};
  border-radius: 0.18rem;
  color: ${colors.white};
  font-size: 1.37rem;
  font-weight: 400;
  margin: 0;
  min-height: 3.56rem;
  padding: 0.31rem 0.75rem;
  position: absolute;
  right: 0.87rem;
  text-align: center;
  top: 0;
`;

export const Description = styled.div`
  display: flex;
  gap: 0.43rem;
  justify-content: space-between;
  padding: 0.81rem 0.87rem 0.43rem 0.43rem;
`;

export const LeftContent = styled.div`
  color: ${colors.mineShaft};
`;

export const EventHeader = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  margin: 0.12rem 0 0.31rem 0;
`;

export const EventTimePlace = styled.h5`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.5;
`;

export const RightContent = styled.div``;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AddButton = styled.button`
  align-items: center;
  background: ${colors.white};
  border-radius: 50%;
  border: 0.0625rem solid ${colors.lightgreen};
  cursor: pointer;
  display: flex;
  min-height: 1.5rem;
  justify-content: center;
  padding: 0;
  min-width: 1.5rem;

  :hover {
    background: ${colors.lightgreen};

    svg {
      path {
        fill: ${colors.white};
        stroke: ${colors.white};
      }
    }
  }
`;

export const ShareButton = styled(AddButton)`
  background: ${colors.alabaster};
  border: 0.06rem solid ${colors.alabaster};
  color: ${colors.transblack};
`;

export const Attendees = styled.h4`
  color: ${colors.lightgreen};
  font-size: 0.75rem;
  font-weight: 400;
  margin: 1.12rem 0 0 0;
  text-align: right;

  svg {
    margin: 0 0.37rem 0 0;
    padding: 0 auto;
  }

  :hover {
    svg {
      path {
        fill: ${colors.lightgreen};
      }
    }
  }
`;
