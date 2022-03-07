import styled from 'styled-components';
import colors from 'styles/colors';

export const Input = styled.select`
  background-color: ${colors.white};
  border: 0.06rem solid ${colors.mercury};
  border-radius: ${({ rounded }) => (rounded ? '1.18rem' : '0.37rem')};
  color: ${colors.liver};
  padding: 0.62rem;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;

  ::placeholder {
    color: ${colors.mercury};
  }

  &:focus {
    outline: 0.06rem solid ${colors.green};
  }
`;

export const Placeholder = styled.option`
  display: none;
`;
