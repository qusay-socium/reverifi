import statusDropdownIcon from 'assets/icons/dashboard-dropdown-icon1.svg';
import roleDropdownIcon from 'assets/icons/dashboard-dropdown-icon2.svg';
import { transactionsData } from 'components/dashboard/data';
import DropdownMenu from 'components/shared/DropdownMenu';
import ListingsTable from 'components/transaction-info/ListingsTable';
import TransactionsTable from 'components/transaction-info/TransactionsTable';
import React from 'react';
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
  return (
    <TransactionInfoContainer>
      <HeadingText>My Listings</HeadingText>
      <ListingsTable />

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
      <TransactionsTable data={transactionsData} />
    </TransactionInfoContainer>
  );
}

export default TransactionInfoWrapper;
