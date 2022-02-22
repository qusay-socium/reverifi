import checkbox from 'assets/icons/chackbox.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  margin-bottom: ${({ withMargin }) => (withMargin ? '1.25rem' : 0)};

  label {
    padding: 0;
  }
`;

export const Input = styled.input`
  appearance: none;
  border-radius: 0.25rem;
  border: 0.125rem solid ${colors.mercury};
  cursor: pointer;
  height: 1.125rem;
  width: 1.125rem;

  &:checked {
    background-repeat: no-repeat;
    background-size: contain !important;
    background: url(${checkbox});
    border: none;
  }
`;

export const Label = styled.label`
  color: ${colors.mineShaft};
  font-size: 0.9375rem;
  padding-bottom: 0.625rem;
`;
