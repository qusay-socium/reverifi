import StepProgressBar from 'components/shared/StepProgressBar';
import TransactionListingDataWrapper from 'components/transaction/TransactionListingDataWrapper';
import {
  Container,
  StepProgressBarContainer,
  TitleText,
} from 'components/transaction/TransactionSharedComponent/transaction-shared-component.styles';
import React from 'react';
import { useParams } from 'react-router-dom';
import { transactionStepsNames } from 'utils/constants';

const steps = [
  {
    paramString: transactionStepsNames.addParties.route,
    stepNum: 1,
    text: transactionStepsNames.addParties.name,
  },
  {
    paramString: transactionStepsNames.assignTasks.route,
    stepNum: 2,
    text: transactionStepsNames.assignTasks.name,
  },
  {
    paramString: transactionStepsNames.uploadDocuments.route,
    stepNum: 3,
    text: transactionStepsNames.uploadDocuments.name,
  },
  {
    paramString: transactionStepsNames.closeDeal.route,
    stepNum: 4,
    text: transactionStepsNames.closeDeal.name,
  },
];

/**
 * Transaction Shared Component
 *
 * @return {JSX.Element}
 */
export default function TransactionSharedComponent() {
  const params = useParams();

  /**
   * find Current Step function
   *
   * @param {String} type type of data to return
   *
   * @return {Any} return string or number
   */
  const findCurrentStep = (type) => {
    const currentStep = steps.find(
      ({ paramString }) => paramString === params['*']
    );

    if (type) return currentStep.stepNum;

    return currentStep.text;
  };

  return (
    <Container>
      <StepProgressBarContainer>
        <StepProgressBar
          steps={steps}
          currentStep={findCurrentStep('stepNum')}
        />
      </StepProgressBarContainer>
      <TitleText>{findCurrentStep()}</TitleText>
      <TransactionListingDataWrapper />
    </Container>
  );
}
