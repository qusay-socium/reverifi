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
function Toast({ status, message, fixedPosition }) {
  return (
    <ToastContainer status={status} fixedPosition={fixedPosition}>
      {status === 'success' ? <SuccessIcon /> : <FailIcon />}
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  );
}

Toast.propTypes = {
  fixedPosition: propTypes.bool,
  message: propTypes.string.isRequired,
  status: propTypes.oneOf(['success', 'fail']).isRequired,
};

Toast.defaultProps = {
  fixedPosition: false,
};
export default Toast;
