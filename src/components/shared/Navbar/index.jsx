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
          <a href="/">How we Work</a>
          <a href="/agent-list">Find an Agent</a>
          <a href="/">Knowledge Center</a>
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
              <span>{name}</span>
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
                  <MenuItem>Saved listings</MenuItem>
                  <MenuItem>Saved agents</MenuItem>
                  <MenuItem>Dashboard</MenuItem>
                  <MenuItem onClick={() => navigate('/my-profile')}>
                    Account settings
                  </MenuItem>
                </MenuTopWrapper>

                <MenuLine />

                <LogoutWrapper
                  type="button"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  Sign Out
                </LogoutWrapper>
              </MenuWrapper>
            </Menu>
          </UserNavControlContainer>
        ) : (
          <UserNavRegContainer>
            <SignInButton onClick={() => navigate('/login')}>
              Sign In
            </SignInButton>
            <SignUpButton onClick={() => navigate('/sign-up')}>
              Join Now
            </SignUpButton>
          </UserNavRegContainer>
        )}
      </NavItemsContainer>
    </NavContainer>
  );
}

export default Navbar;
