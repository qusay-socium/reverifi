import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const CardContainer = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 0.06rem 0.5rem ${colors.cornflowerBlue}1f;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  position: relative;
`;

export const AddButton = styled.button`
  align-items: center;
  background: ${colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.green};
  cursor: pointer;
  display: flex;
  min-height: 1.5rem;
  justify-content: center;
  padding: 0;
  min-width: 1.5rem;

  :hover {
    background: ${colors.green};

    svg {
      path {
        fill: ${colors.white};
        stroke: ${colors.white};
      }
    }
  }
`;

export const Attendees = styled.h4`
  color: ${colors.green};
  font-size: 0.75rem;
  font-weight: normal;
  margin: 1.12rem 0 0 0;
  text-align: right;

  svg {
    margin: 0 0.37rem 0 0;
    padding: 0 auto;
  }

  :hover {
    svg {
      path {
        fill: ${colors.green};
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CardImg = styled.img`
  max-height: 14.31rem;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const Description = styled.div`
  display: flex;
  gap: 0.43rem;
  justify-content: space-between;
  padding: 0.81rem 0.43rem;
`;

export const EventDate = styled.h3`
  background: ${colors.green};
  border-radius: 0.25rem;
  color: ${colors.white};
  font-size: 1.37rem;
  font-weight: normal;
  margin: 0;
  min-height: 3.56rem;
  padding: 0.31rem 0.75rem;
  position: absolute;
  right: 0.87rem;
  text-align: center;
  top: 0;
`;

export const EventHeader = styled.h4`
  font-weight: normal;
  margin: 0.12rem 0 0.31rem 0;
`;

export const EventTimePlace = styled.h5`
  font-size: 0.75rem;
  font-weight: normal;
  margin: 0;
  opacity: 0.5;
`;

export const ShareButton = styled(AddButton)`
  background: ${colors.alabaster};
  border: 1px solid ${colors.alabaster};
`;

export const EventType = styled.div`
  background: ${({ isPersonal }) =>
    isPersonal ? colors.orange : colors.green};
  border-radius: 0.25rem;
  color: ${colors.white};
  display: none;
  font-size: 0.62rem;
  left: 1rem;
  padding: 0.37rem 0.62rem;
  position: absolute;
  top: 1rem;

  ${mq.desktop`
    display: block;
  `}
`;
