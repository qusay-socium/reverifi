import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as AboutIcon } from 'assets/icons/profile-about.svg';
import { ReactComponent as AddressIcon } from 'assets/icons/profile-address.svg';
import { ReactComponent as CityIcon } from 'assets/icons/profile-city.svg';
import { ReactComponent as CompanyNameIcon } from 'assets/icons/profile-company-name.svg';
import { ReactComponent as CompanyWebsiteIcon } from 'assets/icons/profile-company-website.svg';
import { ReactComponent as CountryIcon } from 'assets/icons/profile-country.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/profile-email.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/profile-facebook.svg';
import { ReactComponent as InstaIcon } from 'assets/icons/profile-insta.svg';
import { ReactComponent as LanguagesIcon } from 'assets/icons/profile-languages.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/profile-linkedin.svg';
import { ReactComponent as NameIcon } from 'assets/icons/profile-name.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/profile-phone.svg';
import { ReactComponent as ServiceAreasIcon } from 'assets/icons/profile-service-areas.svg';
import { ReactComponent as YoutubeIcon } from 'assets/icons/profile-youtube.svg';
import { ReactComponent as ZipCodeIcon } from 'assets/icons/profile-zipcode.svg';
import { ReactComponent as EditIcon } from 'assets/icons/user-image-edit.svg';
import avatar from 'assets/images/avatar.svg';
import FormInput from 'components/shared/FormInput';
import { Error } from 'components/shared/FormInput/form-input.styles';
import TextAreaInput from 'components/shared/FormTextArea';
import Toast from 'components/shared/Toast';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import useShowToastBar from 'hooks/use-show-toast-bar';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select, { createFilter } from 'react-select';
import getAllCountriesAndCities from 'services/apis';
import { getUserInfo, updateUserInfo } from 'services/user';
import colors from 'styles/colors';
import {
  generateLabelValuePairs,
  handleNumberInput,
  handleTextInput,
} from 'utils/helpers';
import MenuList from '../MenuList';
import myProfileSchema from './my-profile-wrapper-schema';
import {
  EditIconContainer,
  FormContainer,
  FormSectionContainer,
  FormSectionTitle,
  ImageContainer,
  InputLabel,
  InputsContainer,
  ProfileContainer,
  SaveButton,
  SelectContainer,
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
  const [count, setCount] = useState(0);
  const [languages, setLanguages] = useState(
    generateLabelValuePairs(['English'])
  );
  const [serviceAreas, setServiceAreas] = useState(
    generateLabelValuePairs(['New York'])
  );

  const [countries, setCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(
    generateLabelValuePairs(['United States'])[0]
  );
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(
    generateLabelValuePairs(['New York'])[0]
  );

  const [fetchedUserData, setFetchedUserData] = useState({});
  const [dataSaved, setDataSaved] = useState(false);
  const [saveDataError, setSaveDataError] = useState(false);
  const [companyEmailError, setCompanyEmailError] = useState(false);

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
      companyEmail,
      companyName,
      companyWebsite,
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
      user: { email, name, phone: `+${phone}` },
      userInfo: {
        aboutMe,
        address,
        city: selectedCity?.value,
        country: selectedCountry?.value,
        languages: languages?.map(({ value }) => value),
        serviceAreas: serviceAreas?.map(({ value }) => value),
        socials: { facebook, instagram, linkedin, youtube },
        zipCode,
      },
    };

    try {
      await updateUserInfo(variables);

      setFetchedUserData((prev) => ({
        ...prev,
        aboutMe,
        user: { ...variables.user },
      }));

      setDataSaved(true);

      // change global context value
      setUserInfo({ email, name, phone });
    } catch ({ response: { data: serverData } }) {
      if (serverData.errors[0].message === 'email must be unique') {
        setCompanyEmailError(true);
        setFocus('companyEmail');
      }
      setSaveDataError(true);
    }
  };

  /**
   * fetch user info function
   */
  const fetchUserInfo = async () => {
    if (!isLoggedIn) navigate('/sign-up');

    try {
      // get countries and cities
      const fetchedCountries = await getAllCountriesAndCities();

      setCountries(fetchedCountries);

      setCountryOptions(
        generateLabelValuePairs(fetchedCountries.map((item) => item.country))
      );

      // get user info
      const info = await getUserInfo();
      if (!info) {
        setFetchedUserData({ user: userInfo });
      } else {
        setFetchedUserData(info);
      }

      // set dropdown menu fields states
      if (info.languages) {
        const newLanguages = generateLabelValuePairs(info?.languages);
        setLanguages(newLanguages);
      }

      if (info.serviceAreas) {
        const newAreas = generateLabelValuePairs(info?.serviceAreas);
        setServiceAreas(newAreas);
      }

      if (info.country) {
        const newCountry = generateLabelValuePairs([info?.country])[0];
        setSelectedCountry(newCountry);
      }

      if (info.city) {
        const newCity = generateLabelValuePairs([info?.city])[0];
        setSelectedCity(newCity);
      }
    } catch (err) {
      setFetchedUserData({ user: userInfo });
    }

    Object.keys(getValues()).map((value) => setFocus(value));
    setFocus('name');
  };

  useEffectOnce(fetchUserInfo);

  useEffect(() => {
    if (count < 3) setCount(count + 1);
    // get cities of each selected country
    const fetchedCities = countries?.find(
      (item) => item.country === selectedCountry?.value
    );

    if (fetchedCities) {
      setCityOptions(generateLabelValuePairs(fetchedCities?.cities));

      if (count > 2) {
        setSelectedCity(generateLabelValuePairs([fetchedCities?.cities[0]])[0]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries, selectedCountry]);

  /**
   * hook that hide success toast message after n duration in seconds
   */
  useShowToastBar(dataSaved, setDataSaved);

  /**
   * hook that hide fail toast message after n duration in seconds
   */
  useShowToastBar(saveDataError, setSaveDataError);

  return (
    <ProfileContainer>
      <UserInfoContainer>
        <ImageContainer>
          <UserImage src={fetchedUserData?.image || avatar} alt="user-image" />
          <EditIconContainer>
            <EditIcon />
          </EditIconContainer>
        </ImageContainer>

        <UserName>{fetchedUserData.user?.name}</UserName>
      </UserInfoContainer>

      <FormContainer onSubmit={handleSubmit(submit)}>
        <FormSectionContainer>
          <FormSectionTitle>Personal Information</FormSectionTitle>
          <InputsContainer>
            <FormInput
              type="text"
              name="name"
              label="Name"
              maxLength="30"
              labelIconElement={<NameIcon />}
              register={register}
              error={errors.name?.message}
              defaultValue={fetchedUserData.user?.name}
              onChange={handleTextInput}
              required
            />
            <FormInput
              type="text"
              name="phone"
              label="Phone"
              maxLength="15"
              labelIconElement={<PhoneIcon />}
              onChange={(event) => {
                setFocus('phone');
                handleNumberInput(event);
              }}
              register={register}
              error={errors.phone?.message}
              required
              defaultValue={fetchedUserData.user?.phone?.slice(1)}
              withPrefix
            />
          </InputsContainer>
          <InputsContainer>
            <FormInput
              type="email"
              name="email"
              label="E-mail"
              labelIconElement={<EmailIcon />}
              register={register}
              defaultValue={fetchedUserData.user?.email}
              disabled
            />

            <div>
              <InputLabel>
                <ServiceAreasIcon />
                Service Areas
                <span>*</span>
              </InputLabel>
              <SelectContainer error={errors.serviceAreas?.message}>
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
                      theme={(theme) => customSelectTheme(theme)}
                      value={serviceAreas}
                      onChange={(val) => {
                        setServiceAreas(val);
                        onChange(val);
                      }}
                    />
                  )}
                />
              </SelectContainer>
              {errors.serviceAreas?.message && (
                <Error>{errors.serviceAreas?.message}</Error>
              )}
            </div>
          </InputsContainer>
          <InputsContainer>
            <div>
              <InputLabel>
                <LanguagesIcon />
                Languages
                <span>*</span>
              </InputLabel>
              <SelectContainer error={errors.languages?.message}>
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
                      theme={(theme) => customSelectTheme(theme)}
                      value={languages}
                      onChange={(val) => {
                        setLanguages(val);
                        onChange(val);
                      }}
                    />
                  )}
                />
              </SelectContainer>
              {errors.languages?.message && (
                <Error>{errors.languages?.message}</Error>
              )}
            </div>
            <div />
          </InputsContainer>
          <TextAreaInput
            name="aboutMe"
            label="About me"
            rounded={false}
            labelIconElement={<AboutIcon />}
            limit={400}
            register={register}
            error={errors.aboutMe?.message}
            defaultValue={fetchedUserData.aboutMe}
            onChange={() => {
              setFocus('aboutMe');
            }}
          />
        </FormSectionContainer>

        <FormSectionContainer>
          <FormSectionTitle>Address Information</FormSectionTitle>
          <InputsContainer>
            <div>
              <InputLabel>
                <CountryIcon />
                Country
                <span>*</span>
              </InputLabel>
              <SelectContainer error={errors.country?.message}>
                <Controller
                  name="country"
                  control={control}
                  defaultValue={selectedCountry}
                  render={({ field: { onChange } }) => (
                    <Select
                      components={{ MenuList }}
                      filterOption={createFilter({ ignoreAccents: false })}
                      {...register('country')}
                      className="profile-select"
                      classNamePrefix="profile"
                      isClearable
                      hideSelectedOptions={false}
                      options={countryOptions}
                      placeholder="Select country..."
                      theme={(theme) => customSelectTheme(theme)}
                      value={selectedCountry}
                      onChange={(val) => {
                        setSelectedCountry(val);
                        onChange(val);
                      }}
                    />
                  )}
                />
              </SelectContainer>

              {errors.country?.message && (
                <Error>{errors.country?.message}</Error>
              )}
            </div>

            <div>
              <InputLabel>
                <CityIcon />
                City
                <span>*</span>
              </InputLabel>
              <SelectContainer error={errors.city?.message}>
                <Controller
                  name="city"
                  control={control}
                  defaultValue={selectedCity}
                  render={({ field: { onChange } }) => (
                    <Select
                      components={{ MenuList }}
                      filterOption={createFilter({ ignoreAccents: false })}
                      {...register('city')}
                      className="profile-select"
                      classNamePrefix="profile"
                      isClearable
                      hideSelectedOptions={false}
                      options={cityOptions}
                      placeholder="Select city..."
                      theme={(theme) => customSelectTheme(theme)}
                      value={selectedCity}
                      onChange={(val) => {
                        setSelectedCity(val);
                        onChange(val);
                      }}
                    />
                  )}
                />
              </SelectContainer>
              {errors.city?.message && <Error>{errors.city?.message}</Error>}
            </div>
          </InputsContainer>
          <InputsContainer>
            <FormInput
              type="text"
              name="zipCode"
              label="Zip code"
              labelIconElement={<ZipCodeIcon />}
              placeholder="ZipCode"
              maxLength="5"
              register={register}
              error={errors.zipCode?.message}
              defaultValue={fetchedUserData.zipCode}
              onChange={handleNumberInput}
              required
            />
            <FormInput
              type="text"
              name="address"
              label="Address"
              labelIconElement={<AddressIcon />}
              placeholder="Address"
              register={register}
              error={errors.address?.message}
              defaultValue={fetchedUserData.address}
            />
          </InputsContainer>
        </FormSectionContainer>

        <FormSectionContainer>
          <FormSectionTitle>Company Information</FormSectionTitle>
          <InputsContainer>
            <FormInput
              type="text"
              name="companyName"
              label="Company"
              maxLength="60"
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
              maxLength="60"
              labelIconElement={<EmailIcon />}
              register={register}
              error={
                errors.companyEmail?.message || companyEmailError
                  ? 'Email already exists'
                  : null
              }
              defaultValue={fetchedUserData.company?.email}
              onChange={() => {
                setFocus('companyEmail');
                setCompanyEmailError(false);
              }}
            />
          </InputsContainer>
          <InputsContainer>
            <FormInput
              type="text"
              name="companyWebsite"
              label="Website"
              maxLength="60"
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
        {saveDataError && (
          <Toast
            status="fail"
            message="Oops, Failed to save your changes, Please try that again."
          />
        )}
      </FormContainer>
    </ProfileContainer>
  );
}

export default MyProfileWrapper;
