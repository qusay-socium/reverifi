import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0.5rem;

  ${mq.desktop`
    padding: 2rem 6rem;
  `};
`;

export const OfferDetails = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.desktop`
    align-items: center;
    flex-direction: row;
  `};
`;

export const Price = styled.h4`
  font-size: 2rem;
  margin: 0 0 0.5rem;
  font-weight: 600;
  max-width: 17rem;
  line-height: 2.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Location = styled.div`
  align-items: center;
  display: flex;
`;

export const LocationText = styled.span`
  color: ${colors.gray};
  font-size: 1rem;
  margin-left: 1rem;
`;

export const SubmitOffer = styled.div`
  align-self: flex-end;

  ${mq.desktop`
    margin-left: 2rem;
  `}
`;

export const SubmitButton = styled(Button)`
  align-items: center;
  display: flex;
  padding: 0 2rem;
  font-size: 1rem;
`;

export const SideButtonsContainer = styled.div`
  align-items: baseline;
  display: flex;

  svg {
    cursor: pointer;
    stroke: ${colors.gray};
  }

  ${mq.desktop`
    align-items: center;
    margin-left:10rem;
  `}
`;

export const LogoButton = styled.div`
  align-items: center;
  background-color: ${colors.wildSand};
  border-radius: 50%;
  box-shadow: 0 0.06rem 0.37rem ${colors.mineShaft}29;
  cursor: pointer;
  display: flex;
  height: 1.56rem;
  justify-content: center;
  width: 1.56rem;
  margin-left: 0.5rem;

  svg {
    stroke: ${colors.dustyGray};
    width: 0.9rem;
    height: 0.9rem;
    padding: 0;
    margin-left: 0;
  }
  :hover {
    svg {
      stroke: ${colors.white};
    }
    background-color: ${colors.green};
  }
`;
