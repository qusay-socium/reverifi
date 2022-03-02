import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const BoxContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 20rem;
  justify-content: center;
  width: 33.5rem;
`;

export const DeleteBoxTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const DeleteBoxText = styled.p`
  color: ${colors.dustyGray};
  margin: 1.5rem 4rem;
  text-align: center;
`;

export const BoxText = styled.span`
  font-weight: 700;
  margin-left: 0.3rem;
`;

export const DeleteBoxButton = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 60%;
`;

export const DeleteButton = styled(Button)`
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 1rem;
  padding: 0 2.5rem;
`;

export const CancelButton = styled(Button)`
  background-color: ${colors.white};
  border: ${colors.dustyGray} solid 0.1rem;
  color: ${colors.dustyGray};
  font-size: 1rem;
  padding: 0 2.5rem;
`;
