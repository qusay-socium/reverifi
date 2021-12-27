import styled from 'styled-components';
import colors from 'styles/colors';

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LimitMessage = styled.span`
  color: ${({ color }) => color || colors.midGrey};
  font-size: 0.75rem;
`;

export const Input = styled.textarea`
  background-color: white;
  border: 0.0625rem solid ${colors.mercury};
  border-radius: ${({ rounded }) => (rounded ? '1.1875rem' : '0.375rem')};
  height: ${({ height }) => height || '10rem'};
  padding: 0.625rem;
  width: 100%;

  ::placeholder {
    color: ${colors.mercury};
  }

  &:focus {
    outline: 0.0625rem solid ${colors.green};
  }
`;
