import { ReactComponent as Close } from 'assets/icons/dialog-close.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { CloseButton, Dialog, Overlay } from './modal.styles';

/**
 * Component for rendering modals.
 *
 * @param {boolean}  show        Whether to show modal or not.
 * @param {node}     children    Child nodes to render.
 * @param {Function} handleClose Event get fired when close button clicked.
 * @param {boolean}  transparent whether the background overlay exist or not.
 *
 */
function Modal({ children, show, handleClose, transparent }) {
  return (
    <Overlay show={show} onClick={handleClose} transparent={transparent}>
      <Dialog onClick={(event) => event.stopPropagation()}>
        <CloseButton onClick={handleClose}>
          <Close />
        </CloseButton>
        {children}
      </Dialog>
    </Overlay>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  transparent: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  show: false,
  transparent: false,
};

export default Modal;
