import { ReactComponent as AddressIcon } from 'assets/address.svg';
import { ReactComponent as CompanyName } from 'assets/company.svg';
import { ReactComponent as EmailIcon } from 'assets/email.svg';
import { ReactComponent as Like } from 'assets/icons/agent-detailes-like.svg';
import placeholderPhoto from 'assets/icons/agent-list-avatar-placeholder.svg';
import { ReactComponent as EmptyLike } from 'assets/icons8-share.svg';
import { ReactComponent as Facebook } from 'assets/images/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/images/linkedin.svg';
import { ReactComponent as Youtube } from 'assets/images/youtube.svg';
import { ReactComponent as LanguagesIcon } from 'assets/language.svg';
import { ReactComponent as PhoneIcon } from 'assets/phone.svg';
import { ReactComponent as ServiceAreaIcon } from 'assets/service-area.svg';
import { ReactComponent as CompanyWebsite } from 'assets/website.svg';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserInfo } from 'services/user';
import {
  formatPhoneNumber,
  separateBy,
  toUpperCaseFirstLetter,
} from 'utils/helpers';
import ContactAgent from '../ContactAgent';
import {
  AboutAgent,
  AgentBasicInformation,
  AgentInformationContainer,
  AgentItemsContainer,
  AgentName,
  AgentSection,
  CompanyInformation,
  ContactInfo,
  IconLinkWrapper,
  IconWrapper,
  ImageContainer,
  InfoKey,
  InfoValue,
  InfoWrapper,
  SocialMediaIcons,
  StyledImg,
} from './agent-information.style';

const companyInfoIcons = [<CompanyName />, <EmailIcon />, <CompanyWebsite />];

/**
 * Agent Information section.
 *
 * @return {JSX.Element}
 */
function AgentInformation() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [likeActive, setLikeActive] = useState(false);

  const fetchUserData = async () => {
    const user = await getUserInfo(id);
    setUserData(user);
  };

  useEffectOnce(fetchUserData);

  return (
    <AgentInformationContainer>
      <AgentItemsContainer>
        <AgentSection>
          <ImageContainer>
            <StyledImg src={userData?.image || placeholderPhoto} />
            <SocialMediaIcons>
              <IconLinkWrapper
                href={userData?.socials?.facebook || ''}
                target="_blank"
              >
                <Facebook />
              </IconLinkWrapper>
              <IconLinkWrapper
                href={userData?.socials?.instagram || ''}
                target="_blank"
              >
                <Instagram />
              </IconLinkWrapper>
              <IconLinkWrapper
                href={userData?.socials?.youtube || ''}
                target="_blank"
              >
                <Youtube />
              </IconLinkWrapper>
              <IconLinkWrapper
                href={userData?.socials?.linkedin || ''}
                target="_blank"
              >
                <Linkedin />
              </IconLinkWrapper>
            </SocialMediaIcons>
          </ImageContainer>
          <AgentBasicInformation>
            <ContactInfo>
              <AgentName>
                <h2>{toUpperCaseFirstLetter(userData?.user?.name) || ''}</h2>
                <IconWrapper
                  onClick={() => setLikeActive(!likeActive)}
                  active={likeActive}
                >
                  <Like />
                  <EmptyLike />
                </IconWrapper>
              </AgentName>
              <InfoWrapper>
                <InfoKey>
                  <PhoneIcon />
                  <span>Phone</span>
                </InfoKey>
                <InfoValue>
                  {formatPhoneNumber(userData?.user?.phone)}
                </InfoValue>
              </InfoWrapper>
              <InfoWrapper>
                <InfoKey>
                  <EmailIcon />
                  <span>Email</span>
                </InfoKey>
                <InfoValue>
                  <a href={`mailto:${userData?.user?.email}`}>
                    {userData?.user?.email}
                  </a>
                </InfoValue>
              </InfoWrapper>
              <InfoWrapper>
                <InfoKey>
                  <AddressIcon />
                  <span>Address</span>
                </InfoKey>
                <InfoValue>
                  {userData?.zipCode} {userData?.city}, {userData?.country}
                </InfoValue>
              </InfoWrapper>
              <InfoWrapper>
                <InfoKey>
                  <LanguagesIcon />
                  <span>Languages</span>
                </InfoKey>
                <InfoValue>{separateBy(userData?.languages, ',')}</InfoValue>
              </InfoWrapper>
              <InfoWrapper>
                <InfoKey>
                  <ServiceAreaIcon />
                  <span>Service Area</span>
                </InfoKey>
                <InfoValue>{separateBy(userData?.serviceAreas, ',')}</InfoValue>
              </InfoWrapper>
            </ContactInfo>
          </AgentBasicInformation>
        </AgentSection>
        <AgentSection>
          {userData?.company && (
            <CompanyInformation>
              <ContactInfo>
                <h2>Company Information</h2>
                {Object.entries(userData?.company).map(
                  (field, i) =>
                    field[0] !== 'id' && (
                      <InfoWrapper key={field[0]} company>
                        <InfoKey>
                          {companyInfoIcons?.[i - 1]}
                          <span>
                            {toUpperCaseFirstLetter(
                              field[0] === 'name' ? 'company' : field[0]
                            )}
                          </span>
                        </InfoKey>
                        <InfoValue>{field[1]}</InfoValue>
                      </InfoWrapper>
                    )
                )}
              </ContactInfo>
            </CompanyInformation>
          )}

          {userData?.aboutMe && (
            <AboutAgent>
              <h3>About Me</h3>
              <p>{userData?.aboutMe}</p>
            </AboutAgent>
          )}
        </AgentSection>
      </AgentItemsContainer>
      <ContactAgent name={userData.user?.name} />
    </AgentInformationContainer>
  );
}

export default AgentInformation;
