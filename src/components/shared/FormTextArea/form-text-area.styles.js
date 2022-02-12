import styled from 'styled-components';
import colors from 'styles/colors';

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LimitMessage = styled.span`
  color: ${({ color }) => color || colors.gray};
  font-size: 0.75rem;
  align-self: flex-end;
  margin-bottom: 0.18rem;
`;

export const Input = styled.textarea`
  background-color: white;
  border-radius: ${({ rounded }) => (rounded ? '1.20rem' : '0.4rem')};
  border: 0.06rem solid ${colors.mercury};
  height: ${({ height }) => height || '10rem'};
  padding: 0.625rem;
  resize: none;
  width: 100%;

  ::placeholder {
    color: ${colors.mercury};
  }

  &:focus {
    outline: 0.0625rem solid ${colors.green};
  }
`;
