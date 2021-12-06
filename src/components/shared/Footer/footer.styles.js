import colors from 'styles/colors';
import mq from 'styles/media-query';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialMediaIcons = styled.div`
  display: flex;
  background: ${colors.whiteSand};
  padding: 0.9375rem 0rem 0rem 0.9375rem;

  svg {
    margin: 1.438rem 0.625rem 0 0;
  }

  ${mq.tablet`
      justify-content: center;
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.whiteSand};
  padding: 2.0625rem 0em 2.0625rem 1.0625rem;

  ${mq.tablet`
    flex-direction:row;
    flex-wrap: wrap;
    row-gap: 1.25rem;
    justify-content: space-evenly;
    padding-bottom: 3.0625rem;
    column-gap: 0.625rem;
  `}
`;

export const ContactInfo = styled.div`
  display: flex;
  column-gap: 0.625rem;
  align-items: center;
  color: ${colors.green};
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding-bottom: 1.8125rem;
`;

export const InfoGroupHeader = styled.p`
  color: ${colors.green};
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.875rem;
  width: max-content;
`;

export const InfoGroupItem = styled(Link)`
  font-size: 0.875rem;
  color: ${colors.gray};
  text-decoration: none;
  width: max-content;
`;

export const EmailLink = styled.a`
  font-size: 0.875rem;
  color: ${colors.gray};
  text-decoration: none;
`;

export const SubscribeWrapper = styled.div`
  color: ${colors.green};
`;

export const SubscribeInputWrapper = styled.div`
  height: 2.375rem;
  max-width: 21.25rem;
`;

export const FooterWrapper = styled.div`
  background-color: ${colors.mineShaft};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.125rem;

  p {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  padding: 0rem;
  border: none;
  cursor: pointer;
  color: ${colors.white};
  background-color: ${colors.green};
  height: 2.375rem;
  border-radius: 1.75rem;
  padding: 0 2rem;
`;
