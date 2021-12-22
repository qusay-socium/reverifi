/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as AppleIcon } from 'assets/icons/apple.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/login-main.svg';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
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
  LoginContainer,
  PasswordTextContainer,
  SocialButton,
  SocialLinksContainer,
  SocialLinksText,
  SubmitButton,
  Title,
} from './login.styles';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError('password must be a number'),
  })
  .required();

/**
 * Login page component.
 *
 * @return {JSX.Element}
 */
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('form data', data);
    reset();
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <MainImg />
      </ImageContainer>
      <InfoContainer>
        <Title>Log In</Title>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <InputField
            type="email"
            {...register('email')}
            id="email"
            placeholder="eg: Jhon@domain.com"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <PasswordTextContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <LinkText>Forgot Password</LinkText>
          </PasswordTextContainer>
          <InputField
            type="password"
            {...register('password')}
            id="password"
            placeholder="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <CheckboxInputContainer>
            <CheckboxInputField type="checkbox" {...register('rememberMe')} />
            <InputLabel>Remember me</InputLabel>
          </CheckboxInputContainer>

          <SubmitButton type="submit">Log In</SubmitButton>
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
        </SocialLinksContainer>
      </InfoContainer>
    </LoginContainer>
  );
}

export default Login;
