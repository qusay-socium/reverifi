import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Avatar } from 'assets/images/avatar.svg';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';
import { UserControlSectionWrapper } from './navbar.styles';

function UserControlSection({ setUser }) {
  return (
    <UserControlSectionWrapper onClick={() => setUser(false)}>
      <Avatar />
      Belle
      <ChevronDown />
    </UserControlSectionWrapper>
  );
}

UserControlSection.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default UserControlSection;
