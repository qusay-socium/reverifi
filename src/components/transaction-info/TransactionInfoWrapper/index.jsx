import statusDropdownIcon from 'assets/icons/dashboard-dropdown-icon1.svg';
import roleDropdownIcon from 'assets/icons/dashboard-dropdown-icon2.svg';
import DropdownMenu from 'components/shared/DropdownMenu';
import ListingsTable from 'components/transaction-info/ListingsTable';
import TransactionsTable from 'components/transaction-info/TransactionsTable';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { getUserListings } from 'services/listing';
import { getTransactions } from 'services/transactions';
import { DEFAULT_PAGE_LIMIT } from 'utils/constants';
import {
  DropdownMenusContainer,
  HeadingText,
  TransactionInfoContainer,
  TransactionsContainer,
} from './transaction-info-wrapper.styles';

/**
 * Transaction Info Wrapper component
 *
 * @return {JSX.Element}
 */
function TransactionInfoWrapper() {
  const [processes, setProcesses] = useState([]);

  const getProcesses = async () => {
    const processesData = await getTransactions();
    setProcesses(processesData);
  };

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

  useEffect(() => {
    getProcesses();
  }, []);

  return (
    <TransactionInfoContainer>
      <HeadingText>My Listings</HeadingText>
      <ListingsTable
        listings={listings}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />

      <TransactionsContainer>
        <HeadingText>My Transactions</HeadingText>

        <DropdownMenusContainer>
          <DropdownMenu
            name="status"
            placeholder="select status"
            leftIcon={statusDropdownIcon}
          />
          <DropdownMenu
            name="role"
            placeholder="select role"
            leftIcon={roleDropdownIcon}
          />
        </DropdownMenusContainer>
      </TransactionsContainer>
      <TransactionsTable processes={processes} />
    </TransactionInfoContainer>
  );
}

export default TransactionInfoWrapper;
