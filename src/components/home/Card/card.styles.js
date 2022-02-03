import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const CardContainer = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 0.06rem 0.5rem ${colors.cornflowerBlue}1f;
  cursor: pointer;
  margin-bottom: 0.1rem;
  overflow: hidden;
  position: relative;
`;

export const AddButton = styled.button`
  align-items: center;
  background: ${colors.wildSand};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 1.5rem;
  min-width: 1.5rem;
  padding: 0;

  svg {
    path {
      fill: ${colors.dustyGray};
    }
  }

  :hover {
    background: ${colors.green};

    svg {
      path {
        fill: ${colors.white};
      }
    }
  }
`;

export const Attendees = styled.h4`
  color: ${colors.gray};
  font-size: 0.75rem;
  font-weight: normal;
  margin: 1.12rem 0 0 0;
  text-align: right;

  svg {
    margin: 0 0.37rem 0 0;
    padding: 0 auto;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CardImg = styled.img`
  height: 12rem;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const Description = styled.div`
  background-color: ${colors.white};
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
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.5rem 0 1rem 0;
`;

export const EventTimePlace = styled.h5`
  font-size: 0.875rem;
  font-weight: normal;
  margin: 0.2rem 0;
  opacity: 0.5;
`;

export const ShareButton = styled(AddButton)`
  background: ${colors.wildSand};
  border: 0.0625rem solid ${colors.alabaster};
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
