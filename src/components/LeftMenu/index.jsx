import React from 'react';
import { ReactComponent as Home } from 'assets/icons/home.svg';
import { ReactComponent as List } from 'assets/icons/list.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as UserProfile } from 'assets/icons/user-profile.svg';
import { ReactComponent as Saved } from 'assets/icons/saved.svg';
import { ReactComponent as Settings } from 'assets/icons/settings.svg';
import { ReactComponent as Transaction } from 'assets/icons/transaction.svg';
import { ReactComponent as UserRoles } from 'assets/icons/user-roles.svg';
import { Div, Ul, Li, MenuAnchor } from './leftMenu.styles';

export default function index() {
  return (
    <Div>
      <Ul>
        <Li>
          <span>
            <Home />
          </span>
          <MenuAnchor href="/"> Dashboard </MenuAnchor>
        </Li>
        <Li>
          <span>
            <UserRoles />
          </span>
          <MenuAnchor href="/"> My Roles </MenuAnchor>
        </Li>
        <Li>
          <span>
            <List />
          </span>
          <MenuAnchor href="/"> List Properties </MenuAnchor>
        </Li>
        <Li>
          <span>
            <Transaction />
          </span>
          <MenuAnchor href="/"> Transaction </MenuAnchor>
        </Li>
        <Li>
          <span>
            <Saved />
          </span>
          <MenuAnchor href="/"> Saved </MenuAnchor>
        </Li>
        <Li>
          <span>
            <UserProfile />
          </span>
          <MenuAnchor href="/"> My Profile</MenuAnchor>
        </Li>
        <Li>
          <span>
            <Settings />
          </span>
          <MenuAnchor href="/"> Settings </MenuAnchor>
        </Li>
        <Li>
          <span>
            <Logout />
          </span>
          <MenuAnchor href="/"> Log Out </MenuAnchor>
        </Li>
      </Ul>
    </Div>
  );
}
