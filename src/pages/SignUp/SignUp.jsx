import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as AppleIcon } from 'assets/icons/apple.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg';
import { ReactComponent as MainImg } from 'assets/icons/sign-up-main.svg';
import FormCheckbox from 'components/shared/FormCheckbox';
import FormInput from 'components/shared/FormInput';
import { useUser } from 'contexts/UserContext';
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  /**
   * Handle form submit.
   *
   * @param {Object} data Form data.
   */
  const submit = async ({ name, email, password }) => {
    try {
      await signUp(name, email, password);
      navigate('/');
    } catch (error) {
      // TODO: show error to the user
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
                  placeholder="ext"
                  register={register}
                  rounded={false}
                  type="number"
                />
                <FormInput
                  name="phoneNumber"
                  placeholder="number"
                  register={register}
                  error={errors.phoneNumber?.message}
                  rounded={false}
                  type="number"
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
