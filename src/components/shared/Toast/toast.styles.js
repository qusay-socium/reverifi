import styled from 'styled-components';
import colors from 'styles/colors';

export const ToastContainer = styled.div`
  align-items: center;
  background-color: ${({ status }) =>
    status === 'success' ? colors.green : colors.red};
  border-radius: 0.5625rem;
  box-shadow: 0 0.25rem 0.6rem ${colors.midGray};
  display: flex;
  font-size: 0.9rem;
  gap: 1rem;
  margin: 1rem 0;
  padding: 0.5rem 0.8rem;
  padding-right: 3rem;
  width: fit-content;
  position: ${({ isPositionFixed }) => isPositionFixed && 'absolute'};
  right: ${({ isPositionFixed }) => isPositionFixed && '2rem'};
`;

export const ToastMessage = styled.p`
  color: ${colors.white};
  font-weight: 600;
  margin: 0;
`;
