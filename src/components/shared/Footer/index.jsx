import { ReactComponent as Facebook } from 'assets/images/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/images/linkedin.svg';
import { ReactComponent as Youtube } from 'assets/images/youtube.svg';
import React from 'react';
import Input from '../Input';
import {
  FooterWrapper,
  InfoGroup,
  InfoGroupHeader,
  InfoGroupItem,
  InfoWrapper,
  SocialMediaIcons,
  SubscribeInputWrapper,
  SubscribeWrapper,
  Button,
} from './footer.styles';
import SupportInfo from './SupportInfo';

/**
 * Home page footer section.
 *
 * @return {JSX.Element}
 */
// eslint-disable-next-line react/function-component-definition
const Footer = () => (
  <div>
    <SocialMediaIcons>
      <Facebook />
      <Instagram />
      <Youtube />
      <Linkedin />
    </SocialMediaIcons>
    <InfoWrapper>
      <SupportInfo />
      <InfoGroup>
        <InfoGroupHeader>Helpful Link</InfoGroupHeader>
        <InfoGroupItem to="/">Sign in</InfoGroupItem>
        <InfoGroupItem to="/">Support</InfoGroupItem>
        <InfoGroupItem to="/">FAQs</InfoGroupItem>
      </InfoGroup>
      <InfoGroup>
        <InfoGroupHeader>Company</InfoGroupHeader>
        <InfoGroupItem to="/">About Us</InfoGroupItem>
        <InfoGroupItem to="/">Privacy</InfoGroupItem>
        <InfoGroupItem to="/">Term of use</InfoGroupItem>
        <InfoGroupItem to="/">Accessibility</InfoGroupItem>
      </InfoGroup>
      <SubscribeWrapper>
        <InfoGroupHeader>Subscribe to our Newsletter</InfoGroupHeader>
        <SubscribeInputWrapper>
          <Input
            size="sm"
            placeholder="Subscribe to our Newsletter"
            rightElement={<Button>Subscribe</Button>}
          />
        </SubscribeInputWrapper>
      </SubscribeWrapper>
    </InfoWrapper>
    <FooterWrapper>
      <p>Copyright © 2021 Reverifi. All rights reserved</p>
    </FooterWrapper>
  </div>
);

export default Footer;