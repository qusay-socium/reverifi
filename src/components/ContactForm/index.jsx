/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as DialLogo } from 'assets/dial-logo.svg';
import userImage from 'assets/images/user-photo.jpg';
import Button from 'components/shared/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { number, object, string } from 'yup';
import {
  DialButtonContent,
  ErrorMessage,
  Input,
  MainContainer,
  Message,
  MessageLabel,
  SubmitSection,
  UserImg,
  UserInfo,
  UserName,
} from './contact-form.styles';

const schema = object({
  email: string().email().required(),
  message: string().required(),
  name: string().required(),
  phoneNumber: number().required(),
}).required();

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
          <Button type="button" padding="0.75rem 1rem">
            <DialButtonContent>
              <DialLogo />
              222-222-222
            </DialButtonContent>
          </Button>
        </div>
      </UserInfo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('name')} placeholder="Name" />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <Input
          type="number"
          {...register('phoneNumber')}
          placeholder="Phone Number"
        />
        <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
        <Input {...register('email')} placeholder="Email" />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <MessageLabel htmlFor="message">
          Message <span>(Max 140 chars)</span>
        </MessageLabel>
        <Message {...register('message')} maxLength={140} />
        <ErrorMessage>{errors.message?.message}</ErrorMessage>
        <SubmitSection>
          <Button type="submit">Contact</Button>
        </SubmitSection>
      </form>
    </MainContainer>
  );
}

export default ContactForm;
