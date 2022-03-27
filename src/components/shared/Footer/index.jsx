import { ReactComponent as Facebook } from 'assets/images/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/images/linkedin.svg';
import { ReactComponent as Youtube } from 'assets/images/youtube.svg';
import React from 'react';
import Button from '../Button';
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
} from './footer.styles';
import SupportInfo from './SupportInfo';

/**
 * Home page footer section.
 *
 * @return {JSX.Element}
 */
function Footer() {
  return (
    <>
      <SocialMediaIcons>
        <Facebook />
        <Instagram />
        <Youtube />
        <Linkedin />
      </SocialMediaIcons>
      <InfoWrapper>
        <SupportInfo />
        <InfoGroup>
          <InfoGroupHeader>Helpful Links</InfoGroupHeader>
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
          <InfoGroupHeader>Subscribe to our newsletter</InfoGroupHeader>
          <SubscribeInputWrapper>
            <Input
              placeholder="Enter email address"
              rightElement={
                <Button onClick={() => {}} ariaLabel="Subscribe">
                  Subscribe
                </Button>
              }
            />
          </SubscribeInputWrapper>
        </SubscribeWrapper>
      </InfoWrapper>
      <FooterWrapper>
        <p>
          Copyright © {new Date().getFullYear()} reverifi. All rights reserved.
        </p>
      </FooterWrapper>
    </>
  );
}

export default Footer;
