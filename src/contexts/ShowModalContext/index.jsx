import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

ModalContext.displayName = 'ModalContext';

/**
 * show modal context provider to manage modal open and close.
 *
 * @param {Object}      props
 * @param {JSX.Element} props.children Child nodes to render and pass context.
 *
 * @return {JSX.Element}
 */
function ShowModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const value = React.useMemo(() => ({ setShowModal, showModal }), [showModal]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

ShowModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useShowModal = () => useContext(ModalContext);

export default ShowModalProvider;
