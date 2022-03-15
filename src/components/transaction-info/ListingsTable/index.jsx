import { AgentContainer } from 'components/my-listings/ListingsTable/listing-table.style';
import Pagination from 'components/shared/Pagination';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { getUserListings } from 'services/listing';
import { DEFAULT_PAGE_LIMIT, transactionStepsNames } from 'utils/constants';
import {
  LinkText,
  ListingsTableContainer,
  RolesText,
} from './listings-table.styles';

/**
 * Listings Table component.
 *
 * @return {JSX.Element}
 */
function ListingsTable() {
  const [listings, setListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { userInfo } = useUser();

  const fetchAllListingsForUser = async (page) => {
    if (userInfo?.id) {
      const listingData = await getUserListings(
        userInfo?.id,
        DEFAULT_PAGE_LIMIT,
        page
      );
      setListings(listingData);
    }
  };

  useEffect(() => {
    fetchAllListingsForUser(pageNumber + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, userInfo]);

  return (
    <ListingsTableContainer>
      <Table headers={['property', 'my Role', 'status']} fixedLayout>
        {listings?.data?.map(({ id, address, agent }, index) => (
          <TableRow key={index.toString()}>
            <TableCell>{address}</TableCell>
            <TableCell>
              {agent?.roles.length > 0 ? (
                <AgentContainer>
                  <RolesText>
                    {agent?.roles?.map(({ role }, i, array) =>
                      i + 1 !== array.length ? `${role}, ` : role
                    )}
                  </RolesText>
                  {agent?.roles.length > 2 && (
                    <Tooltip
                      text={agent?.roles?.map(({ role }, i, array) =>
                        i + 1 !== array.length ? `${role}, ` : role
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

export default ListingsTable;
