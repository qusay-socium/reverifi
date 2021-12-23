import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Mail, MapPin, Phone } from 'react-feather';
import {
  ContactInfo,
  EmailLink,
  InfoGroup,
  InfoGroupItem,
} from './footer.styles';

function SupportInfo() {
  return (
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
}

export default SupportInfo;
