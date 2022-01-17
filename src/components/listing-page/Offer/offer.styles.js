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
    padding: 2rem 8.75rem;
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
`;

export const Location = styled.div`
  align-items: center;
  display: flex;
`;

export const LocationText = styled.span`
  color: ${colors.gray};
  font-size: 1rem;
`;

export const SubmitOffer = styled.div`
  margin-top: 1rem;

  ${mq.desktop`
    margin-left: 2rem;
  `}
`;

export const SubmitButton = styled(Button)`
  align-items: center;
  display: flex;
  padding: 0 2rem;
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

export const LogoButton = styled(Button)`
  background-color: ${colors.white};
  height: 3rem;
  margin-right: 0.5rem;
  padding: 0;
  width: 3rem;

  :hover {
    background-color: ${colors.green};

    svg {
      stroke: ${colors.mineShaft};
    }
  }
`;
