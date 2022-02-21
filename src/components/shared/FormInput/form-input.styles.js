import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  align-items: center;
  color: ${colors.mineShaft};
  display: flex;
  font-size: 0.93rem;
  gap: 0.5rem;
  padding-bottom: 0.6rem;

  > span {
    color: ${colors.red};
    align-self: revert;
    line-height: 0;
    margin-left: -0.2rem;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;

  padding-left: ${({ withPrefix }) => withPrefix && '0.7rem'};

  ::placeholder {
    color: ${colors.midGray};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled.p`
  color: ${colors.red};
  font-size: 0.75rem;
  margin: 0.31rem 0 0.93rem 0;
`;

export const InputWrapper = styled.div`
  border: ${({ error }) =>
    error ? `0.06rem solid ${colors.red}` : `0.06rem solid ${colors.mercury}`};
  border-radius: ${({ rounded }) => (rounded ? '1.18rem' : '0.3rem')};
  padding: 0.6rem;
  width: 100%;
  background-color: ${colors.white};
  position: relative;
  cursor: text;

  &:hover {
    border: ${({ disabled }) => !disabled && `0.06rem solid ${colors.green}`};
  }

  ${({ disabled }) =>
    disabled &&
    `
    background-color: ${colors.mercury}60;
    border: none;
    cursor: auto;
  `}
`;

export const PlusSign = styled.span`
  position: absolute;
  top: 29%;
`;
