import React from 'react';
import TransactionWrapper from 'components/transaction/wrapper';
import AddInvolvedParties from 'components/transaction/AddInvolvedParties';
import { Container } from 'components/transaction/wrapper/transaction-wrapper.styles';
/**
 * Component to Add involved parties.
 *
 * @return {JSX.Element}
 */
function Transaction() {
  return (
    <Container>
      <TransactionWrapper />
      <AddInvolvedParties />
    </Container>
  );
}

export default Transaction;
