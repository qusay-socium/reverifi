import { ReactComponent as AddressIcon } from 'assets/icons/profile-address.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/profile-email.svg';
import { ReactComponent as NameIcon } from 'assets/icons/profile-name.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/profile-phone.svg';
import { ReactComponent as EditIcon } from 'assets/icons/user-image-edit.svg';
import avatar from 'assets/images/avatar.svg';
import FormInput from 'components/shared/FormInput';
import React from 'react';
import {
  EditIconContainer,
  FormContainer,
  FormSectionContainer,
  FormSectionTitle,
  ImageContainer,
  InputsContainer,
  ProfileContainer,
  UserDescription,
  UserImage,
  UserInfoContainer,
  UserName,
} from './my-profile-wrapper.styles';

/**
 * My Profile Wrapper component.
 *
 * @return {JSX.Element}
 */
function MyProfileWrapper() {
  return (
    <ProfileContainer>
      <UserInfoContainer>
        <ImageContainer>
          <UserImage src={avatar} alt="user-image" />
          <EditIconContainer>
            <EditIcon />
          </EditIconContainer>
        </ImageContainer>

        <div>
          <UserName>Lia Adams</UserName>
          <UserDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </UserDescription>
        </div>
      </UserInfoContainer>

      <FormContainer>
        <FormSectionContainer>
          <FormSectionTitle>Personal Information</FormSectionTitle>
          <InputsContainer>
            <FormInput
              type="text"
              name="name"
              label="Name"
              labelIconElement={<NameIcon />}
            />
            <FormInput
              type="number"
              name="phone"
              label="Phone"
              labelIconElement={<PhoneIcon />}
            />
          </InputsContainer>
          <InputsContainer>
            <FormInput
              type="email"
              name="email"
              label="E-mail"
              labelIconElement={<EmailIcon />}
            />
            <FormInput
              type="text"
              name="address"
              label="Address"
              labelIconElement={<AddressIcon />}
            />
          </InputsContainer>
          <InputsContainer>{/* package input here */}</InputsContainer>
        </FormSectionContainer>
      </FormContainer>
    </ProfileContainer>
  );
}

export default MyProfileWrapper;
