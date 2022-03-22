import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ShareContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 1.5rem;

  > svg {
    display: none;
  }

  ${mq.tabletWide`
    > svg {
        display: block; 
    }
    margin: 0 1rem 0 0;
    `}
`;
export const ShareImg = styled.img``;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;

  ${mq.tablet`
   font-size: 1.5rem;
    `}
`;

export const ShareForm = styled.form`
  background-color: ${colors.green}29;
  border-radius: 0.5rem;
  margin: 2rem 0;
  padding: 1.25rem 1rem;

  > button {
    margin-top: 0.8125rem;
    padding: 0 2.5rem;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export const ShareWithText = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: center;
`;

export const SocialIconsContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.9375rem;
  padding-bottom: 1rem;
`;

export const InfoContainer = styled.div`
  min-width: 15.625rem;
  align-self: center;

  ${mq.tablet`
     min-width: 20rem;
  `}

  ${mq.desktop`
     min-width: 28.125rem;
  `}
`;
