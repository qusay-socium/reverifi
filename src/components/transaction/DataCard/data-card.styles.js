import styled from 'styled-components';
import colors from 'styles/colors';

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.06rem 0.3rem ${colors.midGray};
  margin: 0 0 0.6rem;
  padding: 0.8rem 1rem;
  min-width: 25rem;
  max-height: 8rem;
  position: relative;
`;

export const PrimaryText = styled.p`
  color: ${colors.mineShaft};
  font-size: 1.12rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  margin: 0.1rem 0 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 25rem;

  &:hover {
    span {
      display: block;
      font-size: 0.6rem;
    }
  }
`;

export const SecondaryText = styled.div`
  color: ${colors.osloGray};
  font-size: 0.85rem;
  margin-bottom: 0.1rem;
`;

export const Services = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  margin: 0.7rem 0rem 0.8rem 0rem;
  gap: 1rem;
`;
