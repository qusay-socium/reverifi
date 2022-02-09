import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as AppleIcon } from 'assets/icons/apple.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/login-main.svg';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import { useUser } from 'contexts/UserContext';
import { SubmitButton } from 'pages/SignUp/sign-up.styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import loginSchema from './login-schema';
import {
  AppleButton,
  ErrorMessage,
  FacebookButton,
  Form,
  GoogleButton,
  IconContainer,
  ImageContainer,
  InfoContainer,
  InputGroup,
  InputWrapper,
  LinkText,
  LoginContainer,
  OrText,
  SocialLinksContainer,
  SocialLinksText,
  Title,
} from './login.styles';

/**
 * Login page component.
 *
 * @return {JSX.Element}
 */
function Login() {
  const [error, setError] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
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
    } catch (err) {
      setError(true);
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
          <InputWrapper onClick={() => setError(false)}>
            <FormInput
              error={errors.email?.message}
              label="E-mail"
              name="email"
              placeholder="eg: Jhon@domain.com"
              register={register}
              onChange={() => setFocus('email')}
            />
          </InputWrapper>
          <InputWrapper onClick={() => setError(false)}>
            <InputGroup>
              <div>
                <FormInput
                  name="password"
                  error={errors.password?.message}
                  label="Password"
                  register={register}
                  type={isShowPassword ? 'text' : 'password'}
                  onChange={() => setFocus('password')}
                />
                {error && (
                  <ErrorMessage>Invalid email or password</ErrorMessage>
                )}
                <IconContainer active={isShowPassword}>
                  <EyeIcon onClick={() => setIsShowPassword(!isShowPassword)} />
                </IconContainer>
              </div>
            </InputGroup>
          </InputWrapper>
          <FormCheckbox
            name="rememberMe"
            label="Remember me"
            register={register}
          />
          <LinkText>Forgot Password</LinkText>

          <SubmitButton type="submit">Log In</SubmitButton>
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
        <SocialLinksText>
          Don&apos;t have an account?
          <LinkText onClick={() => navigate('/sign-up')}> Sign up</LinkText>
        </SocialLinksText>
      </InfoContainer>
    </LoginContainer>
  );
}

export default Login;
