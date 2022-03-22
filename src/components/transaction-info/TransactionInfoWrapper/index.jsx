import TableNoData from 'components/shared/TableNoData';
import Toast from 'components/shared/Toast';
import ListingsTable from 'components/transaction-info/ListingsTable';
import TransactionsTable from 'components/transaction-info/TransactionsTable';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import useShowToastBar from 'hooks/use-show-toast-bar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getUserListings } from 'services/listing';
import {
  getAssignedTransactions,
  getCreatedTransactions,
} from 'services/transactions';
import { DEFAULT_PAGE_LIMIT } from 'utils/constants';
import {
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
  const [isDealClosed, setIsDealClosed] = useState(false);

  const [searchParams] = useSearchParams();

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

  useShowToastBar(isDealClosed, setIsDealClosed);

  useEffect(() => {
    fetchAllListingsForUser(pageNumber + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffectOnce(() => {
    fetchTransactions();
    if (searchParams.get('closed')) {
      setIsDealClosed(true);
    }
  });

  return (
    <TransactionInfoContainer>
      {isDealClosed && (
        <Toast
          isPositionFixed
          status="success"
          message="The transaction has been closed"
        />
      )}
      <HeadingText>My Listings</HeadingText>
      {listings.length > 0 ? (
        <ListingsTable
          listings={listings}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      ) : (
        <TableNoData text="You have no listings added yet " />
      )}

      <TransactionsContainer>
        <HeadingText>My Transactions</HeadingText>
      </TransactionsContainer>
      {assignedTransactions.length > 0 || createdTransactions.length > 0 ? (
        <TransactionsTable
          assignedTransactions={assignedTransactions}
          createdTransactions={createdTransactions}
        />
      ) : (
        <TableNoData text="You have no transactions started yet" />
      )}
    </TransactionInfoContainer>
  );
}

export default TransactionInfoWrapper;
