import avatarPlaceholder from 'assets/icons/agent-list-avatar-placeholder.svg';
import { ReactComponent as MailIcon } from 'assets/icons/profile-email.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/profile-phone.svg';
import {
  Card,
  CardContent,
  CompanyName,
  ContactEmail,
  ContactField,
  ContactInfoContainer,
  ContactText,
  ImgContainer,
  PropertyIconContainer,
  Username,
} from 'components/transaction/AgentCard/agent-card.styles';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPhoneNumber, toUpperCaseFirstLetter } from 'utils/helpers';

/**
 * Agent Card.
 *
 * @param {Object} props Props passed to AgentCard.
 * @param {string} props.agentImg Agent's image source.
 * @param {string} props.agentName Agent's name.
 * @param {string} props.companyName Agent's company name.
 * @param {string} props.email Agent's email.
 * @param {string} props.phoneNumber Agent's phone number.
 *
 * @return {JSX.Element} The agent card holding all of the agent's information.
 */
function AgentCard({ agentImg, agentName, companyName, email, phoneNumber }) {
  return (
    <Card>
      <ImgContainer image={agentImg || avatarPlaceholder} />
      <CardContent>
        <Username>{toUpperCaseFirstLetter(agentName)}</Username>
        <CompanyName>
          {toUpperCaseFirstLetter(companyName) || 'Agent'}
        </CompanyName>

        <ContactInfoContainer>
          <ContactField>
            <PropertyIconContainer>
              <MailIcon />
            </PropertyIconContainer>
            <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
          </ContactField>
          {phoneNumber && (
            <ContactField>
              <PropertyIconContainer>
                <PhoneIcon />
              </PropertyIconContainer>
              <ContactText>{formatPhoneNumber(phoneNumber)}</ContactText>
            </ContactField>
          )}
        </ContactInfoContainer>
      </CardContent>
    </Card>
  );
}

AgentCard.defaultProps = {
  agentImg: null,
  companyName: '',
  phoneNumber: '',
};

AgentCard.propTypes = {
  agentImg: PropTypes.string,
  agentName: PropTypes.string.isRequired,
  companyName: PropTypes.string,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
};

export default AgentCard;
