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
  IconContainer, LinkTitle, MenuAnchor, MenuItemInnerContainer, MenuItemsContainer
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
      <IconContainer>
        <MenuItemInnerContainer>
          <Menu
            onClick={() =>
              animationType === 'fadeOut' || animationType === ''
                ? setAnimationType('fadeIn')
                : setAnimationType('fadeOut')
            }
          />
        </MenuItemInnerContainer>
      </IconContainer>
      <MenuAnchor to="/left-menu-test">
        <IconContainer>
          <Dashboard />
        </IconContainer>
        <LinkTitle>Dashboard</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/lgrgrgeft-menu-test">
        <IconContainer>
          <List />
        </IconContainer>
        <LinkTitle>List</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/lgrgrgeft-menu-test">
        <IconContainer>
          <Transaction />
        </IconContainer>
        <LinkTitle>Transaction</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/lgrgrgeft-menu-test">
        <IconContainer>
          <Saved />
        </IconContainer>
        <LinkTitle>Saved</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/lgrgrgeft-menu-test">
        <IconContainer>
          <UserProfile />
        </IconContainer>
        <LinkTitle>My Profile</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/lgrgrgeft-menu-test">
        <IconContainer>
          <UserRole />
        </IconContainer>
        <LinkTitle>My Profile</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/lgrgrgeft-menu-test">
        <IconContainer>
          <Settings />
        </IconContainer>
        <LinkTitle>Settings</LinkTitle>
      </MenuAnchor>
      <MenuAnchor to="/lgrgrgeft-menu-test">
        <IconContainer>
          <Logout />
        </IconContainer>
        <LinkTitle>Log Out</LinkTitle>
      </MenuAnchor>
    </MenuItemsContainer>
  );
}

export default LeftMenu;
