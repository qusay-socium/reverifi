/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as AppleIcon } from 'assets/icons/apple.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/sign-up-main.svg';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CheckboxInputContainer,
  CheckboxInputField,
  ErrorMessage,
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
  SocialButton,
  SocialLinksContainer,
  SocialLinksText,
  SubmitButton,
  Title,
} from './sign-up.styles';
import signUpSchema from './SignUpSchema';

function SignUp() {
  const [showPhoneNum, setShowPhoneNum] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <SignUpContainer>
      <ImageContainer>
        <MainImg />
      </ImageContainer>
      <InfoContainer>
        <Title>Sign Up</Title>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <InputField
            type="text"
            {...register('name')}
            id="name"
            placeholder="eg: Jhon Doe"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <InputLabel htmlFor="email">E-mail</InputLabel>
          <InputField
            type="email"
            {...register('email')}
            id="email"
            placeholder="eg: Jhon@domain.com"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <InputLabel htmlFor="password">Password</InputLabel>
          <InputField
            type="password"
            {...register('password')}
            id="password"
            placeholder="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <CheckboxInputContainer>
            <CheckboxInputField
              type="checkbox"
              {...register('phoneCheckbox')}
              onClick={() => setShowPhoneNum(!showPhoneNum)}
            />
            <InputLabel>I am an industry professional</InputLabel>
          </CheckboxInputContainer>

          {showPhoneNum && (
            <PhoneInputContainer>
              <InputLabel htmlFor="phonePrefix">Phone Number</InputLabel>
              <PhoneInputField
                type="tel"
                {...register('phonePrefix')}
                id="phonePrefix"
                placeholder="555"
              />
              <PhoneInputField
                type="tel"
                {...register('phoneNumber')}
                id="phoneNumber"
                placeholder="555"
              />
              <ErrorMessage>{errors.phonePrefix?.message}</ErrorMessage>
              <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
            </PhoneInputContainer>
          )}

          <SubmitButton type="submit">Continue</SubmitButton>

          <SignUpTerms>
            By clicking the &apos;Sign Up&apos; button, you confirm that you
            accept our <br />
            <LinkText>Terms of Use </LinkText>
            and
            <LinkText> Privacy Policy</LinkText>
          </SignUpTerms>
        </FormContainer>

        <SocialLinksContainer>
          <SocialLinksText>Or</SocialLinksText>
          <SocialButton blue>
            <FacebookIcon />
            Continue with Facebook
          </SocialButton>
          <SocialButton dark>
            <AppleIcon />
            Continue with Apple
          </SocialButton>
          <SocialButton light>
            <GoogleIcon />
            Continue with Google
          </SocialButton>
          <SocialLinksText borderTop>
            Have an account?
            <LinkText> Log In</LinkText>
          </SocialLinksText>
        </SocialLinksContainer>
      </InfoContainer>
    </SignUpContainer>
  );
}

export default SignUp;
