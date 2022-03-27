import { ReactComponent as AgentLogo } from 'assets/agent.svg';
import { ReactComponent as AttorneyLogo } from 'assets/attorney.svg';
import { ReactComponent as PhotographerLogo } from 'assets/camera.svg';
import { ReactComponent as CleaningLogo } from 'assets/clean.svg';
import { ReactComponent as HomeLogo } from 'assets/inspection.svg';
import { ReactComponent as InsuranceLogo } from 'assets/insurance.svg';
import React from 'react';
import {
  Header,
  Item,
  ItemHeader,
  ItemIcon,
  MainContainer,
  Paragraph,
  SecondSection,
  SeeMoreButton,
} from './reverifi-plus.styles';

/**
 * Home page reverifi-plus section.
 *
 * @return {JSX.Element}
 */
function ReverifiPlus() {
  return (
    <MainContainer>
      <div>
        <Header>
          reverifi<span>+</span>
        </Header>
        <Paragraph>
          Search our network and find your supporting team to complete the
          process
        </Paragraph>
        <SeeMoreButton type="button">See More </SeeMoreButton>
      </div>
      <SecondSection>
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
      </SecondSection>
    </MainContainer>
  );
}

export default ReverifiPlus;
