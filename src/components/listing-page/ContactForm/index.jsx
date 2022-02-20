import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as DialLogo } from 'assets/dial-logo.svg';
import userImage from 'assets/images/user-photo.jpg';
import Button from 'components/shared/Button';
import TextAreaInput from 'components/shared/FormTextArea';
import React from 'react';
import { useForm } from 'react-hook-form';
import schema from './contact-form-schema';
import {
  ContactButton,
  Container,
  DialButtonContent,
  ErrorMessage,
  Input,
  Message,
  SubmitSection,
  UserImg,
  UserInfo,
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
    <Container>
      <UserInfo>
        <UserImg src={userImage} />
        <div>
          <h3>John Doe</h3>
          <Button type="button">
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
        <Message>
          <TextAreaInput
            name="message"
            label="Message"
            rounded={false}
            limit={140}
            register={register}
            error={errors.message?.message}
          />
        </Message>
        <SubmitSection>
          <ContactButton type="submit">Contact</ContactButton>
        </SubmitSection>
      </form>
    </Container>
  );
}

export default ContactForm;
