import { ReactComponent as CreateIcon } from 'assets/icons/dashboard-create.svg';
import statusDropdownIcon from 'assets/icons/dashboard-dropdown-icon1.svg';
import roleDropdownIcon from 'assets/icons/dashboard-dropdown-icon2.svg';
import { ReactComponent as MoneyIcon } from 'assets/icons/dashboard-money.svg';
import { ReactComponent as TeamIcon } from 'assets/icons/dashboard-people-team.svg';
import DropdownMenu from 'components/shared/DropdownMenu';
import Tabs from 'components/shared/Tabs';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { incomingInvitations, offersData, transactionsData } from '../data';
import InvitationsTable from '../InvitationsTable';
import OffersTable from '../OffersTable';
import TransactionsTable from '../TransactionsTable';
import {
  DashboardCard,
  DashboardCardsContainer,
  DashboardCardText,
  DashboardContainer,
  DashboardHeading,
  DashboardTitle,
  DropdownMenusContainer,
  TransactionsContainer,
} from './dashboard-wrapper.styles';

const cardsInfo = [
  {
    Icon: TeamIcon,
    route: '/dashboard/how-we-work',
    text: 'Start New Selling /Buying Transactions',
  },
  {
    Icon: MoneyIcon,
    route: '',
    text: 'Invite Other Parties to my Transactions',
  },
  {
    Icon: CreateIcon,
    route: '/my-listings/create',
    text: 'Create Listing',
  },
];

/**
 * Dashboard Wrapper component
 *
 * @return {JSX.Element}
 */
function DashboardWrapper() {
  const navigate = useNavigate();
  return (
    <DashboardContainer>
      <DashboardTitle>Hi Belle Doe,</DashboardTitle>

      <DashboardCardsContainer>
        {cardsInfo.map(({ Icon, text, route }, index) => (
          <DashboardCard key={index.toString()} onClick={() => navigate(route)}>
            <Icon />
            <DashboardCardText>{text}</DashboardCardText>
          </DashboardCard>
        ))}
      </DashboardCardsContainer>

      <DashboardHeading>Offers</DashboardHeading>
      <OffersTable data={offersData} />

      <TransactionsContainer>
        <DashboardHeading>My Current Transactions</DashboardHeading>
        <DropdownMenusContainer>
          <DropdownMenu name="status" leftIcon={statusDropdownIcon}>
            <option value="">Status</option>
            <option value="1">status 1</option>
            <option value="1">status 3</option>
          </DropdownMenu>
          <DropdownMenu name="role" leftIcon={roleDropdownIcon}>
            <option value="">My Role</option>
            <option value="1">Seller</option>
            <option value="2">Buyer</option>
          </DropdownMenu>
        </DropdownMenusContainer>
      </TransactionsContainer>
      <TransactionsTable data={transactionsData} />

      <DashboardHeading>Invitations</DashboardHeading>
      <Tabs
        tabsTitles={['Incoming', 'Sent']}
        tabsContent={[
          <InvitationsTable data={incomingInvitations} />,
          'sent invitations table',
        ]}
      />
    </DashboardContainer>
  );
}

export default DashboardWrapper;
