import { ReactComponent as FailIcon } from 'assets/icons/toast-fail.svg';
import { ReactComponent as SuccessIcon } from 'assets/icons/toast-success.svg';
import propTypes from 'prop-types';
import React from 'react';
import { ToastContainer, ToastMessage } from './toast.styles';

/**
 * shared Toast component
 *
 * @param {String} status toast status (success or fail)
 * @param {String} message toast message
 *
 * @return {JSX.Element}
 */
function Toast({ status, message, isPositionFixed }) {
  return (
    <ToastContainer status={status} isPositionFixed={isPositionFixed}>
      {status === 'success' ? <SuccessIcon /> : <FailIcon />}
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  );
}

Toast.propTypes = {
  isPositionFixed: propTypes.bool,
  message: propTypes.string.isRequired,
  status: propTypes.oneOf(['success', 'fail']).isRequired,
};

Toast.defaultProps = {
  isPositionFixed: false,
};

export default Toast;
