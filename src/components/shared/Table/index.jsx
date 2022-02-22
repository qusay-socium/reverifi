/* eslint-disable react/prop-types */
import React from 'react';
import { StyledTable, TableHead, TableRow, TableWrapper } from './table-styles';

/**
 * shared table component
 *
 * @param {JSX.Element} children table body component
 * @param {Array(String)} headers table headers array
 * @param {Array(String)} fixedLayout table layout fixed (css property)
 *
 * @return {JSX.Element}
 */
function Table({ children, headers, fixedLayout }) {
  return (
    <TableWrapper>
      <StyledTable fixedLayout={fixedLayout}>
        <thead>
          <TableRow>
            {headers?.map((header) => (
              <TableHead key={header}>{header?.toUpperCase()}</TableHead>
            ))}
          </TableRow>
        </thead>
        <tbody>{children}</tbody>
      </StyledTable>
    </TableWrapper>
  );
}

export default Table;
