import { ReactComponent as AddressIcon } from 'assets/icons/address.svg';
import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import Button from 'components/shared/Button';
import PropTypes from 'prop-types';
import React from 'react';
import {
  AgentPicture,
  ButtonsContainer,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CompanyName,
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
  address: { city, country, zipCode },
  agentImg,
  agentName,
  companyName,
  email,
  phoneNumber,
}) {
  return (
    <Card>
      <ImgContainer>
        <AgentPicture src={agentImg} />
        <HeartButton ariaLabel="Favorite" onClick={() => {}}>
          <HeartIcon />
        </HeartButton>
      </ImgContainer>
      <CardContent>
        <CardHeader>
          <div>
            <Username>{agentName}</Username>
            <CompanyName>{companyName}</CompanyName>
          </div>
          <ButtonsContainer>
            <RoundedButton ariaLabel="Like" onClick={() => {}}>
              <LikeIcon />
            </RoundedButton>
            <RoundedButton ariaLabel="Share" onClick={() => {}}>
              <ShareIcon />
            </RoundedButton>
          </ButtonsContainer>
        </CardHeader>
        <ContactInfoContainer>
          <ContactField>
            <ContactProperty>
              <PropertyIconContainer>
                <PhoneIcon />
              </PropertyIconContainer>
              <PropertyText>Phone</PropertyText>
            </ContactProperty>
            <ContactText>{phoneNumber}</ContactText>
          </ContactField>
          <ContactField>
            <ContactProperty>
              <PropertyIconContainer>
                <MailIcon />
              </PropertyIconContainer>
              <PropertyText>Email</PropertyText>
            </ContactProperty>
            <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
          </ContactField>
          <ContactField>
            <ContactProperty>
              <PropertyIconContainer>
                <AddressIcon />
              </PropertyIconContainer>
              <PropertyText>Address</PropertyText>
            </ContactProperty>
            <ContactText>
              {zipCode} {city}, {country}
            </ContactText>
          </ContactField>
        </ContactInfoContainer>
        <Line />
        <CardFooter>
          <Button onClick={() => {}}>Contact</Button>
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

AgentCard.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    zipCode: PropTypes.string,
  }).isRequired,
  agentImg: PropTypes.string.isRequired,
  agentName: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default AgentCard;
