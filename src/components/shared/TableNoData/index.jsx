import propTypes from 'prop-types';
import React from 'react';
import { Container, Text } from './table-no-data.style';

/**
 * Tabs component
 *
 * @param {string} text to use in the container
 *
 * @return {JSX.Element}
 */
function TableNoData({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

TableNoData.propTypes = {
  text: propTypes.number.isRequired,
};

export default TableNoData;
