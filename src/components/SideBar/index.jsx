import { ReactComponent as Dashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as List } from 'assets/icons/list.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as Saved } from 'assets/icons/saved.svg';
import { ReactComponent as Settings } from 'assets/icons/settings.svg';
import { ReactComponent as Transaction } from 'assets/icons/transaction.svg';
import { ReactComponent as UserProfile } from 'assets/icons/user-profile.svg';
import { ReactComponent as UserRole } from 'assets/icons/user-roles.svg';
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

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <MenuItemsContainer isCollapsed={isCollapsed} isLoggedIn={isLoggedIn}>
      <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}>
        <MenuIconContainer>
          <Menu />
        </MenuIconContainer>
      </MenuItem>
      <MenuLink to="/test-side-bar">
        <MenuItem type="button">
          <Dashboard />
        </MenuItem>
        <LinkTitle>Dashboard</LinkTitle>
      </MenuLink>
      <MenuLink to="/test-side-bar/My-Roles">
        <MenuItem type="button">
          <UserRole />
        </MenuItem>
        <LinkTitle>My Roles</LinkTitle>
      </MenuLink>
      <MenuLink to="/test-side-bar/List-Properties<">
        <MenuItem type="button">
          <List />
        </MenuItem>
        <LinkTitle>List Properties</LinkTitle>
      </MenuLink>
      <MenuLink to="/test-side-bar/Transaction">
        <MenuItem type="button">
          <Transaction />
        </MenuItem>
        <LinkTitle>Transaction</LinkTitle>
      </MenuLink>
      <MenuLink to="/test-side-bar/Saved">
        <MenuItem type="button">
          <Saved />
        </MenuItem>
        <LinkTitle>Saved</LinkTitle>
      </MenuLink>
      <MenuLink to="/test-side-bar/My-Profile">
        <MenuItem type="button">
          <UserProfile />
        </MenuItem>
        <LinkTitle>My Profile</LinkTitle>
      </MenuLink>
      <MenuLink to="/test-side-bar/Settings">
        <MenuItem type="button">
          <Settings />
        </MenuItem>
        <LinkTitle>Settings</LinkTitle>
      </MenuLink>
      <MenuLink to="/test-side-bar/logout">
        <MenuItem type="button">
          <Logout />
        </MenuItem>
        <LinkTitle>Log Out</LinkTitle>
      </MenuLink>
    </MenuItemsContainer>
  );
}

export default Sidebar;
