import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  align-items: center;
  color: ${colors.mineShaft}7f;
  display: flex;
  font-size: 0.9375rem;
  gap: 0.5rem;
  padding-bottom: 0.625rem;
`;

export const Input = styled.input`
  border: 0.0625rem solid ${colors.mercury};
  border-radius: ${({ rounded }) => (rounded ? '1.1875rem' : '0.375rem')};
  padding: 0.625rem;
  width: 100%;

  ::placeholder {
    color: ${colors.mercury};
  }

  &:focus {
    outline: 0.0625rem solid ${colors.green};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    opacity: 1;
  }
`;

export const Error = styled.p`
  color: ${colors.red};
  font-size: 0.75rem;
  margin: 0.3125rem 0 0.9375rem 0;
`;
