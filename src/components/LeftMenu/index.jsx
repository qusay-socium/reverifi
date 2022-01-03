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
  MenuItemInnerContainer,
  MenuItemsContainer,
} from './leftMenu.styles';

/**
 * Left side menu.
 *
 * @return {JSX.Element}
 */
function LeftMenu() {
  const [animationType, setAnimationType] = useState('');

  return (
    <MenuItemsContainer animationType={animationType}>
      <span>
        <MenuItemInnerContainer>
          <Menu
            onClick={() =>
              animationType === 'fadeOut' || animationType === ''
                ? setAnimationType('fadeIn')
                : setAnimationType('fadeOut')
            }
          />
        </MenuItemInnerContainer>
      </span>
      <MenuAnchor to="/left-menu-test">
        <span>
          <Dashboard />
        </span>
        <LinkTitle>Dashboard</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/My-Roles">
        <span>
          <UserRole />
        </span>
        <LinkTitle>My Roles</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/List-Properties<">
        <span>
          <List />
        </span>
        <LinkTitle>List Properties</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/Transaction">
        <span>
          <Transaction />
        </span>
        <LinkTitle>Transaction</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/Saved">
        <span>
          <Saved />
        </span>
        <LinkTitle>Saved</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/My-Profile">
        <span>
          <UserProfile />
        </span>
        <LinkTitle>My Profile</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/Settings">
        <span>
          <Settings />
        </span>
        <LinkTitle>Settings</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/left-menu-test/logout">
        <span>
          <Logout />
        </span>
        <LinkTitle>Log Out</LinkTitle>
      </MenuAnchor>
    </MenuItemsContainer>
  );
}

export default LeftMenu;
