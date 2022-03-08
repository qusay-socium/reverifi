import { ReactComponent as Avatar } from 'assets/images/avatar.svg';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';
import { ReactComponent as SettingIcon } from 'assets/menu-setting.svg';
import { ReactComponent as DashboardIcon } from 'assets/my-dashboard.svg';
import { ReactComponent as SavedListingsIcon } from 'assets/saved-listings.svg';
import { ReactComponent as SignOut } from 'assets/sign-out.svg';
import Menu from 'components/shared/Menu';
import { useUser } from 'contexts/UserContext';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BroadNavContainer,
  Logo,
  MenuIcon,
  MenuItem,
  MenuTopWrapper,
  MenuWrapper,
  NarrowNavContainer,
  NavItemsContainer,
  NavLinksContainer,
  SignInButton,
  SignUpButton,
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
          <a href="/dashboard/how-we-work">How We Work</a>
          <a href="/agent-list">Find an Agent</a>
          <a href="/">Knowledge Center</a>
        </NavLinksContainer>
        {isLoggedIn ? (
          <UserNavControlContainer>
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
                  <MenuItem filled="true" onClick={() => navigate('/saved')}>
                    <SavedListingsIcon />
                    Saved
                  </MenuItem>
                  <MenuItem
                    filled="true"
                    onClick={() => navigate('/dashboard')}
                  >
                    <DashboardIcon />
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    stroke="true"
                    onClick={() => navigate('/my-profile')}
                  >
                    <SettingIcon />
                    Account settings
                  </MenuItem>
                  <MenuItem
                    stroke="true"
                    type="button"
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                  >
                    <SignOut />
                    Log Out
                  </MenuItem>
                </MenuTopWrapper>
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
