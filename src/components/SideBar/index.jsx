import { ReactComponent as Dashboard } from 'assets/icons/dashboard.svg';
import { ReactComponent as List } from 'assets/icons/list.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as Saved } from 'assets/icons/saved.svg';
import { ReactComponent as Settings } from 'assets/icons/settings.svg';
import { ReactComponent as Transaction } from 'assets/icons/transaction.svg';
import { ReactComponent as UserProfile } from 'assets/icons/user-profile.svg';
import { ReactComponent as UserRole } from 'assets/icons/user-roles.svg';
import React, { useState } from 'react';
import {
  LinkTitle,
  MenuAnchor,
  MenuButton,
  MenuItemInnerContainer,
  MenuItemsContainer,
} from './SideBar.styles';

/**
 * Left side menu.
 *
 * @return {JSX.Element}
 */
function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(' ');
  return (
    <MenuItemsContainer isCollapsed={isCollapsed}>
      <MenuButton type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
        <MenuItemInnerContainer>
          <Menu />
        </MenuItemInnerContainer>
      </MenuButton>
      <MenuAnchor to="/left-menu-test">
        <MenuButton type="button">
          <Dashboard />
        </MenuButton>
        <LinkTitle>Dashboard</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/My-Roles">
        <MenuButton type="button">
          <UserRole />
        </MenuButton>
        <LinkTitle>My Roles</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/List-Properties<">
        <MenuButton type="button">
          <List />
        </MenuButton>
        <LinkTitle>List Properties</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/Transaction">
        <MenuButton type="button">
          <Transaction />
        </MenuButton>
        <LinkTitle>Transaction</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/Saved">
        <MenuButton type="button">
          <Saved />
        </MenuButton>
        <LinkTitle>Saved</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/My-Profile">
        <MenuButton type="button">
          <UserProfile />
        </MenuButton>
        <LinkTitle>My Profile</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/Settings">
        <MenuButton type="button">
          <Settings />
        </MenuButton>
        <LinkTitle>Settings</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/logout">
        <MenuButton type="button">
          <Logout />
        </MenuButton>
        <LinkTitle>Log Out</LinkTitle>
      </MenuAnchor>
    </MenuItemsContainer>
  );
}

export default SideBar;
