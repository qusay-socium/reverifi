import { ReactComponent as AcceptIcon } from 'assets/icons/dashboard-offers-accept.svg';
import { ReactComponent as DeclineIcon } from 'assets/icons/dashboard-offers-decline.svg';
import Table from 'components/shared/Table';
import {
  IconContainer,
  TableCell,
  TableRow,
} from 'components/shared/Table/table-styles';
import propTypes from 'prop-types';
import React from 'react';
import { InvitedByImage } from './invitations-table.styles';

/**
 * Invitations Table component
 *
 * @param {Array(Object)} data invitations data array
 *
 * @return {JSX.Element}
 */
function InvitationsTable({ data }) {
  return (
    <Table headers={['PROPERTY', 'INVITED BY', 'DATE', 'INVITED AS', null]}>
      {data?.map(({ property, invitedBy, invitedAs, date, img }, index) => (
        <TableRow key={index.toString()}>
          <TableCell>{property}</TableCell>
          <TableCell>
            <InvitedByImage src={img} alt="person" />
            <span>{invitedBy}</span>
          </TableCell>
          <TableCell>{date}</TableCell>
          <TableCell>{invitedAs}</TableCell>
          <TableCell iconsCell>
            <IconContainer>
              <AcceptIcon />
            </IconContainer>
            <IconContainer>
              <DeclineIcon />
            </IconContainer>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

InvitationsTable.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default InvitationsTable;
