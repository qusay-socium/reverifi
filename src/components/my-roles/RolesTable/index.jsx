import editIcon from 'assets/icons/edit.svg';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import getTableData from './data';
import {
  IconContainer,
  StyledTable,
  TableCell,
  TableHead,
  TableRow,
  TableWrapper,
} from './roles-table.style';

/**
 * Table holding property and role.
 *
 * @return {JSX.Element} Table component.
 */
function RolesTable() {
  const [tableData, setTableData] = useState([]);

  useEffectOnce(() => {
    setTableData(getTableData());
  });

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHead>PROPERTY</TableHead>
            <TableHead>MY ROLE</TableHead>
            <TableHead />
          </TableRow>
        </thead>
        <tbody>
          {tableData.map(({ id, property, role }) => (
            <TableRow key={id}>
              <TableCell>{property}</TableCell>
              <TableCell>{role}</TableCell>
              <TableCell>
                <IconContainer>
                  <img src={editIcon} alt="Edit Icon" />
                </IconContainer>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

export default RolesTable;
