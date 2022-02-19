/* eslint-disable prefer-template */
/* eslint-disable no-var */
import { ReactComponent as AddressIcon } from 'assets/icons/address.svg';
import avatarPlaceholder from 'assets/icons/agent-list-avatar-placeholder.svg';
import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phone-call.svg';
import Tooltip from 'components/shared/Tooltip';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPhoneNumber, toUpperCaseFirstLetter } from 'utils/helpers';
import {
  AgentPicture,
  ButtonsContainer,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CompanyName,
  CompanyNamePlaceholder,
  ContactButton,
  ContactEmail,
  ContactField,
  ContactInfoContainer,
  ContactProperty,
  ContactText,
  EmailTooltip,
  FooterButtonsContainer,
  HeartIcon,
  IconContainer as TooltipContainer,
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
  id,
  address,
  agentImg,
  agentName,
  companyName,
  email,
  phoneNumber,
}) {
  const navigate = useNavigate();

  return (
    <Card>
      <ImgContainer>
        <AgentPicture src={agentImg || avatarPlaceholder} />
      </ImgContainer>
      <CardContent>
        <CardHeader>
          <div>
            <Username>{toUpperCaseFirstLetter(agentName)}</Username>
            <CompanyName>
              {toUpperCaseFirstLetter(companyName) || (
                <CompanyNamePlaceholder />
              )}
            </CompanyName>
          </div>
          <ButtonsContainer>
            <RoundedButton ariaLabel="Favorite">
              <HeartIcon />
            </RoundedButton>
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
            <EmailTooltip hover>
              <Tooltip
                light
                text={email}
                arrowPosition="top"
                position={[2.5, 2]}
              />
              <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
            </EmailTooltip>
            <Tooltip
              text="Counter Offer"
              arrowPosition="top"
              position={[2.3, -3]}
            />
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
          <ContactButton onClick={() => navigate(`/agent-details/${id}`)}>
            More details
          </ContactButton>
          <FooterButtonsContainer>
            <ContactEmail href={`mailto:${email}`}>
              <TooltipContainer>
                <MailIcon />
              </TooltipContainer>
            </ContactEmail>
            <TooltipContainer>
              <PhoneIcon />
            </TooltipContainer>
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
  id: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
};

export default AgentCard;
