import { ReactComponent as AddSVG } from 'assets/add-icon.svg';
import ComingSoonImage from 'assets/images/reverifi-coming-soon.png';
import React from 'react';
import { Container, HeaderText } from './reverifi-plus.style';

/**
 * Reverifi plus tab .
 *
 * @return {JSX.Element}
 */
function ReverifiPlus() {
  return (
    <Container>
      <HeaderText>
        Coming Soon reverifi
        <AddSVG />
      </HeaderText>
      <img src={ComingSoonImage} alt="coming soon" />
    </Container>
  );
}

export default ReverifiPlus;
