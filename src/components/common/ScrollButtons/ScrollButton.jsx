import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as RButton } from 'assets/Icons/arrow.svg';
import { ReactComponent as LButton } from 'assets/Icons/larrow.svg';

import { ScrollButtonsContainer } from './scroll-button.styles';

function ScrollButton({ dir, onClick }) {
  return (
    <ScrollButtonsContainer type="button" onClick={onClick}>
      {dir === 'l' ? <LButton /> : <RButton />}
    </ScrollButtonsContainer>
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
