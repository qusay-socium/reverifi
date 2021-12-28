import React from 'react';
import AgentPhoto from 'assets/agent-photo.png';
import { ReactComponent as Facebook } from 'assets/images/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/instagram.svg';
import { ReactComponent as Like } from 'assets/like.svg';
import { ReactComponent as Linkedin } from 'assets/images/linkedin.svg';
import { ReactComponent as Youtube } from 'assets/images/youtube.svg';
import { agentData, companyData, aboutText } from './data';
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
function AgentDetails() {
  return (
    <AgentInformationContainer>
      <AgentItemsContainer>
        <AgentSection>
          <ImageContainer>
            <StyledImg src={AgentPhoto} width="300" />
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
                <span>John Doe</span>
                <Like />
              </AgentName>
              {agentData.map((info) => (
                <InfoWrapper key={info.key}>
                  <InfoKey>
                    <info.icon />
                    <span>{info.key}</span>
                  </InfoKey>
                  <InfoValue>
                    <span>{info.value}</span>
                  </InfoValue>
                </InfoWrapper>
              ))}
            </ContactInfo>
          </AgentBasicInformation>
        </AgentSection>

        <AgentSection>
          <CompanyInformation>
            <ContactInfo>
              <p>Company Information</p>
              {companyData.map((info) => (
                <InfoWrapper key={info.key}>
                  <InfoKey>
                    <info.icon />
                    <span>{info.key}</span>
                  </InfoKey>
                  <InfoValue>
                    <span>{info.value}</span>
                  </InfoValue>
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

export default AgentDetails;
