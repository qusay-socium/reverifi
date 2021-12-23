/* eslint-disable arrow-body-style */
import { ReactComponent as Arrow } from 'assets/images/arrow.svg';
import { ReactComponent as WhiteLogo } from 'assets/images/white-logo.svg';
import Input from 'components/shared/Input/index';
import React from 'react';
import {
  AddressInputWrapper,
  Button,
  ClaimAddressContainer,
  ClaimAddressItems,
  JoinUs,
  JoinUsText,
  LocationPin,
  LocationPinStar,
  StyledButton,
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
              size="md"
              placeholder="Enter Your Address"
              rightElement={
                <StyledButton>
                  <Arrow />
                </StyledButton>
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
        <Button>Join Us</Button>
      </JoinUs>
    </>
  );
}

export default ClaimAddress;
