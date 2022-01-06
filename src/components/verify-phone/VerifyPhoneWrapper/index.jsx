import React from 'react';
import VerifyPhoneForm from '../VerifyPhoneForm';
import {
  BottomImage,
  InfoContainer,
  Subtitle,
  Title,
  VerifyPhoneContainer,
} from './verify-phone-wrapper.styles';

/**
 * Verify phone wrapper component.
 *
 * @return {JSX.Element}
 */
function VerifyPhoneWrapper() {
  return (
    <VerifyPhoneContainer>
      <InfoContainer>
        <Title>Verify your phone number</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Subtitle>
        <VerifyPhoneForm />
      </InfoContainer>
      <BottomImage />
    </VerifyPhoneContainer>
  );
}

export default VerifyPhoneWrapper;
