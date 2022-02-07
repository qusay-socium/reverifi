/* eslint-disable prefer-template */
/* eslint-disable no-var */
import { ReactComponent as AddressIcon } from 'assets/icons/address.svg';
import avatarPlaceholder from 'assets/icons/agent-list-avatar-placeholder.svg';
import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone-call.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPhoneNumber, toUpperCaseFirstLetter } from 'utils/helpers';
import {
  AgentPicture,
  ButtonsContainer,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CompanyName,
  ContactButton,
  ContactEmail,
  ContactField,
  ContactInfoContainer,
  ContactProperty,
  ContactText,
  FooterButtonsContainer,
  HeartButton,
  HeartIcon,
  IconContainer,
  ImgContainer,
  LikeIcon,
  Line,
  PropertyIconContainer,
  PropertyText,
  RoundedButton,
  ShareIcon,
  Username,
} from './agent-card.styles';

/**
 * Agent Card.
 *
 * @param {Object} props             Props passed to AgentCard.
 * @param {string} props.address     Agent's address.
 * @param {string} props.agentImg    Agent's image source.
 * @param {string} props.agentName   Agent's name.
 * @param {string} props.companyName Agent's company name.
 * @param {string} props.email       Agent's email.
 * @param {number} props.phoneNumber Agent's contact number.
 *
 * @return {JSX.Element} The agent card holding all of the agent's information.
 */
function AgentCard({
  address,
  agentImg,
  agentName,
  companyName,
  email,
  phoneNumber,
}) {
  return (
    <Card>
      <ImgContainer>
        <AgentPicture src={agentImg || avatarPlaceholder} />
        <HeartButton ariaLabel="Favorite">
          <HeartIcon />
        </HeartButton>
      </ImgContainer>
      <CardContent>
        <CardHeader>
          <div>
            <Username>{toUpperCaseFirstLetter(agentName)}</Username>
            <CompanyName>
              {toUpperCaseFirstLetter(companyName) || ''}
            </CompanyName>
          </div>
          <ButtonsContainer>
            <RoundedButton ariaLabel="Like">
              <LikeIcon />
            </RoundedButton>
            <RoundedButton ariaLabel="Share">
              <ShareIcon />
            </RoundedButton>
          </ButtonsContainer>
        </CardHeader>
        <ContactInfoContainer>
          {phoneNumber && (
            <ContactField>
              <ContactProperty>
                <PropertyIconContainer>
                  <PhoneIcon />
                </PropertyIconContainer>
                <PropertyText>Phone</PropertyText>
              </ContactProperty>
              <ContactText>{formatPhoneNumber(phoneNumber)}</ContactText>
            </ContactField>
          )}

          <ContactField>
            <ContactProperty>
              <PropertyIconContainer>
                <MailIcon />
              </PropertyIconContainer>
              <PropertyText>Email</PropertyText>
            </ContactProperty>
            <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
          </ContactField>
          {address && (
            <ContactField>
              <ContactProperty>
                <PropertyIconContainer>
                  <AddressIcon />
                </PropertyIconContainer>
                <PropertyText>Address</PropertyText>
              </ContactProperty>
              <ContactText>
                {address?.zipCode} {address?.city}, {address?.country}
              </ContactText>
            </ContactField>
          )}
        </ContactInfoContainer>
        <Line />
        <CardFooter>
          <ContactButton>Contact</ContactButton>
          <FooterButtonsContainer>
            <ContactEmail href={`mailto:${email}`}>
              <IconContainer>
                <MailIcon />
              </IconContainer>
            </ContactEmail>
            <IconContainer>
              <PhoneIcon />
            </IconContainer>
          </FooterButtonsContainer>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

AgentCard.defaultProps = {
  address: null,
  agentImg: null,
  companyName: '',
  phoneNumber: '',
};

AgentCard.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    zipCode: PropTypes.string,
  }),
  agentImg: PropTypes.string,
  agentName: PropTypes.string.isRequired,
  companyName: PropTypes.string,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
};

export default AgentCard;
