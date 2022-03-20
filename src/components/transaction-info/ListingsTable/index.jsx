import { AgentContainer } from 'components/my-listings/ListingsTable/listing-table.style';
import Pagination from 'components/shared/Pagination';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import propTypes from 'prop-types';
import React from 'react';
import {
  DEFAULT_PAGE_LIMIT,
  transactionStatus,
  transactionStepsNames,
} from 'utils/constants';
import {
  LinkText,
  ListingsTableContainer,
  RolesText,
} from './listings-table.styles';

/**
 * Listings Table component.
 *    @param {number} pageNumber page number
 *    @param {array(object)} listings array of listings
 *    @param {func} setPageNumber func to set page number
 *
 * @return {JSX.Element}
 */
function ListingsTable({ listings, pageNumber, setPageNumber }) {
  return (
    <ListingsTableContainer>
      <Table headers={['property', 'my Role', 'status']} fixedLayout>
        {listings?.data?.map(({ id, address, agent, transactionListing }) => (
          <TableRow
            key={id}
            show={transactionListing.find(
              (transaction) =>
                transaction.status === transactionStatus.inProgress
            )}
          >
            <TableCell>{address}</TableCell>
            <TableCell>
              {agent?.roles.length > 0 ? (
                <AgentContainer>
                  <RolesText>
                    {agent?.roles?.map(({ role }, i, array) =>
                      i + 1 !== array.length ? `, ` : role
                    )}
                  </RolesText>
                  {agent?.roles.length > 2 && (
                    <Tooltip
                      text={agent?.roles?.map(({ role }, i, array) =>
                        i + 1 !== array.length ? `, ` : role
                      )}
                      arrowPosition="top"
                      position={[3, 0, 0, 2]}
                      lineBreak
                    />
                  )}
                </AgentContainer>
              ) : (
                'N/A'
              )}
            </TableCell>
            <TableCell iconsCell>
              <LinkText
                to={`/transaction/${id}/${transactionStepsNames.addParties}`}
              >
                start the process
              </LinkText>
            </TableCell>
          </TableRow>
        ))}
      </Table>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        limit={DEFAULT_PAGE_LIMIT}
        dataCount={listings?.count}
      />
    </ListingsTableContainer>
  );
}

ListingsTable.defaultProps = {
  listings: [],
  pageNumber: 0,
  setPageNumber: () => {},
};

ListingsTable.propTypes = {
  listings: propTypes.arrayOf(propTypes.object),
  pageNumber: propTypes.number,
  setPageNumber: propTypes.func,
};

export default ListingsTable;
