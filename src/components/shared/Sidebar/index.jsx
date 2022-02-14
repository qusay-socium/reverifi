import { ReactComponent as Dashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as List } from 'assets/icons/list.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Saved } from 'assets/icons/saved.svg';
import { ReactComponent as Settings } from 'assets/icons/settings.svg';
import { ReactComponent as Transaction } from 'assets/icons/transaction.svg';
import { ReactComponent as UserProfile } from 'assets/icons/user-profile.svg';
import { ReactComponent as UserRole } from 'assets/icons/user-roles.svg';
import { ReactComponent as LeftArrow } from 'assets/visit-left-arrow.svg';
import { ReactComponent as RightArrow } from 'assets/visit-right-arrow.svg';
import { useUser } from 'contexts/UserContext';
import React, { useState } from 'react';
import {
  LinkTitle,
  MenuIconContainer,
  MenuItem,
  MenuItemsContainer,
  MenuLink,
} from './sidebar.styles';

/**
 * Side menu.
 *
 * @return {JSX.Element}
 */
function Sidebar() {
  const { isLoggedIn } = useUser();

  const [isCollapsed, setIsCollapsed] = useState(' ');

  return (
    <MenuItemsContainer isCollapsed={isCollapsed} isLoggedIn={isLoggedIn}>
      <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}>
        <MenuIconContainer isCollapsed={isCollapsed}>
          {isCollapsed ? <LeftArrow /> : <RightArrow />}
        </MenuIconContainer>
      </MenuItem>
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
      <MenuLink isCollapsed={isCollapsed} to="/list-properties<">
        <MenuItem type="button">
          <List />
        </MenuItem>
        <LinkTitle>List Properties</LinkTitle>
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
      <MenuLink isCollapsed={isCollapsed} to="/my-profile">
        <MenuItem type="button">
          <UserProfile />
        </MenuItem>
        <LinkTitle>My Profile</LinkTitle>
      </MenuLink>
      <MenuLink isCollapsed={isCollapsed} to="/settings">
        <MenuItem type="button">
          <Settings />
        </MenuItem>
        <LinkTitle>Settings</LinkTitle>
      </MenuLink>
      <MenuLink isCollapsed={isCollapsed} to="/logout">
        <MenuItem type="button">
          <Logout />
        </MenuItem>
        <LinkTitle>Log Out</LinkTitle>
      </MenuLink>
    </MenuItemsContainer>
  );
}

export default Sidebar;
