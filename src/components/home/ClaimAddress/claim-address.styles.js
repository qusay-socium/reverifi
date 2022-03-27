import { ReactComponent as RawLocationPinStar } from 'assets/images/location-pin-star.svg';
import { ReactComponent as RawLocationPin } from 'assets/images/location-pin.svg';
import MapClaimAddress from 'assets/map-claim-address.svg';
import { ReactComponent as MapSmall } from 'assets/map-small.svg';
import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ClaimAddressContainer = styled.div`
  align-items: center;
  background: url(${MapClaimAddress});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Overlay = styled.div`
  background-color: ${colors.liver}DB;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 0;

  ${mq.desktop`
      background-color: ${colors.mineShaft}DB;
      padding: 1rem 0;
  `}
`;

export const MapIcon = styled(MapSmall)`
  display: none;
  padding-top: 1rem;
  ${mq.desktop`
      display: block;
      width: 23rem;
      height: 15rem;
  `};
`;

export const ClaimAddressItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  span {
    font-size: 2rem;
    font-weight: 600;
    padding: 2rem 0.2rem;
    color: ${colors.white};
  }
`;

export const AddressInputWrapper = styled.div`
  height: 3.75rem;
  input {
    font-size: 1rem;
  }

  ${mq.tablet`
    min-width:25rem
  `}
`;

export const AddressButton = styled(Button)`
  background-color: ${colors.white};
  height: 3.06rem;
  padding: 0 0.5rem;

  &:hover {
    box-shadow: none;
  }
`;

export const LocationPinStar = styled(RawLocationPinStar)`
  margin-bottom: 0;
  ${mq.tablet`
    position: relative;
    bottom: -1.0625rem;
    right: 1.875rem;
  `}
`;

export const LocationPin = styled(RawLocationPin)`
  margin-left: 1rem;
  width: 1rem;
  height: 1.375rem;
`;

export const JoinUs = styled.div`
  align-items: center;
  background-color: ${colors.green};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.5rem 0;

  p {
    font-weight: 600;
    color: ${colors.white};
  }

  svg {
    filter: brightness(12);
  }

  ${mq.tablet`
    flex-direction:row;
    font-size: 1.375rem;
    justify-content:space-evenly;
    height:4.5625rem
  `}
`;

export const JoinUsButton = styled(Button)`
  background-color: ${colors.white};
  color: ${colors.mineShaft};
  font-size: 1rem;
  height: 2.5rem;
`;

export const JoinUsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mq.tablet`
     min-width: 31rem;
  `}

  svg {
    margin: 0.4rem 0 0 1rem;
    max-height: 5rem;
    max-width: 5rem;
  }
`;
