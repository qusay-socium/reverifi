import Sidebar from 'components/Sidebar';
import PropTypes from 'prop-types';
import React from 'react';
import LayoutContainer from './admin-panel-layout.styles';

/**
 * HOC to wrap component with the side menu.
 *
 * @param {Object} props The component props.
 * @param {JSX.Element} props.children The child component to wrap.
 *
 * @return {JSX.Element}
 */
function AdminPanelLayout({ children }) {
  return (
    <LayoutContainer>
      <Sidebar />
      {children}
    </LayoutContainer>
  );
}

AdminPanelLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminPanelLayout;
