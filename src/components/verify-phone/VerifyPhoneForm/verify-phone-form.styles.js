import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem auto;

  > button {
    font-size: 1rem;
  }

  ${mq.tabletWide`
    margin: 2rem 0;
  `}
`;

export const VerifyButton = styled(Button)``;

export const CancelButton = styled(Button)`
  background-color: ${colors.white};
  border: 0.06rem solid ${colors.gray};
  color: ${colors.gray};
`;

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  ${mq.tabletWide`
    flex-direction: row;
  `}
`;

export const InputsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  ${mq.tabletWide`
    flex-direction: row;
  `}
`;

export const DigitInputsContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1.5rem;
`;

export const DigitInput = styled.input`
  background-color: ${colors.grey};
  border: 0.2rem solid ${colors.midGray};
  font-size: 1.9rem;
  max-width: 3.5rem;
  min-height: 4.5rem;
  text-align: center;

  &:focus {
    border: 0.2rem solid ${colors.green};
    outline: 0;
    background-color: ${colors.alabaster};
  }
`;

export const ResendCircleContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export const ResendButton = styled.a`
  color: ${colors.azure};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const TimerText = styled.span`
  color: ${colors.mineShaft};
  font-size: 0.75rem;
  font-weight: 600;
`;
