import Footer from 'components/shared/Footer';
import Navbar from 'components/shared/Navbar';
import Sidebar from 'components/shared/Sidebar';
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
    <>
      <Navbar />
      <LayoutContainer>
        <Sidebar />
        {children}
      </LayoutContainer>
      <Footer />
    </>
  );
}

AdminPanelLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminPanelLayout;
