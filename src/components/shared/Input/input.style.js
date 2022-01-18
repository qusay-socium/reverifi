/* eslint-disable sort-keys */
import styled, { css } from 'styled-components';
import colors from 'styles/colors';

const inputSizes = {
  sm: css`
    height: 0.9375rem;
    font-size: 0.75rem;
  `,

  md: css`
    height: 1.25rem;
    font-size: 1rem;
  `,
};

export const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.white};
  height: 100%;
  border-radius: 2.1875rem;
  box-shadow: 0rem 0.0625rem 0.1875rem #22222229;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 1.75rem;
  color: ${colors.mineshaft};
  flex: 1;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0 1rem;
  ${({ size }) => inputSizes[size]}

  ::placeholder {
    color: ${colors.gray};
  }
`;
