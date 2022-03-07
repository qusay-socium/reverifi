import styled from 'styled-components';
import colors from 'styles/colors';
import { IconsContainer, LocationText } from '../Card/card.style';

export const CardContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGray};
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: -10rem;
  max-width: 24rem;
  min-width: 18rem;
  overflow: hidden;
  position: absolute;
`;

export const ImageContainer = styled.div`
  max-height: 10rem;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 1rem;
`;

export const PriceText = styled.h2`
  font-weight: 600;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`;

export const MapCardIconsContainer = styled(IconsContainer)`
  margin: 0 1.1rem;
`;

export const AddressText = styled(LocationText)`
  margin: 0;
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
