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
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { getUserInfo, updateUserInfo } from 'services/user';
import colors from 'styles/colors';
import myProfileSchema from './my-profile-wrapper-schema';
import {
  AddressInputsContainer,
  EditIconContainer,
  FormContainer,
  FormSectionContainer,
  FormSectionTitle,
  ImageContainer,
  InputError,
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

const customSelectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: colors.green,
    primary25: colors.midGray,
  },
});

/**
 * My Profile Wrapper component.
 *
 * @return {JSX.Element}
 */
function MyProfileWrapper() {
  const [languages, setLanguages] = useState([]);
  const [serviceAreas, setServiceAreas] = useState([]);
  const [fetchedUserData, setFetchedUserData] = useState({});

  const { userInfo, logout } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setFocus,
  } = useForm({
    resolver: yupResolver(myProfileSchema),
  });

  const submit = async (data) => {
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

    const dataBody = {
      company: {
        email: companyEmail,
        id: fetchedUserData.company?.id || null,
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

    await updateUserInfo(dataBody);

    // logout and redirect to the login page
    logout();
    navigate('/login');
  };

  const fetchUserInfo = async () => {
    const info = await getUserInfo();
    setFetchedUserData(info);

    // set languages and service areas
    if (info.languages) {
      const newLanguages = info.languages?.map((lang) => ({
        label: lang,
        value: lang,
      }));
      setLanguages(newLanguages);
    }

    if (info.serviceAreas) {
      const newAreas = info.serviceAreas?.map((area) => ({
        label: area,
        value: area,
      }));
      setServiceAreas(newAreas);
    }

    // focus all input when load the page
    Object.keys(getValues()).map(
      (value) =>
        value !== 'languages' && value !== 'serviceAreas' && setFocus(value)
    );
    setFocus('name');
  };

  useEffectOnce(fetchUserInfo);

  return (
    <ProfileContainer>
      <UserInfoContainer>
        <ImageContainer>
          <UserImage src={fetchedUserData?.image || avatar} alt="user-image" />
          <EditIconContainer>
            <EditIcon />
          </EditIconContainer>
        </ImageContainer>

        <div>
          <UserName>{userInfo?.name}</UserName>
          <UserDescription>{fetchedUserData.aboutMe}</UserDescription>
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
              defaultValue={userInfo?.name}
            />
            <FormInput
              type="number"
              name="phone"
              label="Phone"
              labelIconElement={<PhoneIcon />}
              register={register}
              error={errors.phone?.message}
              defaultValue={userInfo?.phone}
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
              defaultValue={userInfo?.email}
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
                defaultValue={fetchedUserData.country}
              />
              <FormInput
                type="text"
                name="city"
                placeholder="city"
                register={register}
                error={errors.city?.message}
                defaultValue={fetchedUserData.city}
              />
              <FormInput
                type="number"
                name="zipCode"
                placeholder="zipCode"
                register={register}
                error={errors.zipCode?.message}
                defaultValue={fetchedUserData.zipCode}
              />
              <FormInput
                type="text"
                name="address"
                placeholder="address"
                register={register}
                error={errors.address?.message}
                defaultValue={fetchedUserData.address}
              />
            </AddressInputsContainer>
          </InputsContainer>
          <InputsContainer>
            <div>
              <InputLabel>
                <LanguagesIcon />
                Languages
              </InputLabel>
              <Controller
                name="languages"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    className="profile-select"
                    classNamePrefix="profile"
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    isMulti
                    isSearchable={false}
                    options={languagesOptions}
                    placeholder="select languages..."
                    theme={customSelectTheme}
                    value={languages.length === 0 ? value : languages}
                    onChange={(val) => {
                      setLanguages(val);
                      onChange(val);
                    }}
                  />
                )}
              />
              {errors.languages?.label?.message && (
                <InputError>{errors.languages?.label?.message}</InputError>
              )}
            </div>
            <div>
              <InputLabel>
                <ServiceAreasIcon />
                Service Areas
              </InputLabel>

              <Controller
                name="serviceAreas"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    className="profile-select"
                    classNamePrefix="profile"
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    isMulti
                    options={serviceAreasOptions}
                    placeholder="select areas..."
                    theme={customSelectTheme}
                    value={serviceAreas.length === 0 ? value : serviceAreas}
                    onChange={(val) => {
                      setServiceAreas(val);
                      onChange(val);
                    }}
                  />
                )}
              />
              {errors.serviceAreas?.label?.message && (
                <InputError>{errors.serviceAreas?.label?.message}</InputError>
              )}
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
            defaultValue={fetchedUserData.aboutMe}
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
              defaultValue={fetchedUserData.company?.name}
            />
            <FormInput
              type="email"
              name="companyEmail"
              label="E-mail"
              labelIconElement={<EmailIcon />}
              register={register}
              error={errors.companyEmail?.message}
              defaultValue={fetchedUserData.company?.email}
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
              defaultValue={fetchedUserData.company?.website}
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
              defaultValue={fetchedUserData.socials?.facebook}
            />
            <FormInput
              type="text"
              name="instagram"
              label="Instagram"
              labelIconElement={<InstaIcon />}
              register={register}
              error={errors.instagram?.message}
              defaultValue={fetchedUserData.socials?.instagram}
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
              defaultValue={fetchedUserData.socials?.linkedin}
            />
            <FormInput
              type="text"
              name="youtube"
              label="YouTube"
              labelIconElement={<YoutubeIcon />}
              register={register}
              error={errors.youtube?.message}
              defaultValue={fetchedUserData.socials?.youtube}
            />
          </InputsContainer>
        </FormSectionContainer>

        <SaveButton type="submit">Save</SaveButton>
      </FormContainer>
    </ProfileContainer>
  );
}

export default MyProfileWrapper;
