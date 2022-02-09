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
import { Error } from 'components/shared/FormInput/form-input.styles';
import TextAreaInput from 'components/shared/FormTextArea';
import Toast from 'components/shared/Toast';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import useShowToastBar from 'hooks/use-show-toast-bar';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { getUserInfo, updateUserInfo } from 'services/user';
import colors from 'styles/colors';
import { generateLabelValuePairs } from 'utils/helpers';
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

const languageOptions = generateLabelValuePairs([
  'Arabic',
  'English',
  'French',
]);

const serviceAreasOptions = generateLabelValuePairs(['New York', 'New Jersey']);

/**
 * custom select theme function to change select default colors
 *
 * @param {Object} theme theme object from the select component
 */
const customSelectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    dangerLight: colors.alabaster,
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
  const { userInfo, isLoggedIn, setUserInfo } = useUser();
  const [languages, setLanguages] = useState(
    generateLabelValuePairs(['English'])
  );
  const [serviceAreas, setServiceAreas] = useState(
    generateLabelValuePairs(['New York'])
  );
  const [fetchedUserData, setFetchedUserData] = useState({});

  const [dataSaved, setDataSaved] = useState(false);
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

  /**
   * form submit function
   *
   * @param {Object} data data collected from the form inputs
   */
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

    const variables = {
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

    await updateUserInfo(variables);

    setFetchedUserData((prev) => ({
      ...prev,
      aboutMe,
      user: { ...variables.user },
    }));

    setDataSaved(true);

    // change global context value
    setUserInfo({ email, name, phone });
  };

  /**
   * fetch user info function
   */
  const fetchUserInfo = async () => {
    if (!isLoggedIn) navigate('/sign-up');

    try {
      const info = await getUserInfo();
      setFetchedUserData(info);

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
    } catch (err) {
      setFetchedUserData({ user: userInfo });
    }

    Object.keys(getValues()).map((value) => setFocus(value));
    setFocus('name');
  };

  useEffectOnce(fetchUserInfo);

  /**
   * hook that hide toast message after n duration in seconds
   */
  useShowToastBar(dataSaved, setDataSaved, 2000);

  /**
   * Handle input function set max length for number fields
   *
   * @param {object} target input target object
   *
   */
  const handleInput = ({ target }) => {
    setFocus(target.name);

    const numberPattern = /\d+/g;

    if (!target.value.match(numberPattern)) {
      target.value = '';
    }
  };

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
          <UserName>{fetchedUserData.user?.name}</UserName>
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
              defaultValue={fetchedUserData.user?.name}
              onChange={() => setFocus('name')}
            />
            <FormInput
              type="text"
              name="phone"
              label="Phone"
              maxLength="15"
              labelIconElement={<PhoneIcon />}
              onChange={handleInput}
              register={register}
              error={errors.phone?.message}
              defaultValue={fetchedUserData.user?.phone}
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
              defaultValue={fetchedUserData.user?.email}
            />

            <AddressInputsContainer>
              <InputLabel htmlFor="country" noPadding>
                <AddressIcon />
                Address
              </InputLabel>
              <FormInput
                type="text"
                name="country"
                placeholder="Country"
                register={register}
                error={errors.country?.message}
                defaultValue={fetchedUserData.country}
                onChange={() => setFocus('country')}
              />
              <FormInput
                type="text"
                name="city"
                placeholder="City"
                register={register}
                error={errors.city?.message}
                defaultValue={fetchedUserData.city}
                onChange={() => setFocus('city')}
              />
              <FormInput
                type="text"
                name="zipCode"
                placeholder="ZipCode"
                maxLength="5"
                register={register}
                error={errors.zipCode?.message}
                defaultValue={fetchedUserData.zipCode}
                onChange={handleInput}
              />
              <FormInput
                type="text"
                name="address"
                placeholder="Address"
                register={register}
                error={errors.address?.message}
                defaultValue={fetchedUserData.address}
                onChange={() => setFocus('address')}
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
                render={({ field: { onChange } }) => (
                  <Select
                    {...register('languages')}
                    className="profile-select"
                    classNamePrefix="profile"
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    isMulti
                    isSearchable={false}
                    options={languageOptions}
                    placeholder="Select languages..."
                    theme={customSelectTheme}
                    value={languages}
                    onChange={(val) => {
                      setLanguages(val);
                      onChange(val);
                    }}
                  />
                )}
              />
              {errors.languages?.message && (
                <Error>{errors.languages?.message}</Error>
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
                render={({ field: { onChange } }) => (
                  <Select
                    {...register('serviceAreas')}
                    className="profile-select"
                    classNamePrefix="profile"
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    isMulti
                    options={serviceAreasOptions}
                    placeholder="Select areas..."
                    theme={customSelectTheme}
                    value={serviceAreas}
                    onChange={(val) => {
                      setServiceAreas(val);
                      onChange(val);
                    }}
                  />
                )}
              />
              {errors.serviceAreas?.message && (
                <Error>{errors.serviceAreas?.message}</Error>
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
            onChange={() => setFocus('aboutMe')}
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
              onChange={() => setFocus('companyName')}
            />
            <FormInput
              type="email"
              name="companyEmail"
              label="E-mail"
              labelIconElement={<EmailIcon />}
              register={register}
              error={errors.companyEmail?.message}
              defaultValue={fetchedUserData.company?.email}
              onChange={() => setFocus('companyEmail')}
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
              onChange={() => setFocus('companyWebsite')}
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
              onChange={() => setFocus('facebook')}
            />
            <FormInput
              type="text"
              name="instagram"
              label="Instagram"
              labelIconElement={<InstaIcon />}
              register={register}
              error={errors.instagram?.message}
              defaultValue={fetchedUserData.socials?.instagram}
              onChange={() => setFocus('instagram')}
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
              onChange={() => setFocus('linkedin')}
            />
            <FormInput
              type="text"
              name="youtube"
              label="YouTube"
              labelIconElement={<YoutubeIcon />}
              register={register}
              error={errors.youtube?.message}
              defaultValue={fetchedUserData.socials?.youtube}
              onChange={() => setFocus('youtube')}
            />
          </InputsContainer>
        </FormSectionContainer>

        <SaveButton type="submit">Save</SaveButton>

        {dataSaved && (
          <Toast
            status="success"
            message="Your profile information has been saved"
          />
        )}
      </FormContainer>
    </ProfileContainer>
  );
}

export default MyProfileWrapper;
