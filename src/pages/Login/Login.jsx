/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as AppleIcon } from 'assets/icons/apple.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/login-main.svg';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  AppleButton,
  FacebookButton,
  FormContainer,
  GoogleButton,
  ImageContainer,
  InfoContainer,
  InputWrapper,
  LinkText,
  LoginContainer,
  OrText,
  SocialLinksContainer,
  SubmitButton,
  Title,
} from './login.styles';
import loginSchema from './LoginSchema';

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
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = () => {
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
          <InputWrapper>
            <FormInput
              error={errors.email?.message}
              label="E-mail"
              name="email"
              placeholder="eg: Jhon@domain.com"
              register={register}
            />
          </InputWrapper>
          <InputWrapper>
            <FormInput
              name="password"
              error={errors.password?.message}
              label="Password"
              register={register}
              type="password"
            />
          </InputWrapper>

          <FormCheckbox
            name="rememberMe"
            label="Remember me"
            register={register}
          />

          <LinkText>Forgot Password</LinkText>

          <SubmitButton type="submit">Log In</SubmitButton>
        </FormContainer>

        <SocialLinksContainer>
          <OrText>Or</OrText>
          <FacebookButton blue>
            <div>
              <FacebookIcon />
              <span> Continue with Facebook</span>
            </div>
          </FacebookButton>
          <AppleButton dark>
            <div>
              <AppleIcon />
              <span> Continue with Apple</span>
            </div>
          </AppleButton>
          <GoogleButton light>
            <div>
              <GoogleIcon />
              <span>Continue with Google</span>
            </div>
          </GoogleButton>
        </SocialLinksContainer>
      </InfoContainer>
    </LoginContainer>
  );
}

export default Login;
