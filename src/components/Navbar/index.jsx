import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as JoinNow } from 'assets/images/joinNow.svg';
import { ReactComponent as SearchIcon } from 'assets/images/searchIcon.svg';
import UserControlSection from './UserControlSection';

import {
  BroadNavContainer,
  Logo,
  MenuIcon,
  NarrowNavContainer,
  NavControlSection,
  NavItemsContainer,
  NavLinksContainer,
  NotificationBell,
  StyledInput,
  StyledInputGroup,
  TransparentButton,
  UserNavControlContainer,
  UserNavRegContainer,
} from './navbar.styles';

/**
 * Home page header section.
 *
 * @return {JSX.Element}
 */
function Navbar({ user, setUser }) {
  const NavContainer = user ? BroadNavContainer : NarrowNavContainer;
  return (
    <NavContainer user={user}>
      <MenuIcon />
      <Logo />

      <NavItemsContainer>
        <NavLinksContainer>
          <span>How we Work</span>
          <span>Find an Agent</span>
          <span>Knowledge Center</span>
        </NavLinksContainer>

        {user ? (
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
            <UserControlSection setUser={setUser} />
          </UserNavControlContainer>
        ) : (
          <UserNavRegContainer>
            <TransparentButton type="button" onClick={() => setUser(true)}>
              Sign In
            </TransparentButton>
            <JoinNow />
          </UserNavRegContainer>
        )}
      </NavItemsContainer>
    </NavContainer>
  );
}

Navbar.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.bool,
};

Navbar.defaultProps = {
  user: false,
};

export default Navbar;
