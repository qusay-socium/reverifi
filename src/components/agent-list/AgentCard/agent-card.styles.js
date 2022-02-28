import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const ContactButton = styled(Button)`
  max-height: 2rem;
  padding: 0 1.2rem;

  :hover {
    box-shadow: 0 0.06rem 0.19rem ${colors.dustyGray};
  }
`;

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.06rem 0.3rem ${colors.midGray};
  display: flex;
  flex-direction: column;
  margin: 0 0 0.6rem;

  ${mq.desktop`
    flex-direction: row;
    height: 18.375rem;
  `};
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 12.5rem;

  ${mq.mobileWide`
    max-height: 17.5rem;
  `};

  ${mq.desktop`
    max-height: 31.25rem;
    width: 20rem;
  `};
`;

export const AgentPicture = styled.img`
  border-radius: 0.5rem 0 0 0.5rem;
  object-fit: cover;
  width: 100%;

  ${mq.desktop`
    height: 100%;
  `};
`;

export const CardContent = styled.div`
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 1rem 0.5rem;
  align-items: flex-start;
`;

export const Username = styled.p`
  color: ${colors.liver};
  font-size: 1.125rem;
  font-weight: bold;
  letter-spacing: 0.125rem;
  line-height: 1.375rem;
  margin: 0;
  margin-bottom: 0.6rem;
  max-width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CompanyName = styled.p`
  color: ${colors.osloGray};
  font-size: 0.87rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 18rem;

  ${mq.desktop`
    width: 15rem;
  `}
`;

export const CompanyNamePlaceholder = styled.div`
  width: 5rem;
  height: 0.9rem;
  margin: 0 0 0.6rem 0;
`;

export const ButtonsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 6.5rem;
  align-items: center;
  width: 3.75rem;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.75rem;
  margin: 0 1rem;
`;

export const ContactField = styled.div`
  align-items: center;
  display: flex;
  height: 2.5rem;
`;

export const EmailTooltip = styled.div`
  position: relative;

  &:hover {
    span {
      display: block;
    }
  }
`;

export const ContactProperty = styled.div`
  align-items: center;
  display: flex;
  margin: 0 1.25rem 0 0;
  width: 5.625rem;
`;

export const PropertyIconContainer = styled.div`
  color: ${colors.green};
  width: 1rem;
`;

export const PropertyText = styled.p`
  color: ${colors.osloGray};
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0 0 0 0.5rem;
`;

export const ContactText = styled.p`
  color: ${colors.black};
  font-weight: 600;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 12rem;

  ${mq.desktop`
    width: 14rem;
  `}
`;

export const ContactEmail = styled.a`
  color: ${colors.azure};
  display: inline-block;
  font-weight: 600;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 12rem;

  ${mq.desktop`
    width: 14rem;
  `}
`;

export const Line = styled.hr`
  margin: 0;
  opacity: 0.4;
`;

export const CardFooter = styled.div`
  align-items: center;
  display: flex;
  height: 3.9rem;
  justify-content: space-between;
  margin: 0 1rem;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  width: 1.375rem;
`;
