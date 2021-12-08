import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as RButton } from 'assets/Icons/arrow.svg';
import { ReactComponent as LButton } from 'assets/Icons/larrow.svg';

import { StyledScrollButton } from './scroll-button.styles';

function ScrollButton({ dir, onClick }) {
  return (
    <StyledScrollButton type="button" onClick={onClick}>
      {dir === 'l' ? <LButton /> : <RButton />}
    </StyledScrollButton>
  );
}

ScrollButton.propTypes = {
  dir: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ScrollButton.defaultProps = {
  dir: 'l',
};
export default ScrollButton;
