import { ReactComponent as MainImg } from 'assets/icons/sign-up-main.svg';
import React, { useState } from 'react';
import {
  CheckboxInputContainer,
  CheckboxInputField,
  FormContainer,
  ImageContainer,
  InfoContainer,
  InputField,
  InputLabel,
  LinkText,
  PhoneInputContainer,
  PhoneInputField,
  SignUpContainer,
  SignUpTerms,
  SocialLinksContainer,
  SubmitButton,
  Title,
} from './sign-up.styles';

function SignUp() {
  const [showPhoneNum, setShowPhoneNum] = useState(false);

  return (
    <SignUpContainer>
      <ImageContainer>
        <MainImg />
      </ImageContainer>

      <InfoContainer>
        <Title>Sign Up</Title>

        <FormContainer>
          {/* name */}
          <InputLabel htmlFor="text">Name</InputLabel>

          <InputField
            type="text"
            name="name"
            id="name"
            placeholder="eg: Jhon Doe"
          />

          {/* email */}
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <InputField
            type="email"
            name="email"
            id="email"
            placeholder="eg: Jhon@domain.com"
          />

          {/* pass */}
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputField
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />

          {/* checkbox */}
          <CheckboxInputContainer>
            <CheckboxInputField
              type="checkbox"
              name="professional"
              id="professional"
              onClick={() => setShowPhoneNum(!showPhoneNum)}
            />
            <InputLabel htmlFor="professional">
              I am an industry professional
            </InputLabel>
          </CheckboxInputContainer>

          {/* phone number */}
          {showPhoneNum && (
            <PhoneInputContainer>
              <InputLabel htmlFor="phone-prefix">Phone Number</InputLabel>
              <PhoneInputField
                type="tel"
                name="phone-prefix"
                id="phone-prefix"
                placeholder="555"
              />
              <PhoneInputField
                type="tel"
                name="phone-number"
                id="phone-number"
                placeholder="555"
              />
            </PhoneInputContainer>
          )}

          {/* button */}
          <SubmitButton>Continue</SubmitButton>

          {/* info */}
          <SignUpTerms>
            By clicking the &apos;Sign Up&apos; button, you confirm that you
            accept our <br />
            <LinkText>Terms of Use </LinkText>
            and
            <LinkText> Privacy Policy</LinkText>
          </SignUpTerms>
        </FormContainer>

        <SocialLinksContainer>{/*  */}</SocialLinksContainer>
      </InfoContainer>
    </SignUpContainer>
  );
}

export default SignUp;
