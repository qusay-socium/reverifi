import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/sign-up-main.svg';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import { Error } from 'components/shared/FormInput/form-input.styles';
import { useUser } from 'contexts/UserContext';
import { IconContainer, InputGroup } from 'pages/Login/login.styles';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import { handleNumberInput, handleTextInput } from 'utils/helpers';
import signUpSchema from './sign-up-schema';
import {
  FacebookButton,
  Form,
  GoogleButton,
  ImageContainer,
  InfoContainer,
  InputWrapper,
  LinkText,
  OrText,
  PhoneInputContainer,
  SignUpContainer,
  SignUpTerms,
  SocialLinksText,
  SubmitButton,
  Title,
} from './sign-up.styles';

const { REACT_APP_FACEBOOK_APP_ID, REACT_APP_GOOGLE_CLIENT_ID } = process.env;

/**
 * Render sign up page.
 *
 * @return {JSX.Element}
 */
function SignUp() {
  const navigate = useNavigate();
  const { signUp, googleLogin, facebookLogin } = useUser();

  const [showPhoneNum, setShowPhoneNum] = useState(false);
  const [DoesEmailExist, setDoesEmailExist] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const continueButton = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(signUpSchema),
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
  const submit = async ({
    name,
    email,
    password,
    phoneNumber,
    industryProfessional,
  }) => {
    try {
      const phone = phoneNumber ? `+1${phoneNumber}` : null;

      await signUp(name, email, password, phone);

      if (industryProfessional) {
        navigate('/verify-phone');
      } else {
        navigate('/my-roles');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  /**
   * Handle social link success.
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
    <SignUpContainer>
      <ImageContainer>
        <MainImg />
      </ImageContainer>
      <InfoContainer>
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit(submit)}>
          <InputWrapper>
            <FormInput
              error={errors.name?.message}
              label="Name"
              name="name"
              placeholder="eg: Jhon Doe"
              register={register}
              maxLength="30"
              onChange={handleTextInput}
              onClickInputKey={onClickInputKey}
            />
          </InputWrapper>
          <InputWrapper>
            <FormInput
              error={errors.email?.message}
              label="E-mail"
              name="email"
              placeholder="eg: Jhon@domain.com"
              register={register}
              onChange={() => {
                setDoesEmailExist(false);
                setFocus('email');
              }}
              onClickInputKey={onClickInputKey}
              maxLength="50"
            />
            {DoesEmailExist && <Error>{DoesEmailExist}</Error>}
          </InputWrapper>
          <InputWrapper>
            <InputGroup>
              <FormInput
                name="password"
                error={errors.password?.message}
                label="Password"
                register={register}
                type={isShowPassword ? 'text' : 'password'}
                onChange={() => setFocus('password')}
                onClickInputKey={onClickInputKey}
              />
              <IconContainer active={isShowPassword}>
                <EyeIcon onClick={() => setIsShowPassword(!isShowPassword)} />
              </IconContainer>
            </InputGroup>
          </InputWrapper>

          <FormCheckbox
            name="industryProfessional"
            label="I am an industry professional"
            register={register}
            onChange={({ target: { checked } }) => setShowPhoneNum(checked)}
          />

          {showPhoneNum && (
            <PhoneInputContainer>
              <FormInput
                label="Phone Number"
                name="phoneNumber"
                placeholder="(201)555-0123"
                register={register}
                error={errors.phoneNumber?.message}
                rounded
                type="text"
                maxLength="10"
                onChange={handleNumberInput}
                onClickInputKey={onClickInputKey}
              />
            </PhoneInputContainer>
          )}

          <SubmitButton forwardedRef={continueButton} type="submit">
            Continue
          </SubmitButton>

          <SignUpTerms>
            By submitting I accept reverifi
            <LinkText>Terms of Use</LinkText>
            and
            <LinkText>Privacy Policy</LinkText>
          </SignUpTerms>
        </Form>

        <div>
          <OrText>Or</OrText>
          <SocialLogin
            provider="facebook"
            appId={REACT_APP_FACEBOOK_APP_ID}
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
            appId={REACT_APP_GOOGLE_CLIENT_ID}
            callback={handleSocialLogin}
          >
            <GoogleButton>
              <div>
                <GoogleIcon />
                <span>Continue with Google</span>
              </div>
            </GoogleButton>
          </SocialLogin>
          <SocialLinksText>
            Have an account?
            <LinkText onClick={() => navigate('/login')}>Log In</LinkText>
          </SocialLinksText>
        </div>
      </InfoContainer>
    </SignUpContainer>
  );
}

export default SignUp;
