import styled from 'styled-components';
import colors from 'styles/colors';

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.06rem 0.3rem ${colors.midGray};
  margin: 0 0 0.6rem;
  padding: 0.8rem 1rem;
  min-width: 26rem;
  max-height: 8.5rem;
`;

export const PrimaryText = styled.div`
  color: ${colors.mineShaft};
  font-size: 1.12rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const SecondaryText = styled.div`
  color: ${colors.osloGray};
  font-size: 0.875rem;
  margin: 0.18rem 0 0 0;
`;

export const Services = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  margin: 0.9375rem 0rem 0.8rem 0rem;
  gap: 0.93rem;
`;
