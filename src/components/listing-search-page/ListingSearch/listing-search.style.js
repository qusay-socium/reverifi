import styled from 'styled-components';
import mq from 'styles/media-query';

export const ListingPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBody = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.tablet`
    margin-top: 5rem;
    flex-direction: row;
  `}
`;

export const MapContainer = styled.div`
  order: 1;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem;
  position: relevant;
  width: 90%;
  height: 20rem;

  ${mq.tablet`
    min-height: 44rem;
    flex: 1;
    order: 2;
  `}
`;

export const ListingContainer = styled.div`
  order: 2;
  padding-bottom: 1rem;
`;
