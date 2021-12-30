/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as DialLogo } from 'assets/dial-logo.svg';
import userImage from 'assets/images/user-photo.jpg';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  DialButton,
  ErrorMessage,
  Input,
  MainContainer,
  Message,
  MessageLabel,
  SubmitButton,
  UserImg,
  UserInfo,
  UserName,
} from './contact-form.styles';

const schema = yup
  .object({
    email: yup.string().email().required(),
    message: yup.string().required(),
    name: yup.string().required(),
    phoneNumber: yup.number().required(),
  })
  .required();

/**
 * Listing page contact-form section.
 *
 * @returns {JSX.Element}
 */
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => data;

  return (
    <MainContainer>
      <UserInfo>
        <UserImg src={userImage} />
        <div>
          <UserName>John Doe</UserName>
          <DialButton type="button">
            <DialLogo />
            222-222-222
          </DialButton>
        </div>
      </UserInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name')} placeholder="Name" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <Input {...register('phoneNumber')} placeholder="Phone Number" />
        <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
        <Input {...register('email')} placeholder="Email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <MessageLabel htmlFor="message">
          Message <span>(Max 140 chars)</span>
        </MessageLabel>
        <Message {...register('message')} maxLength={140} />
        <ErrorMessage>{errors.message?.message}</ErrorMessage>
        <SubmitButton>Contact</SubmitButton>
      </form>
    </MainContainer>
  );
}

export default ContactForm;
