import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';
import { HeaderIconWrapper } from '../CardInformation/card-information.style';

export const AgentInformationContainer = styled.div`
  background-color: ${colors.alabaster};
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ${mq.tablet`
    gap: 1.5rem;
  `}

  ${mq.desktopWide`
    flex-direction: row;
    padding: 2.25rem 4.375rem;
  `}
`;

export const AgentItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 1rem;
`;

export const AgentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mq.tablet`
    flex-direction: row;
  `}
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const StyledImg = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  height: 17rem;
`;

export const AgentBasicInformation = styled.ul`
  flex: 3;
  margin: 0;
  padding: 0;
`;

export const AgentName = styled.div`
  align-items: center;
  display: flex;
  gap: 0.8rem;

  h2 {
    margin: 0;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const InfoWrapper = styled.li`
  display: flex;

  ${mq.tablet`
    font-size: 0.8rem
  `};

  ${mq.tabletWide`
    font-size: 1rem
  `};
`;

export const InfoKey = styled.div`
  align-items: center;
  display: flex;
  flex: 2;
  gap: 0.5rem;
  color: ${colors.gray};
`;

export const InfoValue = styled.h4`
  flex: 3;
  margin: 0;
  width: max-content;
  word-break: break-all;
`;

export const SocialMediaIcons = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  padding: 1rem;

  path:first-child {
    fill: ${colors.green};
  }
`;

export const CompanyInformation = styled.ul`
  background-color: ${colors.white};
  border-radius: 0.625rem;
  flex: 2;
  margin: 0;
  padding: 1rem;
  padding-top: 0;

  h2 {
    margin-bottom: 0;
  }
`;

export const AboutAgent = styled.div`
  flex: 3;
  line-height: 1.25rem;
`;

export const IconLinkWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const IconWrapper = styled(HeaderIconWrapper)`
  background-color: ${colors.white};
`;
