/* eslint-disable sort-keys */
import styled, { css } from 'styled-components';
import colors from 'styles/colors';

const inputSizes = {
  sm: css`
    font-size: 0.75rem;
    height: 0.9375rem;
  `,

  md: css`
    font-size: 1rem;
    height: 1.25rem;
  `,

  lg: css`
    font-size: 1rem;
    padding: 1rem;
  `,
};

export const StyledInputGroup = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2.1875rem;
  box-shadow: 0rem 0.0625rem 0.1875rem ${colors.mineShaft}29;
  display: flex;
  gap: 1rem;
  height: 100%;
  justify-content: space-evenly;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border-radius: 1.75rem;
  border: none;
  color: ${colors.mineshaft};
  flex: 1;
  font-size: 0.75rem;
  font-weight: 400;
  outline: none;
  padding: 0 1rem;
  ${({ size }) => inputSizes[size]}

  ::placeholder {
    color: ${colors.gray};
  }
`;
