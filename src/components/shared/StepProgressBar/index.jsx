import {
  Container,
  OneStepContainer,
  PrimaryText,
  ProgressLine,
  SecondaryText,
  SmallDot,
  Step,
  StepsContainer,
} from 'components/shared/StepProgressBar/step-progress-bar.styles';
import PropTypes from 'prop-types';
import React from 'react';

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
        {steps.map(({ text, paramString, stepNum }, index) => (
          <React.Fragment key={paramString}>
            <OneStepContainer>
              <Step achieved={stepNum < currentStep}>
                <SecondaryText>{index + 1}</SecondaryText>
              </Step>
              <PrimaryText>{text}</PrimaryText>
            </OneStepContainer>
            {index + 1 < steps.length && (
              <SmallDot achieved={stepNum < currentStep} />
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
