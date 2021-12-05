import { ReactComponent as Logo } from 'assets/logo.svg';
import React from 'react';
import { Title } from './header.styles';

/**
 * Home page header section.
 *
 * @return {JSX.Element}
 */
function Header() {
  return (
    <div>
      <Logo />
      <Title>TODO: implement header.</Title>
    </div>
  );
}

export default Header;
