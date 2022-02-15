import React from 'react';
import StepProgressBar from 'components/shared/StepProgressBar';
import Advertisement from 'components/transaction/advertisement';
import {
  Container,
  TitleText,
  StepProgressBarContainer,
} from 'components/transaction/wrapper/transaction-wrapper.styles';

/**
 * Transaction Wrapper.
 *
 * @return {JSX.Element} The wrapper which contains transaction page components.
 */
export default function TransactionWrapper() {
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
      <Advertisement />
    </Container>
  );
}
