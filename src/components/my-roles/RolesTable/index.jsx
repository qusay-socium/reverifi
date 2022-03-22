import { EditIcon } from 'components/agent-details/AgentRating/agent-rating.style';
import {
  AgentContainer,
  CellContainer,
  TableIconContainer,
} from 'components/my-listings/ListingsTable/listing-table.style';
import Pagination from 'components/shared/Pagination';
import Table from 'components/shared/Table';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserListings } from 'services/listing';
import { DEFAULT_PAGE_LIMIT } from 'utils/constants';
import { Container, TableRow } from './roles-table.style';

/**
 * My Listings page component.
 *
 * @return {JSX.Element}
 */
function RolesTable() {
  const [listings, setListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { userInfo } = useUser();
  const navigate = useNavigate();

  const tableHeaders = ['PROPERTY', 'MY ROLE', ''];

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
    <Container>
      <Table headers={tableHeaders}>
        {listings?.data?.map(({ address, agent, id }) => (
          <TableRow key={id}>
            <CellContainer>{address}</CellContainer>
            <CellContainer>
              <AgentContainer>
                {agent?.roles?.map(({ role }) =>
                  agent?.roles.length > 1 ? (
                    <>{role || 'N/A'},</>
                  ) : (
                    <>{role || 'N/A'} </>
                  )
                )}

                <Tooltip
                  text={agent?.roles?.map(({ role }) => `${role} `)}
                  arrowPosition="top"
                  position={['bottom', 'center']}
                  lineBreak
                />
              </AgentContainer>
            </CellContainer>

            <CellContainer iconsCell>
              <TableIconContainer hover>
                <EditIcon
                  onClick={() => {
                    navigate(`/my-listings/edit/${id}`);
                  }}
                />
                <Tooltip
                  text="Edit"
                  arrowPosition="top"
                  position={[2.5, -0.5]}
                />
              </TableIconContainer>
            </CellContainer>
          </TableRow>
        ))}
      </Table>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        limit={DEFAULT_PAGE_LIMIT}
        dataCount={listings?.count}
      />
    </Container>
  );
}

export default RolesTable;
