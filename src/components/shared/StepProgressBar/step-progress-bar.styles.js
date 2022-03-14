import AchievedStepIcon from 'assets/icons/achieved-step-icon.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  position: relative;
`;

export const ProgressLine = styled.hr`
  height: 0.125rem;
  opacity: 0.6;
  width: 100%;
  background-color: ${colors.midGray};
  border: none;
  position: absolute;
  margin-top: 0.98rem;
  z-index: 0;
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OneStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 2rem;
  gap: 0.625rem;
`;

export const Step = styled.div`
  width: 2rem;
  height: 2rem;
  box-shadow: 0 0.4rem 1rem ${colors.midGray};
  line-height: 2rem;
  text-align: center;
  background: ${colors.green};

  ${({ achieved }) =>
    achieved &&
    `
      background: url(${AchievedStepIcon});
      background-size: contain;
      
      > div {
          visibility: hidden;
      }
    `}

  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

export const SecondaryText = styled.div`
  color: white;
  font-size: 0.875rem;
  margin: 0;
`;

export const PrimaryText = styled.div`
  color: ${colors.mineShaft};
  min-width: 5.9375rem;
  font-size: 0.875rem;
  text-align: center;
`;

export const SmallDot = styled.div`
  background-color: ${({ achieved }) =>
    achieved ? colors.green : colors.midGray};
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  margin-top: 0.8125rem;
  z-index: 1;
`;
