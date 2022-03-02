import styled from 'styled-components';
import colors from 'styles/colors';

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.06rem 0.3rem ${colors.midGray};
  margin: 0 0 0.6rem;
  padding: 0.8125rem 1rem;
  max-width: 25.6875rem;
  max-height: 8.125rem;
`;

export const PrimaryText = styled.div`
  color: ${colors.mineShaft};
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.375rem;
`;

export const Address = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 0.1875rem;
`;

export const SecondaryText = styled.div`
  color: ${colors.osloGray};
  font-size: 0.875rem;
  margin: 0.1875rem 0 0 0;
`;

export const Services = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  margin: 0.9375rem 0rem 0.8125rem 0rem;
  gap: 0.9375rem;
`;
