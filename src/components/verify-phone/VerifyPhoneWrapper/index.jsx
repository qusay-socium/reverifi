import { useUser } from 'contexts/UserContext';
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
  const { userInfo } = useUser();

  return (
    <VerifyPhoneContainer>
      <InfoContainer>
        <Title>Verify your phone number</Title>
        <Subtitle>
          Please enter the verification code we sent to your mobile
          {userInfo?.phone && ` **${userInfo?.phone?.slice(-2)}`}
        </Subtitle>
        <VerifyPhoneForm />
      </InfoContainer>
      <BottomImage />
    </VerifyPhoneContainer>
  );
}

export default VerifyPhoneWrapper;
