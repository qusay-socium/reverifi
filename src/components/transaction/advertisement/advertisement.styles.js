import styled from 'styled-components';

export const ImgContainer = styled.div`
  margin: 0 3.25rem;
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  min-height: 18.125rem;
`;

export const CardsContainer = styled.div`
  position: absolute;
  bottom: 0.3125rem;
  display: flex;
  flex-direction: rows;
  justify-content: center;
  gap: 1.25rem;
  width: 100%;
`;
