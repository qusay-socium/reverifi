import avatar from 'assets/images/avatar.svg';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';
import { ReactComponent as SettingIcon } from 'assets/menu-setting.svg';
import { ReactComponent as DashboardIcon } from 'assets/my-dashboard.svg';
import { ReactComponent as NotificationIcon } from 'assets/notification.svg';
import { ReactComponent as SavedListingsIcon } from 'assets/saved-listings.svg';
import { ReactComponent as SignOut } from 'assets/sign-out.svg';
import Menu from 'components/shared/Menu';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Dashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as List } from 'assets/icons/list.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Saved } from 'assets/icons/saved.svg';
import { ReactComponent as Transaction } from 'assets/icons/transaction.svg';
import { ReactComponent as UserProfile } from 'assets/icons/user-profile.svg';
import { ReactComponent as UserRole } from 'assets/icons/user-roles.svg';
import {
  BroadNavContainer,
  Logo,
  MenuIcon,
  MenuItem,
  UserImage,
  MenuTopWrapper,
  MenuWrapper,
  NarrowNavContainer,
  NavItemsContainer,
  NavLinksContainer,
  PointsWrapper,
  SignInButton,
  SignUpButton,
  UserControlSectionWrapper,
  UserNavControlContainer,
  UserNavRegContainer,
  ExpandableContainer,
  Nav,
  ExpandableMenuItem,
  ExpandableMenuLink,
  Container,
  CloseMenuIcon,
  NavLink,
} from './navbar.styles';
import { LineSeparator } from '../Tabs/tabs.styles';

/**
 * Home page header section.
 *
 * @return {JSX.Element}
 */
function Navbar() {
  const navigate = useNavigate();
  const { setUserInfo, userInfo, isLoggedIn, logout } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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

  useEffect(() => {
    if (userInfo?.points === 0) {
      setUserInfo({
        ...userInfo,
        points: userInfo?.points + 30,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <Nav>
      <NavContainer>
        {!isExpanded ? (
          <MenuIcon onClick={() => setIsExpanded(true)} />
        ) : (
          <CloseMenuIcon onClick={() => setIsExpanded(false)} />
        )}
        <Logo onClick={() => navigate('/')} />
        <NavItemsContainer>
          <NavLinksContainer>
            <NavLink onClick={() => navigate('/dashboard/how-we-work')}>
              How We Work
            </NavLink>
            <NavLink onClick={() => navigate('/agent-list')}>
              Find an Agent
            </NavLink>
            <NavLink onClick={() => navigate('/')}>Knowledge Center</NavLink>
          </NavLinksContainer>
          {isLoggedIn ? (
            <UserNavControlContainer>
              <UserControlSectionWrapper
                ref={clickRef}
                onClick={handleOpenMenu}
              >
                <UserImage src={userInfo?.image || avatar} />
                <span>{userInfo?.name}</span>
                <ChevronDown />
              </UserControlSectionWrapper>
              <Menu
                isOpen={isOpen}
                anchorRef={clickRef}
                onClose={handelCloseMenu}
                isSticky
              >
                <MenuWrapper>
                  <PointsWrapper>
                    <NotificationIcon />
                    <span>{userInfo?.points}</span> Points
                  </PointsWrapper>
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
      <ExpandableContainer isExpanded={isExpanded}>
        <ExpandableMenuLink isCollapsed={isExpanded} to="/dashboard">
          <ExpandableMenuItem>
            <Dashboard />
            <h4>DashBoard</h4>
          </ExpandableMenuItem>
        </ExpandableMenuLink>

        <ExpandableMenuLink isCollapsed={isExpanded} to="/my-roles">
          <ExpandableMenuItem>
            <UserRole />
            <h4>My Roles</h4>
          </ExpandableMenuItem>
        </ExpandableMenuLink>

        <ExpandableMenuLink isCollapsed={isExpanded} to="/my-listings">
          <ExpandableMenuItem>
            <List />
            <h4>List Properties</h4>
          </ExpandableMenuItem>
        </ExpandableMenuLink>

        <ExpandableMenuLink isCollapsed={isExpanded} to="/transaction">
          <ExpandableMenuItem>
            <Transaction />
            <h4>Transaction</h4>
          </ExpandableMenuItem>
        </ExpandableMenuLink>

        <ExpandableMenuLink isCollapsed={isExpanded} to="/saved">
          <ExpandableMenuItem>
            <Saved />
            <h4>Saved</h4>
          </ExpandableMenuItem>
        </ExpandableMenuLink>

        <ExpandableMenuLink isCollapsed={isExpanded} to="/my-profile1">
          <ExpandableMenuItem>
            <UserProfile />
            <h4>My profile</h4>
          </ExpandableMenuItem>
        </ExpandableMenuLink>

        <LineSeparator />

        <Container to="/my-profile">
          <ExpandableMenuItem>
            <h4>
              <a href="/dashboard/how-we-work">How we Work</a>
            </h4>
          </ExpandableMenuItem>
        </Container>

        <Container to="/my-profile">
          <ExpandableMenuItem>
            <h4>
              <a href="/agent-list">Find an Agent</a>
            </h4>
          </ExpandableMenuItem>
        </Container>

        <Container to="/my-profile">
          <ExpandableMenuItem>
            <h4>
              <a href="/">Knowledge center</a>
            </h4>
          </ExpandableMenuItem>
        </Container>

        {isLoggedIn && (
          <>
            <LineSeparator />
            <Container>
              <ExpandableMenuItem
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                padding
              >
                <Logout />
                <h4>Log Out</h4>
              </ExpandableMenuItem>
            </Container>
          </>
        )}
      </ExpandableContainer>
    </Nav>
  );
}

export default Navbar;
