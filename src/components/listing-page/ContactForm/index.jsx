import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as DialLogo } from 'assets/dial-logo.svg';
import userImage from 'assets/images/user-photo.jpg';
import Button from 'components/shared/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import schema from './contact-form-schema';
import {
  DialButton,
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
            <DialButtonContent>
              <DialLogo />
              222-222-222
            </DialButtonContent>
          </DialButton>
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
