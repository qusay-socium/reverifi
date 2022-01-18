import Footer from 'components/shared/Footer';
import Navbar from 'components/shared/Navbar';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * HOC to wrap component with the side menu.
 *
 * @param {Object} props The component props.
 * @param {JSX.Element} props.children The child component to wrap.
 * @param {bool} disableFooter Whether footer disabled.
 * @param {bool} disableNavBar Whether navbar disabled.
 *
 * @return {JSX.Element}
 */
function MainLayout({ children, disableFooter, disableNavbar }) {
  return (
    <>
      {!disableNavbar && <Navbar />}
      {children}
      {!disableFooter && <Footer />}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  disableFooter: PropTypes.bool,
  disableNavbar: PropTypes.bool,
};

MainLayout.defaultProps = {
  disableFooter: false,
  disableNavbar: false,
};

export default MainLayout;
