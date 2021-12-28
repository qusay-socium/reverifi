import styled from 'styled-components';
import mq from 'styles/media-query';

export const ListingPage = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MapContainer = styled.div`
  display: none;

  ${mq.desktop`
    display: flex;
    flex:1;
`}

  ${mq.desktopMax`
    flex:1.5;
`}
`;
