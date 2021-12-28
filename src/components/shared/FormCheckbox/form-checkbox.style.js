import checkbox from 'assets/icons/chackbox.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;

  label {
    padding: 0;
  }
`;

export const Input = styled.input`
  appearance: none;
  border-radius: 4px;
  border: 2px solid ${colors.mercury};
  cursor: pointer;
  height: 1.125rem;
  outline: none;
  width: 1.125rem;

  &:checked {
    background-repeat: no-repeat;
    background-size: contain;
    background: url(${checkbox});
    border: none;
  }
`;

export const Label = styled.label`
  color: ${colors.grey};
  font-size: 0.9375rem;
  padding-bottom: 0.625rem;
`;
