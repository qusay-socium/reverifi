import { ReactComponent as heart } from 'assets/icons/agent-heart.svg';
import { ReactComponent as share } from 'assets/icons/agent-share.svg';
import { ReactComponent as like } from 'assets/icons/like.svg';
import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.0625rem 0.3125rem ${colors.midGrey};
  display: flex;
  flex-direction: column;
  margin: 0 0 1.5625rem;
  overflow: hidden;

  ${mq.desktop`
    flex-direction: row;
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
  object-fit: cover;
  width: 100%;

  ${mq.desktop`
    height:100%;
  `};
`;

export const CardContent = styled.div`
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8125rem 1rem 0;
`;

export const Username = styled.p`
  color: ${colors.liver};
  font-size: 1.125rem;
  font-weight: bold;
  letter-spacing: 0.125rem;
  line-height: 1.375rem;
  margin: 1.25rem 0 0.625rem 0;
`;

export const CompanyName = styled.p`
  color: ${colors.osloGrey};
  font-size: 0.875rem;
  margin: 0 0 0.625rem 0;
`;

export const ButtonsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  width: 3.75rem;
`;

export const FooterButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 3.75rem;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 8.75rem;
  margin: 0 1rem;
  overflow: hidden;
`;

export const ContactField = styled.div`
  align-items: center;
  display: flex;
  height: 2.5rem;
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
  color: ${colors.osloGrey};
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0 0 0 0.5rem;
`;

export const ContactText = styled.p`
  color: ${colors.black};
  font-weight: 600;
  line-height: 1.25rem;
`;

export const ContactEmail = styled.p`
  color: ${colors.blue};
  font-weight: 600;
  line-height: 1.25rem;
  text-decoration: underline;
`;

export const Line = styled.hr`
  border: 0.0625rem solid ${colors.mercury};
  margin: 0;
`;

export const HeartIcon = styled(heart)`
  width: 1.125rem;
  height: 1.125rem;
`;

export const LikeIcon = styled(like)`
  width: 1rem;
`;

export const ShareIcon = styled(share)`
  width: 1rem;
`;

export const RoundedButton = styled(Button)`
  border-radius: 50%;
  box-shadow: 0rem 0.0625rem 0.1875rem ${colors.mercury};
  color: ${colors.dustyGrey};
  margin: 0.125rem;

  :hover {
    background-color: ${colors.green};
    color: ${colors.white};
  }
`;

export const HeartButton = styled(Button)`
  border-radius: 50%;
  box-shadow: 0rem 0.0625rem 0.1875rem ${colors.mercury};
  color: ${colors.dustyGrey};
  left: 0.625rem;
  position: absolute;
  top: 0.625rem;

  :hover {
    background-color: ${colors.green};
    color: ${colors.white};
  }
`;

export const CardFooter = styled.div`
  align-items: center;
  display: flex;
  height: 3.89rem;
  justify-content: space-between;
  margin: 0 1rem;
`;

export const IconContainer = styled.div`
  width: 1.375rem;
`;
