import { ReactComponent as Avatar } from 'assets/images/avatar.svg';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useUser } from 'contexts/UserContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import {
  BroadNavContainer,
  Logo,
  MenuIcon,
  NarrowNavContainer,
  NavControlSection,
  NavItemsContainer,
  NavLinksContainer,
  NotificationBell,
  SignInButton,
  StyledInput,
  StyledInputGroup,
  UserControlSectionWrapper,
  UserNavControlContainer,
  UserNavRegContainer,
} from './navbar.styles';

/**
 * Home page header section.
 *
 * @return {JSX.Element}
 */
function Navbar() {
  const navigate = useNavigate();
  const { userInfo: { name } = {}, isLoggedIn } = useUser();

  const NavContainer = isLoggedIn ? BroadNavContainer : NarrowNavContainer;

  return (
    <NavContainer>
      <MenuIcon />
      <Logo onClick={() => navigate('/')} />

      <NavItemsContainer>
        <NavLinksContainer>
          <span>How we Work</span>
          <span>Find an Agent</span>
          <span>Knowledge Center</span>
        </NavLinksContainer>

        {isLoggedIn ? (
          <UserNavControlContainer>
            <NavControlSection>
              <StyledInputGroup>
                <SearchIcon />
                <StyledInput type="text" placeholder="Search for Property" />
              </StyledInputGroup>
            </NavControlSection>
            <NavControlSection>
              <NotificationBell />
            </NavControlSection>
            <UserControlSectionWrapper>
              <Avatar />
              {name}
              <ChevronDown />
            </UserControlSectionWrapper>
          </UserNavControlContainer>
        ) : (
          <UserNavRegContainer>
            <SignInButton type="button" onClick={() => navigate('login')}>
              Sign In
            </SignInButton>
            <Button onClick={() => navigate('sign-up')}>Join Now</Button>
          </UserNavRegContainer>
        )}
      </NavItemsContainer>
    </NavContainer>
  );
}

export default Navbar;
