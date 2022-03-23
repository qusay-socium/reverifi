import { ReactComponent as CreateIcon } from 'assets/icons/dashboard-create.svg';
import { ReactComponent as MoneyIcon } from 'assets/icons/dashboard-money.svg';
import { ReactComponent as TeamIcon } from 'assets/icons/dashboard-people-team.svg';
import InvitationsTable from 'components/dashboard/InvitationsTable';
import OffersTable from 'components/dashboard/OffersTable';
import Tabs from 'components/shared/Tabs';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DashboardCard,
  DashboardCardsContainer,
  DashboardCardText,
  DashboardContainer,
  DashboardHeading,
  DashboardTitle,
} from './dashboard-wrapper.styles';

const cardsInfo = [
  {
    Icon: TeamIcon,
    route: '/transaction',
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
const tabsData = [
  { icon: null, title: 'Incoming' },
  { icon: null, title: 'Sent' },
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
      <OffersTable />

      <DashboardHeading>Invitations</DashboardHeading>
      <Tabs
        tabsData={tabsData}
        tabsContent={[
          <InvitationsTable type="incoming" />,
          <InvitationsTable type="sent" />,
        ]}
      />
    </DashboardContainer>
  );
}

export default DashboardWrapper;
