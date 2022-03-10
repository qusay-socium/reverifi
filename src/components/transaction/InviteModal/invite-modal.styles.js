import styled from 'styled-components';
import mq from 'styles/media-query';

export const InviteForm = styled.form`
  min-width: 10rem;
  padding: 1rem;
  padding-top: 0;
  margin: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > div {
    width: 100%;
  }

  > h2 {
    align-self: flex-start;
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  > button {
    font-size: 0.9rem;
  }

  ${mq.tablet`
    min-width: 25rem;
  `}
`;
