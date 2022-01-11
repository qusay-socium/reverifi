import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as AppleIcon } from 'assets/icons/apple.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/login-main.svg';
import Button from 'components/shared/Button';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import { useUser } from 'contexts/UserContext';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import loginSchema from './login-schema';
import {
  AppleButton,
  FacebookButton,
  Form,
  GoogleButton,
  ImageContainer,
  InfoContainer,
  InputWrapper,
  LinkText,
  LoginContainer,
  OrText,
  SocialLinksContainer,
  Title,
} from './login.styles';

/**
 * Login page component.
 *
 * @return {JSX.Element}
 */
function Login() {
  const navigate = useNavigate();
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  /**
   * Handle form submit.
   *
   * @param {Object} data Form data.
   */
  const submit = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      // TODO: show error to the user
    }
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <MainImg />
      </ImageContainer>

      <InfoContainer>
        <Title>Log In</Title>

        <Form onSubmit={handleSubmit(submit)}>
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

          <Button type="submit">Log In</Button>
        </Form>

        <SocialLinksContainer>
          <OrText>Or</OrText>
          <FacebookButton>
            <div>
              <FacebookIcon />
              <span> Continue with Facebook</span>
            </div>
          </FacebookButton>
          <AppleButton>
            <div>
              <AppleIcon />
              <span> Continue with Apple</span>
            </div>
          </AppleButton>
          <GoogleButton>
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
