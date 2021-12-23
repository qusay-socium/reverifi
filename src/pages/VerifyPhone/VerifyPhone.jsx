import React from 'react';
import VerifyPhoneForm from '../../components/VerifyPhoneForm';
import {
  BottomImage,
  InfoContainer,
  Subtitle,
  Title,
  VerifyPhoneContainer,
} from './verify-phone.styles';

/**
 * Verify phone component.
 *
 * @return {JSX.Element}
 */
function VerifyPhone() {
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

export default VerifyPhone;
