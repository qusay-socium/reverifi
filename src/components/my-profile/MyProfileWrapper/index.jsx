import avatar from 'assets/images/avatar.svg';
import React from 'react';
import {
  ImageContainer,
  ProfileContainer,
  TextContainer,
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
        </ImageContainer>

        <TextContainer>
          <UserName>Lia Adams</UserName>
          <UserDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </UserDescription>
        </TextContainer>
      </UserInfoContainer>
    </ProfileContainer>
  );
}

export default MyProfileWrapper;
