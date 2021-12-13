import React from 'react';
import { ReactComponent as AttorneyLogo } from 'assets/Shape.svg';
import { ReactComponent as PhotographerLogo } from 'assets/camera-svgrepo-com.svg';
import { ReactComponent as AgentLogo } from 'assets/agent-svgrepo-com.svg';
import { ReactComponent as CleaningLogo } from 'assets/clean-svgrepo-com.svg';
import { ReactComponent as HomeLogo } from 'assets/inspection-svgrepo-com.svg';
import { ReactComponent as InsuranceLogo } from 'assets/insurance-svgrepo-com.svg';
import {
  Button,
  Paragraph,
  PlusUpperSection,
  Header,
  PlusBottomSection,
  Item,
  ItemHeader,
  ItemIcon,
  ReverifiPlusContainer,
} from './reverifi-plus.styles';

/**
 * Home page reverifi-plus section.
 *
 * @return {JSX.Element}
 */
function ReverifiPlus() {
  return (
    <ReverifiPlusContainer>
      <PlusUpperSection>
        <Header>
          reverifi<span>+</span>
        </Header>
        <Paragraph>
          Search our network and find your supporting team to complete the
          process
        </Paragraph>
        <Button type="button">See More</Button>
      </PlusUpperSection>
      <PlusBottomSection>
        <Item>
          <ItemIcon>
            <AttorneyLogo />
          </ItemIcon>
          <ItemHeader>Attorney</ItemHeader>
        </Item>
        <Item>
          <ItemIcon>
            <PhotographerLogo />
          </ItemIcon>
          <ItemHeader>Photographer</ItemHeader>
        </Item>
        <Item>
          <ItemIcon>
            <AgentLogo />
          </ItemIcon>
          <ItemHeader>Agent</ItemHeader>
        </Item>
        <Item>
          <ItemIcon>
            <CleaningLogo />
          </ItemIcon>
          <ItemHeader>Cleaning Services</ItemHeader>
        </Item>
        <Item>
          <ItemIcon>
            <HomeLogo />
          </ItemIcon>
          <ItemHeader>Home Inspectors</ItemHeader>
        </Item>
        <Item>
          <ItemIcon>
            <InsuranceLogo />
          </ItemIcon>
          <ItemHeader>Insurance Provider</ItemHeader>
        </Item>
      </PlusBottomSection>
    </ReverifiPlusContainer>
  );
}

export default ReverifiPlus;
