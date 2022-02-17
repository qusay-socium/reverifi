import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import React from 'react';
import listingsTableData from '../data';
import { LinkText, ListingsTableContainer } from './listings-table.styles';

/**
 * Listings Table component.
 *
 * @return {JSX.Element}
 */
function ListingsTable() {
  return (
    <ListingsTableContainer>
      <Table headers={['property', 'my Role', 'status']}>
        {listingsTableData?.map(({ property, myRole, status }, index) => (
          <TableRow key={index.toString()}>
            <TableCell>{property}</TableCell>
            <TableCell>{myRole}</TableCell>
            <TableCell iconsCell>
              <LinkText to="/dashboard">{status}</LinkText>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </ListingsTableContainer>
  );
}

export default ListingsTable;
