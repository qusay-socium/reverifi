import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import agentImage from 'assets/icons/saved-agent-placeholder.svg';
import agentNoData from 'assets/images/saved-agent-no-data.svg';
import Pagination from 'components/shared/Pagination';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getUserSavedUsersOrListings,
  saveUserOrListing,
} from 'services/social-statistics';
import { toUpperCaseFirstLetter } from 'utils/helpers';
import NoDataComponent from '../NoDataComponent';
import { IconContainer } from '../SavedListings/saved-listings.styles';
import { AgentImage } from './saved-agents.styles';

const PAGE_LIMIT = 8;

/**
 * Saved agents component.
 *
 * @return {JSX.Element}
 */
function SavedAgents() {
  const { isLoggedIn, userInfo: authInfo } = useUser();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  /**
   * handle fetch Saved agents
   */
  const fetchSavedUsers = async (page) => {
    if (!isLoggedIn) navigate('/sign-up');

    if (authInfo?.id) {
      const usersData = await getUserSavedUsersOrListings(
        authInfo?.id,
        'user',
        page,
        PAGE_LIMIT
      );

      const filteredUsers = usersData.data.filter((user) =>
        user.savedUser.roles.some((item) => item.role === 'Agent')
      );

      setUsers({ ...usersData, data: filteredUsers });
    }
  };

  useEffect(() => {
    fetchSavedUsers(pageNumber + 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, authInfo]);

  /**
   * handle delete saved user
   */
  const handleDelete = async (id) => {
    await saveUserOrListing({ userId: id });
    fetchSavedUsers(1);
    setPageNumber(0);
  };

  return (
    <div>
      {users?.data?.length > 0 ? (
        <>
          <Table
            headers={[
              'IMAGE',
              'AGENT NAME',
              'AGENT TYPE',
              'PHONE',
              'EMAIL',
              'ADDRESS',
              '',
            ]}
          >
            {users?.data?.map(
              ({ savedUser: { id, userInfo, roles, name, phone, email } }) => (
                <TableRow key={id}>
                  <TableCell>
                    <AgentImage src={userInfo?.image || agentImage} />
                  </TableCell>

                  <TableCell wordBreak>
                    {toUpperCaseFirstLetter(name)}
                  </TableCell>

                  <TableCell wordBreak>
                    {roles.length > 0
                      ? roles?.map(({ role }, i, array) =>
                          i + 1 === array.length ? `${role}` : `${role}, `
                        )
                      : ''}
                  </TableCell>

                  <TableCell wordBreak>{phone?.slice(2)}</TableCell>
                  <TableCell wordBreak>{email}</TableCell>
                  <TableCell wordBreak>
                    {userInfo?.zipCode &&
                      `${userInfo?.zipCode}, ${userInfo?.city} ${userInfo?.country}`}
                  </TableCell>
                  <TableCell iconsCell>
                    <IconContainer
                      hoverable
                      onClick={() => {
                        navigate(`/agent-details/${id}`);
                      }}
                    >
                      <EyeIcon />
                      <Tooltip
                        text="View"
                        arrowPosition="top"
                        position={[2.5, -0.8]}
                      />
                    </IconContainer>
                    <IconContainer hoverable onClick={() => handleDelete(id)}>
                      <DeleteIcon />
                      <Tooltip
                        text="Delete"
                        arrowPosition="top"
                        position={[2.5, -1]}
                      />
                    </IconContainer>
                  </TableCell>
                </TableRow>
              )
            )}
          </Table>
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            limit={PAGE_LIMIT}
            dataCount={users?.count}
          />
        </>
      ) : (
        <NoDataComponent
          image={agentNoData}
          dataFor="agent"
          buttonText="Find an agent"
        />
      )}
    </div>
  );
}

export default SavedAgents;
