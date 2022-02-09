import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as AppleIcon } from 'assets/icons/apple.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/sign-up-main.svg';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import { Error } from 'components/shared/FormInput/form-input.styles';
import { useUser } from 'contexts/UserContext';
import { IconContainer, InputGroup } from 'pages/Login/login.styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import signUpSchema from './sign-up-schema';
import {
  AppleButton,
  FacebookButton,
  Form,
  GoogleButton,
  ImageContainer,
  InfoContainer,
  InputWrapper,
  Label,
  LinkText,
  OrText,
  PhoneInputContainer,
  SignUpContainer,
  SignUpTerms,
  SocialLinksText,
  SubmitButton,
  Title,
} from './sign-up.styles';

/**
 * Render sign up page.
 *
 * @return {JSX.Element}
 */
function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useUser();

  const [showPhoneNum, setShowPhoneNum] = useState(false);
  const [DoesEmailExist, setDoesEmailExist] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  /**
   * Handle form submit.
   *
   * @param {Object} data Form data.
   */
  const submit = async ({
    name,
    email,
    password,
    phonePrefix,
    phoneNumber,
    industryProfessional,
  }) => {
    try {
      const phone =
        phonePrefix && phoneNumber ? `${phonePrefix}${phoneNumber}` : null;

      await signUp(name, email, password, phone);

      if (industryProfessional) {
        navigate('/verify-phone');
      } else {
        navigate('/my-roles');
      }
    } catch ({ response }) {
      if (response.status === 400) setDoesEmailExist(response.data?.message);
    }
  };

  /**
   * Handle input function prevent enter other types than numbers
   *
   * @param {object} target input target object
   *
   */
  const handleInput = ({ target }) => {
    if (
      !Number.parseInt(target.value, 10) &&
      Number.parseInt(target.value, 10) !== 0 &&
      target.value !== '+'
    ) {
      target.value = '';
    }
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
            <>
              <Label htmlFor="phonePrefix">Phone Number</Label>
              <PhoneInputContainer>
                <FormInput
                  error={errors.phonePrefix?.message}
                  name="phonePrefix"
                  placeholder="Ext"
                  register={register}
                  rounded={false}
                  type="text"
                  maxLength="3"
                  onChange={handleInput}
                />
                <FormInput
                  name="phoneNumber"
                  placeholder="(201)555-0123"
                  register={register}
                  error={errors.phoneNumber?.message}
                  rounded={false}
                  type="text"
                  maxLength="10"
                  onChange={handleInput}
                />
              </PhoneInputContainer>
            </>
          )}

          <SubmitButton type="submit">Continue</SubmitButton>

          <SignUpTerms>
            By submitting I accept reverifi
            <LinkText> Terms of Use </LinkText>
            and
            <LinkText> Privacy Policy</LinkText>
          </SignUpTerms>
        </Form>

        <div>
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
          <SocialLinksText>
            Have an account?
            <LinkText onClick={() => navigate('/login')}> Log In</LinkText>
          </SocialLinksText>
        </div>
      </InfoContainer>
    </SignUpContainer>
  );
}

export default SignUp;
