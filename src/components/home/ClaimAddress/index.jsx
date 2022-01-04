import { ReactComponent as Arrow } from 'assets/images/arrow.svg';
import { ReactComponent as WhiteLogo } from 'assets/images/white-logo.svg';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input/index';
import React from 'react';
import colors from 'styles/colors';
import {
  AddressInputWrapper,
  ClaimAddressContainer,
  ClaimAddressItems,
  JoinUs,
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
              size="md"
              placeholder="Enter Your Address"
              rightElement={
                <Button
                  ariaLabel="Search"
                  padding="0 0"
                  backgroundColor={colors.white}
                  height="3.0625rem"
                  onClick={() => {}}
                >
                  <Arrow />
                </Button>
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
        <Button
          ariaLabel="Join"
          color={colors.mineShaft}
          backgroundColor={colors.white}
          onClick={() => {}}
        >
          Join Us
        </Button>
      </JoinUs>
    </>
  );
}

export default ClaimAddress;
