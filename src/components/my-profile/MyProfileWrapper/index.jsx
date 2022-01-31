import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as AboutIcon } from 'assets/icons/profile-about.svg';
import { ReactComponent as AddressIcon } from 'assets/icons/profile-address.svg';
import { ReactComponent as CompanyNameIcon } from 'assets/icons/profile-company-name.svg';
import { ReactComponent as CompanyWebsiteIcon } from 'assets/icons/profile-company-website.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/profile-email.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/profile-facebook.svg';
import { ReactComponent as InstaIcon } from 'assets/icons/profile-insta.svg';
import { ReactComponent as LanguagesIcon } from 'assets/icons/profile-languages.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/profile-linkedin.svg';
import { ReactComponent as NameIcon } from 'assets/icons/profile-name.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/profile-phone.svg';
import { ReactComponent as ServiceAreasIcon } from 'assets/icons/profile-service-areas.svg';
import { ReactComponent as YoutubeIcon } from 'assets/icons/profile-youtube.svg';
import { ReactComponent as EditIcon } from 'assets/icons/user-image-edit.svg';
import avatar from 'assets/images/avatar.svg';
import FormInput from 'components/shared/FormInput';
import TextAreaInput from 'components/shared/FormTextArea';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import colors from 'styles/colors';
import myProfileSchema from './my-profile-wrapper-schema';
import {
  AddressInputsContainer,
  EditIconContainer,
  FormContainer,
  FormSectionContainer,
  FormSectionTitle,
  ImageContainer,
  InputLabel,
  InputsContainer,
  ProfileContainer,
  SaveButton,
  UserDescription,
  UserImage,
  UserInfoContainer,
  UserName,
} from './my-profile-wrapper.styles';

const languagesOptions = [
  { label: 'Arabic', value: 'ar' },
  { label: 'English', value: 'eng' },
  { label: 'French', value: 'fr' },
];

const serviceAreasOptions = [
  { label: 'New York', value: 'NY' },
  { label: 'New Jersey', value: 'NJ' },
];

/**
 * My Profile Wrapper component.
 *
 * @return {JSX.Element}
 */
function MyProfileWrapper() {
  const [languages, setLanguages] = useState([]);
  const [serviceAreas, setServiceAreas] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(myProfileSchema),
  });

  const submit = (data) => {
    const {
      aboutMe,
      address,
      city,
      companyEmail,
      companyName,
      companyWebsite,
      country,
      email,
      facebook,
      instagram,
      linkedin,
      name,
      phone,
      youtube,
      zipCode,
    } = data;

    const finalShape = {
      company: {
        email: companyEmail,
        name: companyName,
        website: companyWebsite,
      },
      user: { email, name, phone },
      userInfo: {
        aboutMe,
        address,
        city,
        country,
        languages: languages?.map(({ value }) => value),
        serviceAreas: serviceAreas?.map(({ value }) => value),
        socials: { facebook, instagram, linkedin, youtube },
        zipCode,
      },
    };
    console.log(finalShape);
  };

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

      <FormContainer onSubmit={handleSubmit(submit)}>
        <FormSectionContainer>
          <FormSectionTitle>Personal Information</FormSectionTitle>
          <InputsContainer>
            <FormInput
              type="text"
              name="name"
              label="Name"
              labelIconElement={<NameIcon />}
              register={register}
              error={errors.name?.message}
            />
            <FormInput
              type="number"
              name="phone"
              label="Phone"
              labelIconElement={<PhoneIcon />}
              register={register}
              error={errors.phone?.message}
            />
          </InputsContainer>
          <InputsContainer>
            <FormInput
              type="email"
              name="email"
              label="E-mail"
              labelIconElement={<EmailIcon />}
              register={register}
              error={errors.email?.message}
            />

            <AddressInputsContainer>
              <InputLabel htmlFor="country" noPadding>
                <AddressIcon />
                Address
              </InputLabel>
              <FormInput
                type="text"
                name="country"
                placeholder="country"
                register={register}
                error={errors.country?.message}
              />
              <FormInput
                type="text"
                name="city"
                placeholder="city"
                register={register}
                error={errors.city?.message}
              />
              <FormInput
                type="number"
                name="zipCode"
                placeholder="zipCode"
                register={register}
                error={errors.zipCode?.message}
              />
              <FormInput
                type="text"
                name="address"
                placeholder="address"
                register={register}
                error={errors.address?.message}
              />
            </AddressInputsContainer>
          </InputsContainer>
          <InputsContainer>
            <div>
              <InputLabel>
                <LanguagesIcon />
                Languages
              </InputLabel>
              <Select
                className="profile-select"
                classNamePrefix="profile"
                closeMenuOnSelect={false}
                defaultValue={languages}
                hideSelectedOptions={false}
                isMulti
                isSearchable={false}
                {...register('languages')}
                options={languagesOptions}
                placeholder="select languages..."
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: colors.green,
                    primary25: colors.green,
                  },
                })}
                onChange={(value) => setLanguages(value)}
              />
            </div>
            <div>
              <InputLabel>
                <ServiceAreasIcon />
                Service Areas
              </InputLabel>
              <Select
                className="profile-select"
                classNamePrefix="profile"
                closeMenuOnSelect={false}
                defaultValue={serviceAreas}
                hideSelectedOptions={false}
                isMulti
                {...register('serviceAreas')}
                options={serviceAreasOptions}
                placeholder="select areas..."
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: colors.green,
                    primary25: colors.green,
                  },
                })}
                onChange={(value) => setServiceAreas(value)}
              />
            </div>
          </InputsContainer>
          <TextAreaInput
            name="aboutMe"
            label="About"
            rounded={false}
            labelIconElement={<AboutIcon />}
            limit={100}
            register={register}
            error={errors.about?.message}
          />
        </FormSectionContainer>

        <FormSectionContainer>
          <FormSectionTitle>Company Information</FormSectionTitle>
          <InputsContainer>
            <FormInput
              type="text"
              name="companyName"
              label="Company"
              labelIconElement={<CompanyNameIcon />}
              register={register}
              error={errors.companyName?.message}
            />
            <FormInput
              type="email"
              name="companyEmail"
              label="E-mail"
              labelIconElement={<EmailIcon />}
              register={register}
              error={errors.companyEmail?.message}
            />
          </InputsContainer>
          <InputsContainer>
            <FormInput
              type="text"
              name="companyWebsite"
              label="Website"
              labelIconElement={<CompanyWebsiteIcon />}
              register={register}
              error={errors.companyWebsite?.message}
            />
            <div />
          </InputsContainer>
        </FormSectionContainer>

        <FormSectionContainer>
          <FormSectionTitle>Social Media Information</FormSectionTitle>
          <InputsContainer>
            <FormInput
              type="text"
              name="facebook"
              label="Facebook"
              labelIconElement={<FacebookIcon />}
              register={register}
              error={errors.facebook?.message}
            />
            <FormInput
              type="text"
              name="instagram"
              label="Instagram"
              labelIconElement={<InstaIcon />}
              register={register}
              error={errors.instagram?.message}
            />
          </InputsContainer>
          <InputsContainer>
            <FormInput
              type="text"
              name="linkedin"
              label="LinkedIn"
              labelIconElement={<LinkedinIcon />}
              register={register}
              error={errors.linkedin?.message}
            />
            <FormInput
              type="text"
              name="youtube"
              label="YouTube"
              labelIconElement={<YoutubeIcon />}
              register={register}
              error={errors.youtube?.message}
            />
          </InputsContainer>
        </FormSectionContainer>

        <SaveButton type="submit">Save</SaveButton>
      </FormContainer>
    </ProfileContainer>
  );
}

export default MyProfileWrapper;
