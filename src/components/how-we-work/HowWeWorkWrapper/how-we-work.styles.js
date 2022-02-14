import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const HowWeWorkContainer = styled.div`
  margin: 3rem;
  width: 100%;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  > div {
    flex: 1;
  }

  ${mq.desktop`
    flex-direction: row;
    gap: 5rem;
  `}
`;

export const TextContainer = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.12rem;
    line-height: 1.4rem;
    color: ${colors.dustyGray};
  }
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 22rem;
  border: none;
`;
