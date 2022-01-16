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
  margin-top: 2rem;

  > button {
    font-size: 1rem;
  }
`;

export const VerifyButton = styled(Button)`
  &:hover {
    background-color: ${colors.white};
    outline: 0.0625rem solid ${colors.green};
    color: ${colors.green};
  }
`;

export const CancelButton = styled(Button)`
  background-color: ${colors.white};
  border: 0.0625rem solid ${colors.gray};
  color: ${colors.gray};

  &:hover {
    background-color: ${colors.gray};
    color: ${colors.white};
  }
`;

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mq.tabletWide`
    flex-direction: row;
  `}
`;

export const InputsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const DigitInput = styled.input`
  background-color: ${colors.grey};
  border: 0.1875rem solid ${colors.midGray};
  font-size: 1.875rem;
  max-width: 4.375rem;
  min-height: 5.625rem;
  text-align: center;

  &:focus {
    border: 0.1875rem solid ${colors.green};
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
  text-decoration: underline;
`;

export const TimerText = styled.span`
  color: ${colors.mineShaft};
  font-size: 0.75rem;
  font-weight: 600;
`;
