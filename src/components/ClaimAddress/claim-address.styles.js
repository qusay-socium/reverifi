import ClaimAddressDesktop from 'assets/images/claim-address-desktop.svg';
import ClaimAddressMobile from 'assets/images/claim-address-mobile.svg';
import { ReactComponent as RawLocationPinStar } from 'assets/images/location-pin-star.svg';
import { ReactComponent as RawLocationPin } from 'assets/images/location-pin.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ClaimAddressContainer = styled.div`
  align-items: center;
  background: url(${ClaimAddressMobile});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 6.5625rem;
  height: 34.25rem;

  ${mq.tablet`
     background: url(${ClaimAddressDesktop});
     background-repeat: no-repeat;
     background-size: cover;
     flex-direction: row;
     gap: 0rem;
     height:16.4375rem;
     justify-content:center;
  `}
`;

export const ClaimAddressItems = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  column-gap: 2rem;

  span {
    font-size: 2rem;
    font-weight: 600;
    padding: 2rem 0;
  }
`;

export const AddressInputWrapper = styled.div`
  height: 3.75rem;
  min-width: 21.4375rem;

  ${mq.tablet`
    min-width:25rem
  `}
`;

export const LocationPinStar = styled(RawLocationPinStar)`
  margin-top: 3.75rem;
  ${mq.tablet`
    position: relative;
    bottom: -1.0625rem;
    right: 1.875rem;
  `}
`;

export const LocationPin = styled(RawLocationPin)`
  margin-left: 1rem;
`;

export const JoinUs = styled.div`
  align-items: center;
  background-color: ${colors.green};
  display: flex;
  flex-direction: column;
  height: 9.125rem;
  justify-content: center;

  p {
    color: ${colors.white};
    font-weight: 600;
  }

  ${mq.tablet`
    flex-direction:row;
    font-size: 1.375rem;
    justify-content:space-evenly;
    height:4.5625rem
  `}
`;

export const JoinUsText = styled.div`
  align-items: center;
  display: flex;

  svg {
    filter: brightness(5);
    margin-left: 0.5625rem;
  }
`;
