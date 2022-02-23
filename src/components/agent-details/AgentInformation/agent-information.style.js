import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const AgentInformationContainer = styled.div`
  background-color: ${colors.alabaster};
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ${mq.tablet`
    gap: 1.5rem;
  `}

  ${mq.desktopExtraMax`
    flex-direction: row;
    padding: 2.3rem 4.4rem;
  `}
`;

export const AgentItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
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
  flex-grow: 0;
  flex-shrink: 0;

  ${mq.tablet`
    min-width: 23rem;
  `}
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
    text-transform: capitalize;
    font-weight: 600;
    font-size: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  > h2 {
    margin: 0;
    margin-left: 1rem;
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${({ companyInfoWrapper }) => (companyInfoWrapper ? 0 : '3rem')};

  ${mq.tablet`
    font-size: 0.8rem
  `};

  ${mq.tabletWide`
    font-size: 1rem
  `};
`;

export const InfoKey = styled.div`
  display: flex;
  min-width: 9rem;
  gap: 0.5rem;
  color: ${colors.gray};

  span {
    font-weight: 500;
  }
`;

export const InfoValue = styled.h4`
  flex: 3;
  margin: 0;
  max-width: 25rem;
  word-break: break-all;
  font-weight: 600;

  a {
    color: ${colors.azure};
  }
`;

export const SocialMediaIcons = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  padding: 0.8rem 1rem;

  path:first-child {
    fill: ${colors.green};
  }
`;

export const CompanyInformation = styled.ul`
  background-color: ${colors.white};
  border-radius: 0.625rem;
  flex: 2;
  margin: 0;
  padding: 2rem 1rem;

  h2 {
    margin-bottom: 0;
  }

  ${mq.tablet`
    max-width: 23rem;
  `}
`;

export const AboutAgent = styled.div`
  flex: 3;
  line-height: 1.25rem;
  margin-left: 0.5rem;

  p {
    word-break: break-all;
  }

  h2 {
    margin-top: 0.4rem;
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

export const IconLinkWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
