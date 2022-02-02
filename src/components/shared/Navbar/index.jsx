import { ReactComponent as SettingsIcon } from 'assets/icons/account-settings.svg';
import { ReactComponent as DashboardMenu } from 'assets/icons/dashboard-menu.svg';
import { ReactComponent as SavedListing } from 'assets/icons/saved-listing.svg';
import { ReactComponent as SavedSearches } from 'assets/icons/saved-searches.svg';
import { ReactComponent as SignOut } from 'assets/icons/sign-out.svg';
import { ReactComponent as Avatar } from 'assets/images/avatar.svg';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import Menu from 'components/shared/Menu';
import { useUser } from 'contexts/UserContext';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BroadNavContainer,
  Logo,
  LogoutWrapper,
  MenuIcon,
  MenuItem,
  MenuLine,
  MenuTopWrapper,
  MenuWrapper,
  NarrowNavContainer,
  NavControlSection,
  NavItemsContainer,
  NavLinksContainer,
  SignInButton,
  SignUpButton,
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
  const { userInfo: { name } = {}, isLoggedIn, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const clickRef = useRef(null);

  const NavContainer = isLoggedIn ? BroadNavContainer : NarrowNavContainer;

  /**
   * Handle open menu.
   */
  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  /**
   * Handle close menu.
   */
  const handelCloseMenu = () => {
    setIsOpen(false);
  };

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
            <UserControlSectionWrapper ref={clickRef} onClick={handleOpenMenu}>
              <Avatar />
              {name}
              <ChevronDown />
            </UserControlSectionWrapper>
            <Menu
              isOpen={isOpen}
              anchorRef={clickRef}
              onClose={handelCloseMenu}
              isSticky
            >
              <MenuWrapper>
                <MenuTopWrapper>
                  <MenuItem type="button">
                    <SavedListing />
                    Saved listings
                  </MenuItem>
                  <MenuItem type="button">
                    <SavedSearches />
                    Saved agents
                  </MenuItem>
                  <MenuItem type="button">
                    <DashboardMenu />
                    Dashboard
                  </MenuItem>
                  <MenuItem type="button">
                    <SettingsIcon />
                    Account settings
                  </MenuItem>
                </MenuTopWrapper>

                <MenuLine />

                <LogoutWrapper type="button" onClick={logout}>
                  <SignOut />
                  Sign Out
                </LogoutWrapper>
              </MenuWrapper>
            </Menu>
          </UserNavControlContainer>
        ) : (
          <UserNavRegContainer>
            <SignInButton onClick={() => navigate('login')}>
              Sign In
            </SignInButton>
            <SignUpButton onClick={() => navigate('sign-up')}>
              Join Now
            </SignUpButton>
          </UserNavRegContainer>
        )}
      </NavItemsContainer>
    </NavContainer>
  );
}

export default Navbar;
