import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${colors.grey};
  font-size: 0.9375rem;
  padding-bottom: 0.625rem;
`;

export const Input = styled.input`
  border: 1px solid ${colors.mercury};
  border-radius: ${({ rounded }) => (rounded ? '1.1875rem' : '0.375rem')};
  padding: 0.625rem;
  width: 100%;

  ::placeholder {
    color: ${colors.mercury};
  }

  &:focus {
    outline: 1px solid ${colors.green};
  }
`;

export const Error = styled.p`
  color: ${colors.red};
  font-size: 0.75rem;
  margin: 0.3125rem 0 0.9375rem 0;
`;
