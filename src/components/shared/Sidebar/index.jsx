import { ReactComponent as Achievements } from 'assets/icons/achievements.svg';
import { ReactComponent as Dashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as List } from 'assets/icons/list.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Saved } from 'assets/icons/saved.svg';
import { ReactComponent as Transaction } from 'assets/icons/transaction.svg';
import { ReactComponent as UserProfile } from 'assets/icons/user-profile.svg';
import { ReactComponent as UserRole } from 'assets/icons/user-roles.svg';
import { useUser } from 'contexts/UserContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LeftArrowIcon,
  LinkTitle,
  LogoutLink,
  MenuArrow,
  MenuIconContainer,
  MenuItem,
  MenuItemsContainer,
  MenuLink,
  RightArrowIcon,
} from './sidebar.styles';

/**
 * Side menu.
 *
 * @return {JSX.Element}
 */
function Sidebar() {
  const { isLoggedIn, logout } = useUser();
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState(' ');

  return (
    <MenuItemsContainer isCollapsed={isCollapsed} isLoggedIn={isLoggedIn}>
      <MenuArrow onClick={() => setIsCollapsed(!isCollapsed)}>
        <MenuIconContainer isCollapsed={isCollapsed}>
          {isCollapsed ? <LeftArrowIcon /> : <RightArrowIcon />}
        </MenuIconContainer>
      </MenuArrow>
      <MenuLink isCollapsed={isCollapsed} to="/dashboard">
        <MenuItem type="button">
          <Dashboard />
        </MenuItem>
        <LinkTitle>Dashboard</LinkTitle>
      </MenuLink>
      <MenuLink isCollapsed={isCollapsed} to="/my-roles">
        <MenuItem type="button">
          <UserRole />
        </MenuItem>
        <LinkTitle>My Roles</LinkTitle>
      </MenuLink>
      <MenuLink isCollapsed={isCollapsed} to="/my-listings">
        <MenuItem type="button">
          <List />
        </MenuItem>
        <LinkTitle>My Listings</LinkTitle>
      </MenuLink>
      <MenuLink isCollapsed={isCollapsed} to="/transaction">
        <MenuItem type="button">
          <Transaction />
        </MenuItem>
        <LinkTitle>Transaction</LinkTitle>
      </MenuLink>
      <MenuLink isCollapsed={isCollapsed} to="/saved">
        <MenuItem type="button">
          <Saved />
        </MenuItem>
        <LinkTitle>Saved</LinkTitle>
      </MenuLink>
      <MenuLink isCollapsed={isCollapsed} to="/achievements">
        <MenuItem type="button">
          <Achievements />
        </MenuItem>
        <LinkTitle>Achievements</LinkTitle>
      </MenuLink>
      <MenuLink isCollapsed={isCollapsed} to="/my-profile">
        <MenuItem type="button">
          <UserProfile />
        </MenuItem>
        <LinkTitle>My Profile</LinkTitle>
      </MenuLink>

      <LogoutLink
        onClick={() => {
          logout();
          navigate('/');
        }}
        isCollapsed={isCollapsed}
      >
        <MenuItem type="button">
          <Logout />
        </MenuItem>
        <LinkTitle>Log Out</LinkTitle>
      </LogoutLink>
    </MenuItemsContainer>
  );
}

export default Sidebar;
