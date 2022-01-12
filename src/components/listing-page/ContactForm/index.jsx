import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as DialLogo } from 'assets/dial-logo.svg';
import userImage from 'assets/images/user-photo.jpg';
import Button from 'components/shared/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
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

// The regex expression was taken from this source (https://www.sitepoint.com/community/t/phone-number-regular-expression-validation/2204).
// You can find all information needed about the phone expression in the link above.
const phoneExpression =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = object({
  email: string().email().required(),
  message: string().required(),
  name: string().required(),
  phoneNumber: string()
    .matches(phoneExpression, {
      excludeEmptyString: true,
      message: 'Phone number is invalid',
    })
    .max(15, 'Too long')
    .required('phone number is a required field'),
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
