import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  StepsContainer,
  Step,
  ProgressLine,
  PrimaryText,
  SecondaryText,
  SmallDot,
  OneStepContainer,
} from 'components/shared/StepProgressBar/step-progress-bar.styles';

/**
 * Step Progress Bar.
 *
 * @param {Object} props Props passed to Step Progress Bar.
 * @param {number} props.currentStep Step that represent page.
 * @param {array} props.steps Name of each step.
 *
 * @return {JSX.Element} The Step Progress Bar that represent the progress in transaction page.
 */
function StepProgressBar({ steps, currentStep }) {
  return (
    <Container>
      <ProgressLine />
      <StepsContainer>
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <OneStepContainer>
              <Step achieved={index + 1 < currentStep}>
                <SecondaryText>{index + 1}</SecondaryText>
              </Step>
              <PrimaryText>{step}</PrimaryText>
            </OneStepContainer>
            {index + 1 < steps.length && (
              <SmallDot achieved={index + 1 < currentStep} />
            )}
          </React.Fragment>
        ))}
      </StepsContainer>
    </Container>
  );
}

StepProgressBar.defaultProps = {
  currentStep: 1,
};

StepProgressBar.propTypes = {
  currentStep: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StepProgressBar;
