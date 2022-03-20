import statusDropdownIcon from 'assets/icons/dashboard-dropdown-icon1.svg';
import roleDropdownIcon from 'assets/icons/dashboard-dropdown-icon2.svg';
import DropdownMenu from 'components/shared/DropdownMenu';
import ListingsTable from 'components/transaction-info/ListingsTable';
import TransactionsTable from 'components/transaction-info/TransactionsTable';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useEffect, useState } from 'react';
import { getUserListings } from 'services/listing';
import {
  getAssignedTransactions,
  getCreatedTransactions,
} from 'services/transactions';
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
  const [assignedTransactions, setAssignedTransactions] = useState([]);
  const [createdTransactions, setCreatedTransactions] = useState([]);
  const [listings, setListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { userInfo } = useUser();

  const fetchTransactions = async () => {
    const assigned = await getAssignedTransactions();
    setAssignedTransactions(assigned);

    const created = await getCreatedTransactions();
    setCreatedTransactions(created);
  };

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

  useEffectOnce(() => fetchTransactions());

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
      <TransactionsTable
        assignedTransactions={assignedTransactions}
        createdTransactions={createdTransactions}
      />
    </TransactionInfoContainer>
  );
}

export default TransactionInfoWrapper;
