import SideBar from 'components/SideBar';
import PropTypes from 'prop-types';
import React from 'react';
import LayoutContainer from './AdminPanelLayout.styles';

/**
 * Higher Order Component take the componenet and wrap it with the left menu.
 *
 * @param {JSX.Element} children A component to wrap.
 *
 * @return {JSX.Element} left menu with passed component
 */
function AdminPanelLayout({ children }) {
  return (
    <LayoutContainer>
      <SideBar />
      {children}
    </LayoutContainer>
  );
}

AdminPanelLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AdminPanelLayout;
