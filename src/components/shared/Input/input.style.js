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

const shapes = {
  pill: css`
    border-radius: 2.1875rem;
    box-shadow: 0rem 0.0625rem 0.1875rem #22222229;
  `,

  square: css`
    border-radius: 0.375rem;
    box-shadow: 0rem 0.0625rem 0.1875rem #22222229;
  `,

  line: css`
    border-top: 0rem;
    border-left: 0rem;
    border-right: 0rem;
    border-bottom: 0.125rem solid lightgrey;
  `,
};

export const StyledInputGroup = styled.div`
  ${({ shape }) => shapes[shape]}
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  background-color: ${colors.white};
  height: 100%;
`;

export const StyledInput = styled.input`
  color: ${colors.mineshaft};
  border: none;
  flex: 1;
  background-color: transparent;
  outline: none;
  border-radius: 1.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 1.75rem;
  font-weight: 400;
  padding: 0 1rem;
  font-size: 0.75rem;
  ${({ size }) => inputSizes[size]}

  ::placeholder {
    color: ${colors.gray};
  }
`;
