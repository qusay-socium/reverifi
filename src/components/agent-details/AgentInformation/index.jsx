import React from 'react';
import AgentPhoto from 'assets/agent-photo.png';
import { ReactComponent as Facebook } from 'assets/images/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/instagram.svg';
import { ReactComponent as Like } from 'assets/like.svg';
import { ReactComponent as Linkedin } from 'assets/images/linkedin.svg';
import { ReactComponent as Youtube } from 'assets/images/youtube.svg';
import { agentData, companyData, aboutText, agentName } from './data';
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
  ImageContainer,
  InfoKey,
  InfoValue,
  InfoWrapper,
  SocialMediaIcons,
  StyledImg,
} from './agent-information.style';

/**
 * Agent Information section.
 *
 * @return {JSX.Element}
 */
function AgentInformation() {
  return (
    <AgentInformationContainer>
      <AgentItemsContainer>
        <AgentSection>
          <ImageContainer>
            <StyledImg src={AgentPhoto} />
            <SocialMediaIcons>
              <Facebook />
              <Instagram />
              <Youtube />
              <Linkedin />
            </SocialMediaIcons>
          </ImageContainer>
          <AgentBasicInformation>
            <ContactInfo>
              <AgentName>
                <h2>{agentName}</h2>
                <Like />
              </AgentName>
              {agentData.map(({ key, value, Icon }) => (
                <InfoWrapper key={key}>
                  <InfoKey>
                    <Icon />
                    <span>{key}</span>
                  </InfoKey>
                  <InfoValue>{value}</InfoValue>
                </InfoWrapper>
              ))}
            </ContactInfo>
          </AgentBasicInformation>
        </AgentSection>

        <AgentSection>
          <CompanyInformation>
            <ContactInfo>
              <h2>Company Information</h2>
              {companyData.map(({ key, value, Icon }) => (
                <InfoWrapper key={key}>
                  <InfoKey>
                    <Icon />
                    <span>{key}</span>
                  </InfoKey>
                  <InfoValue>{value}</InfoValue>
                </InfoWrapper>
              ))}
            </ContactInfo>
          </CompanyInformation>
          <AboutAgent>
            <h3>About Me</h3>
            <p>{aboutText}</p>
          </AboutAgent>
        </AgentSection>
      </AgentItemsContainer>
      <ContactAgent />
    </AgentInformationContainer>
  );
}

export default AgentInformation;
