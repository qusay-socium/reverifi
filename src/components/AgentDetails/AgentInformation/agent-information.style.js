import colors from 'styles/colors';
import mq from 'styles/media-query';
import styled from 'styled-components';

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
  border-radius: 0.3125rem;
  width: 100%;
`;

export const AgentBasicInformation = styled.div`
  flex: 3;
`;

export const AgentName = styled.div`
  align-items: center;
  display: flex;
  gap: 0.875rem;

  span {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const InfoWrapper = styled.div`
  display: flex;

  ${mq.tablet`
    font-size:0.9375rem
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
`;

export const InfoValue = styled.div`
  flex: 3;
  font-weight: 600;
  width: max-content;

  span {
    word-break: break-all;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;

  path:first-child {
    fill: ${colors.green};
  }
`;

export const CompanyInformation = styled.div`
  background-color: ${colors.white};
  border-radius: 0.625rem;
  flex: 2;
  padding: 0rem 0 1rem 1rem;

  p {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const AboutAgent = styled.div`
  line-height: 1.25rem;
  flex: 3;
`;
