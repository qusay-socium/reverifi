/* eslint-disable sort-keys */
import styled, { css } from 'styled-components';
import colors from 'styles/colors';

const inputSizes = {
  sm: css`
    font-size: 0.75rem;
    padding: 0.7rem;
  `,

  md: css`
    font-size: 1rem;
    padding: 1rem;
  `,

  lg: css`
    font-size: 1rem;
    padding: 1.4rem;
  `,
};

export const LocationSearchInputContainer = styled.div`
  position: relative;
`;

export const StyledInputGroup = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2.2rem;
  border: ${({ error }) =>
    error ? `0.06rem solid ${colors.red}` : `0.06rem solid ${colors.mercury}`};
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;

  &:hover {
    outline: ${({ error }) =>
      error ? `0.06rem solid ${colors.red}` : `0.06rem solid ${colors.green}`};
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border-radius: 1.75rem;
  border: none;
  color: ${colors.mineShaft};
  flex: 1;
  font-size: 0.75rem;
  font-weight: 400;
  outline: none;
  padding: 0 1rem;
  font-family: inherit;
  ${({ size }) => inputSizes[size]}

  ::placeholder {
    color: ${colors.gray};
  }
`;

export const AutocompleteMenuContainer = styled.div`
  box-shadow: ${colors.midGray} 0 0.125rem 0.5rem 0;
  position: absolute;
  top: 87%;
  z-index: 10;
  width: 100%;
`;

export const AutocompleteMenu = styled.div`
  background-color: ${colors.white};
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: ${({ size }) => (size === 'sm' ? '0.8rem' : '1rem')};

  :hover {
    background-color: ${colors.green};
    color: ${colors.white};
  }
`;
