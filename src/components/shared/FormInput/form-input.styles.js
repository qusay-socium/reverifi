import addIcon from 'assets/add-icon-small.svg';
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
  border: 0.06rem solid ${colors.mercury};
  border-radius: ${({ rounded }) => (rounded ? '1.18rem' : '0.3rem')};
  padding: 0.6rem;
  width: 100%;

  ::placeholder {
    color: ${colors.midGray};
  }

  &:focus {
    outline: ${({ error }) =>
      error ? `0.06rem solid ${colors.red}` : `0.06rem solid ${colors.green}`};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    opacity: 1;
  }

  ${({ withPrefix }) =>
    withPrefix &&
    `
    background: url(${addIcon}) no-repeat scroll 0.56rem 0.88rem;
    padding-left: 1.2rem;
    background-color: ${colors.white};
  `}
`;

export const Error = styled.p`
  color: ${colors.red};
  font-size: 0.75rem;
  margin: 0.31rem 0 0.93rem 0;
`;
