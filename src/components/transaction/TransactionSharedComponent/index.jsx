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
    paramString: transactionStepsNames.step1,
    stepNum: 1,
    text: 'Add Involved Parties',
  },
  {
    paramString: transactionStepsNames.step2,
    stepNum: 2,
    text: 'Manage & Assign Tasks',
  },
  {
    paramString: transactionStepsNames.step3,
    stepNum: 3,
    text: 'Upload Documents',
  },
  {
    paramString: transactionStepsNames.step4,
    stepNum: 4,
    text: 'Finalize and Close Deal',
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
