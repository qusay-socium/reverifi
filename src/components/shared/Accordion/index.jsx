import propTypes from 'prop-types';
import React from 'react';
import { RowSummary } from './accordion.styles';

/**
 * shared Accordion component
 *
 * @param {JSX.Element} children the child component to show when accordion opens
 * @param {String} title accordion title
 *
 * @return {JSX.Element}
 */
function Accordion({ children, title }) {
  return (
    <details>
      <RowSummary>{title}</RowSummary>
      {children}
    </details>
  );
}

Accordion.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
};

export default Accordion;
