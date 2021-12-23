import React from 'react';
import { MapPin, Mail, Phone } from 'react-feather';
import { ReactComponent as Logo } from 'assets/logo.svg';
import {
  InfoGroup,
  ContactInfo,
  InfoGroupItem,
  EmailLink,
} from './footer.styles';

// eslint-disable-next-line react/function-component-definition
const SupportInfo = () => (
  <InfoGroup>
    <Logo />
    <ContactInfo>
      <MapPin />
      <InfoGroupItem to="/">714-427-1242</InfoGroupItem>
    </ContactInfo>
    <ContactInfo>
      <Mail />
      <EmailLink rel="noopener" href="mailto:support@example.com">
        support@example.com
      </EmailLink>
    </ContactInfo>
    <ContactInfo>
      <Phone />
      <InfoGroupItem to="/">319-764-9876</InfoGroupItem>
    </ContactInfo>
  </InfoGroup>
);

export default SupportInfo;
