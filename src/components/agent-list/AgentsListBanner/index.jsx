import DesktopFilterSection from 'components/agent-list/DesktopFilterSection';
import MobileFilterSection from 'components/agent-list/MobileFilterSection';
import React from 'react';
import {
  BannerContainer,
  Container,
  Heading,
} from './agents-list-banner.styles';

/**
 * Component showing the Banner in the the agent's page.
 *
 * @return {JSX.Element} Banner holding a paragraph and a Filter section.
 */
function AgentsListBanner() {
  return (
    <Container>
      <BannerContainer>
        <Heading>Connect with your agent on reverifi</Heading>
        <DesktopFilterSection />
        <MobileFilterSection />
      </BannerContainer>
    </Container>
  );
}

export default AgentsListBanner;
