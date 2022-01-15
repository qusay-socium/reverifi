import { ReactComponent as LocationPin } from 'assets/images/location-pin.svg';
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
  `}
`;

export const OfferDetails = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.desktop`
    align-items: flex-end;
    flex-direction: row;
  `}
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 0.32rem;
`;

export const Location = styled.div`
  align-items: center;
  display: flex;
`;

export const Pin = styled(LocationPin)`
  height: 1rem;
  margin-right: 0.5rem;
`;

export const LocationText = styled.span`
  color: ${colors.gray};
  font-size: 0.94rem;
`;

export const SubmitOffer = styled.div`
  margin-top: 1rem;

  ${mq.desktop`
    margin-left: 2rem;
  `}
`;

export const SubmitButton = styled(Button)`
  align-items: center;
  border-radius: 1.25rem;
  display: flex;
  font-size: 1rem;
  padding: 0.63rem 1.8rem;
`;

export const ButtonsSection = styled.div`
  align-items: baseline;
  display: flex;

  svg {
    cursor: pointer;
    stroke: ${colors.gray};
  }

  ${mq.desktop`
    align-items: center;
  `}
`;

export const LogoButton = styled(Button)`
  background-color: ${colors.white};
  box-shadow: 0rem 0.0625rem 0.375rem rgba(34, 34, 34, 0.163762);
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0;
  width: 2rem;

  :hover {
    background-color: ${colors.green};

    svg {
      stroke: ${colors.mineShaft};
    }
  }
`;
