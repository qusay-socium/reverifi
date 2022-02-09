import { ReactComponent as Arrow } from 'assets/images/arrow.svg';
import { ReactComponent as WhiteLogo } from 'assets/logo.svg';
import Input from 'components/shared/Input/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AddressButton,
  AddressInputWrapper,
  ClaimAddressContainer,
  ClaimAddressItems,
  JoinUs,
  JoinUsButton,
  JoinUsText,
  LocationPin,
  MapIcon,
  Overlay,
} from './claim-address.styles';

/**
 * Home page claim address section.
 *
 * @return {JSX.Element}
 */
function ClaimAddress() {
  const navigate = useNavigate();
  return (
    <>
      <ClaimAddressContainer>
        <Overlay>
          <ClaimAddressItems>
            <span>Claim your Address</span>
            <AddressInputWrapper>
              <Input
                leftElement={<LocationPin />}
                placeholder="Enter Your Address"
                rightElement={
                  <AddressButton ariaLabel="Search" onClick={() => {}}>
                    <Arrow />
                  </AddressButton>
                }
              />
            </AddressInputWrapper>
          </ClaimAddressItems>
          <MapIcon />
        </Overlay>
      </ClaimAddressContainer>
      <JoinUs>
        <JoinUsText>
          <p>Start Your real estate journey with </p>
          <WhiteLogo />
        </JoinUsText>
        <JoinUsButton ariaLabel="Join" onClick={() => navigate('/sign-up')}>
          Join Us
        </JoinUsButton>
      </JoinUs>
    </>
  );
}

export default ClaimAddress;
