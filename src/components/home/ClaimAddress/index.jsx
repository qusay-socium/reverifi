import { ReactComponent as Arrow } from 'assets/images/arrow.svg';
import { ReactComponent as WhiteLogo } from 'assets/images/white-logo.svg';
import Input from 'components/shared/Input/index';
import React from 'react';
import {
  AddressButton,
  AddressInputWrapper,
  ClaimAddressContainer,
  ClaimAddressItems,
  JoinUs,
  JoinUsButton,
  JoinUsText,
  LocationPin,
  LocationPinStar,
} from './claim-address.styles';

/**
 * Home page claim address section.
 *
 * @return {JSX.Element}
 */
function ClaimAddress() {
  return (
    <>
      <ClaimAddressContainer>
        <LocationPinStar />
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
      </ClaimAddressContainer>
      <JoinUs>
        <JoinUsText>
          <p>Start Your real estate journey with </p>
          <WhiteLogo />
        </JoinUsText>
        <JoinUsButton ariaLabel="Join" onClick={() => {}}>
          Join Us
        </JoinUsButton>
      </JoinUs>
    </>
  );
}

export default ClaimAddress;
