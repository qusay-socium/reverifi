/* eslint-disable react/prop-types */
import React from 'react';
import { StyledTable, TableHead, TableRow, TableWrapper } from './table-styles';

/**
 * shared table component
 *
 * @param {JSX.Element} children table body component
 * @param {Array(String)} headers table headers array
 *
 * @return {JSX.Element}
 */
function Table({ children, headers }) {
  return (
    <TableWrapper>
      <StyledTable>
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
