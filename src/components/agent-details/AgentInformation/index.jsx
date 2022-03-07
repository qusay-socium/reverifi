import { ReactComponent as AddressIcon } from 'assets/address.svg';
import { ReactComponent as CompanyName } from 'assets/company.svg';
import { ReactComponent as EmailIcon } from 'assets/email.svg';
import placeholderPhoto from 'assets/icons/agent-list-avatar-placeholder.svg';
import { ReactComponent as Facebook } from 'assets/images/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/images/linkedin.svg';
import { ReactComponent as Youtube } from 'assets/images/youtube.svg';
import { ReactComponent as LanguagesIcon } from 'assets/language.svg';
import { ReactComponent as PhoneIcon } from 'assets/phone.svg';
import { ReactComponent as ServiceAreaIcon } from 'assets/service-area.svg';
import { ReactComponent as CompanyWebsite } from 'assets/website.svg';
import SaveAndShareButtons from 'components/shared/SaveAndShareButtons';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { viewOrShareUserOrListing } from 'services/social-statistics';
import { getUserInfo } from 'services/user';
import { formatPhoneNumber, toUpperCaseFirstLetter } from 'utils/helpers';
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

  const fetchUserData = async () => {
    const user = await getUserInfo(id);
    setUserData(user);

    // add view to user
    await viewOrShareUserOrListing({ type: 'views', userId: id });
  };

  useEffectOnce(fetchUserData);

  return (
    <AgentInformationContainer>
      <AgentItemsContainer>
        <AgentSection>
          <ImageContainer>
            <StyledImg src={userData?.image || placeholderPhoto} />
            <SocialMediaIcons>
              {userData?.socials?.facebook && (
                <IconLinkWrapper
                  href={userData?.socials?.facebook}
                  target="_blank"
                >
                  <Facebook />
                </IconLinkWrapper>
              )}

              {userData?.socials?.instagram && (
                <IconLinkWrapper
                  href={userData?.socials?.instagram}
                  target="_blank"
                >
                  <Instagram />
                </IconLinkWrapper>
              )}

              {userData?.socials?.youtube && (
                <IconLinkWrapper
                  href={userData?.socials?.youtube}
                  target="_blank"
                >
                  <Youtube />
                </IconLinkWrapper>
              )}

              {userData?.socials?.linkedin && (
                <IconLinkWrapper
                  href={userData?.socials?.linkedin}
                  target="_blank"
                >
                  <Linkedin />
                </IconLinkWrapper>
              )}
            </SocialMediaIcons>
          </ImageContainer>
          <AgentBasicInformation>
            <ContactInfo>
              <AgentName>
                <h2>{toUpperCaseFirstLetter(userData?.user?.name) || ''}</h2>

                <SaveAndShareButtons userId={id} />
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
                <InfoValue>{userData?.languages?.join(', ')}</InfoValue>
              </InfoWrapper>
              <InfoWrapper>
                <InfoKey>
                  <ServiceAreaIcon />
                  <span>Service Area</span>
                </InfoKey>
                <InfoValue>{userData?.serviceAreas?.join(', ')}</InfoValue>
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
                      <InfoWrapper key={field[0]} companyInfoWrapper>
                        <InfoKey>
                          {companyInfoIcons?.[i - 1]}
                          <span>
                            {toUpperCaseFirstLetter(
                              field[0] === 'name' ? 'company' : field[0]
                            )}
                          </span>
                        </InfoKey>
                        <InfoValue>
                          {field[0] === 'name' ? (
                            field[1]
                          ) : (
                            <a
                              href={
                                field[0] === 'email'
                                  ? `mailto:${field[1]}`
                                  : field[1]
                              }
                            >
                              {field[1]}
                            </a>
                          )}
                        </InfoValue>
                      </InfoWrapper>
                    )
                )}
              </ContactInfo>
            </CompanyInformation>
          )}

          {userData?.aboutMe && (
            <AboutAgent>
              <h2>About Me</h2>
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
