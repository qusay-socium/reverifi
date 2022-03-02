import React from 'react';
import StepProgressBar from 'components/shared/StepProgressBar';
import TransactionListingDataWrapper from 'components/transaction/TransactionListingDataWrapper';
import {
  Container,
  TitleText,
  StepProgressBarContainer,
} from 'components/transaction/TransactionSharedComponent/transaction-shared-component.styles';

/**
 * Transaction Wrapper.
 *
 * @param {String} listingId Id of listing.
 *
 * @return {JSX.Element} The wrapper which contains transaction page components.
 */
export default function TransactionSharedComponent() {
  return (
    <Container>
      <StepProgressBarContainer>
        <StepProgressBar
          steps={[
            'Add Involved Parties',
            'Manage & Assign Tasks',
            'Upload Documents',
            'Set up your Schedules',
            'Finalize and Close Deal',
          ]}
        />
      </StepProgressBarContainer>
      <TitleText>Add Involved Parties</TitleText>
      <TransactionListingDataWrapper />
    </Container>
  );
}
