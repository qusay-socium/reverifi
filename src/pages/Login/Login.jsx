import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/login-main.svg';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import { useUser } from 'contexts/UserContext';
import { SubmitButton } from 'pages/SignUp/sign-up.styles';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import loginSchema from './login-schema';
import {
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

const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

/**
 * Login page component.
 *
 * @return {JSX.Element}
 */
function Login() {
  const [error, setError] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, googleLogin, facebookLogin } = useUser();
  const continueButton = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onClickInputKey = (key) => {
    if (key.keyCode === 13) {
      continueButton.current.focus();
    }
  };

  /**
   * Handle form submit.
   *
   * @param {Object} data Form data.
   */
  const submit = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate('/my-roles');
    } catch (err) {
      setError(true);
    }
  };

  /**
   * Handle social login success.
   *
   * @param {Object} linkData link data returned from social APIs.
   */
  const handleSocialLogin = async (linkData) => {
    const { _provider, _token } = linkData;
    if (_provider === 'google') {
      await googleLogin(_token.idToken);
    }
    if (_provider === 'facebook') {
      await facebookLogin(_token.accessToken);
    }
    navigate('/my-roles');
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
              onClickInputKey={onClickInputKey}
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
                  onClickInputKey={onClickInputKey}
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

          <SubmitButton forwardedRef={continueButton} type="submit">
            Log In
          </SubmitButton>
        </Form>

        <SocialLinksContainer>
          <OrText>Or</OrText>
          <SocialLogin
            provider="facebook"
            appId={facebookAppId}
            callback={handleSocialLogin}
            cookiePolicy="single_host_origin"
          >
            <FacebookButton>
              <div>
                <FacebookIcon />
                <span> Continue with Facebook</span>
              </div>
            </FacebookButton>
          </SocialLogin>
          <SocialLogin
            provider="google"
            appId={googleClientId}
            callback={handleSocialLogin}
          >
            <GoogleButton>
              <div>
                <GoogleIcon />
                <span>Continue with Google</span>
              </div>
            </GoogleButton>
          </SocialLogin>
        </SocialLinksContainer>
        <SocialLinksText>
          Do not have an account?
          <LinkText onClick={() => navigate('/sign-up')}>Sign up</LinkText>
        </SocialLinksText>
      </InfoContainer>
    </LoginContainer>
  );
}

export default Login;
