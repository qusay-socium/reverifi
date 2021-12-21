/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as MainImg } from 'assets/icons/sign-up-main.svg';
import React, { useState } from 'react';
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
    PhoneInputContainer,
    PhoneInputField,
    SignUpContainer,
    SignUpTerms,
    SocialLinksContainer,
    SubmitButton,
    Title
} from './sign-up.styles';

const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError('password must be a number'),
    phoneCheckbox: yup.boolean(),
    phoneNumber: yup
      .number()
      .positive()
      .integer()
      .when('phoneCheckbox', {
        is: true,
        then: yup.number().required().typeError('phoneNumber must be a number'),
      }),
    phonePrefix: yup
      .number()
      .positive()
      .integer()
      .when('phoneCheckbox', {
        is: true,
        then: yup.number().required().typeError('phonePrefix must be a number'),
      }),
  })
  .required();

function SignUp() {
  const [showPhoneNum, setShowPhoneNum] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
          {/* name */}
          <InputLabel htmlFor="name">Name</InputLabel>
          <InputField
            type="text"
            {...register('name')}
            id="name"
            placeholder="eg: Jhon Doe"
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          {/* email */}
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <InputField
            type="email"
            {...register('email')}
            id="email"
            placeholder="eg: Jhon@domain.com"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          {/* pass */}
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputField
            type="password"
            {...register('password')}
            id="password"
            placeholder="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          {/* checkbox */}
          <CheckboxInputContainer>
            <CheckboxInputField
              type="checkbox"
              {...register('phoneCheckbox')}
              onClick={() => setShowPhoneNum(!showPhoneNum)}
            />
            <InputLabel>I am an industry professional</InputLabel>
          </CheckboxInputContainer>

          {/* phone number */}
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

          {/* button */}
          <SubmitButton type="submit">Continue</SubmitButton>

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
