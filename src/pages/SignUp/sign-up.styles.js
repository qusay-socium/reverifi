import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const SignUpContainer = styled.div`
  display: flex;

  > div {
    flex: 1;
  }
`;

export const ImageContainer = styled.div`
  display: none;

  ${mq.tabletWide`
    background-color: ${colors.alabaster};
    display: flex;
    justify-content: center;

    svg {
      width: 100%;
    } 
  `}

  ${mq.desktop`
    svg {
      margin: auto;
    }
  `}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;

  ${mq.tabletWide`
    padding: 6.9375rem 7.625rem 0;
  `}
`;

export const Title = styled.h3`
  color: ${colors.mineShaft};
  font-size: 1.375rem;
  margin: 0 0 1.25rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  color: ${colors.mineShaft}7f;
  font-size: 0.9375rem;
  padding-bottom: 0.625rem;
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const SubmitButton = styled.button`
  background-color: ${colors.green};
  border-radius: 1.5rem;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.625rem;
  padding: 0.625rem;
  text-align: center;
`;

export const SignUpTerms = styled.p`
  color: ${colors.dustyGrey};
  font-size: 0.8125rem;
  line-height: 1.25rem;
  margin: 1rem 0 2rem 0;
  text-align: center;
`;

export const LinkText = styled.a`
  color: ${colors.blue};
  cursor: pointer;
  font-size: 0.8125rem;
  text-decoration: underline;
`;

export const OrText = styled.div`
  text-align: center;
`;

export const SocialButton = styled(SubmitButton)`
  font-weight: normal;
  justify-content: center;
  display: flex;
  width: 100%;

  > div {
    display: flex;

    span {
      margin: auto 0 auto 2.8125rem;
      min-width: 9.0625rem;
      text-align: left;
    }
  }
`;

export const FacebookButton = styled(SocialButton)`
  background-color: ${colors.blue};
`;

export const AppleButton = styled(SocialButton)`
  background-color: ${colors.mineShaft};
`;

export const GoogleButton = styled(SocialButton)`
  background-color: ${colors.white};
  border: 1px solid ${colors.mercury};
  color: ${colors.mineShaft};
`;

export const SocialLinksText = styled.p`
  border-top: ${({ borderTop }) => borderTop && `1px solid ${colors.mercury}`};
  color: ${colors.mineShaft}7f;
  font-size: 0.9375rem;
  margin: 0;
  margin-top: ${({ borderTop }) => (borderTop ? '2.1875rem' : '0.9375rem')};
  padding: ${({ borderTop }) => borderTop && '1.5625rem'};

  a {
    font-size: 0.9375rem;
  }
`;
