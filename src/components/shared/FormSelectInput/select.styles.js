import styled from 'styled-components';
import colors from 'styles/colors';

export const Input = styled.select`
  background-color: ${colors.white};
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
`;
