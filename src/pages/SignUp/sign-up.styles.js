import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const SignUpContainer = styled.div`
  display: flex;
  min-height: 100vh;

  > div {
    flex: 1;
  }
`;

export const ImageContainer = styled.div`
  display: none;
  align-self: stretch;
  padding: 0 2rem;

  ${mq.desktopWide`
    background-color: ${colors.alabaster};
    display: flex;
    justify-content: center;

    svg {
      margin: auto;
    }
  `};
`;

export const InfoContainer = styled.div`
  align-self: center;
  flex: 1;
  padding: 1.5rem;

  ${mq.tabletWide`
    padding: 5rem 7rem 0;
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
  color: ${colors.mineShaft};
  font-size: 0.9375rem;
  padding-bottom: 0.625rem;
`;

export const PhoneInputContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  > div:first-child {
    max-width: 6rem;
  }
`;

export const SignUpTerms = styled.p`
  color: ${colors.dustyGray};
  font-size: 0.8125rem;
  line-height: 1.25rem;
  margin: 1rem 0 2rem 0;
  text-align: center;
`;

export const LinkText = styled.a`
  color: ${colors.blue};
  cursor: pointer;
  font-size: 0.8125rem;
  margin: 0 0.22rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const OrText = styled.div`
  text-align: center;
`;

export const SubmitButton = styled(Button)`
  font-size: 1rem;
`;

export const SocialButton = styled.button`
  background-color: ${colors.green};
  border-radius: 1.5rem;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 0.625rem;
  padding: 0.625rem;
  text-align: center;
  width: 100%;

  > div {
    display: flex;

    span {
      margin: auto 0 auto 2.8125rem;
      min-width: 10.7rem;
      text-align: left;
      font-size: 1rem;
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
  border: 0.0625rem solid ${colors.mercury};
  color: ${colors.mineShaft};
`;

export const SocialLinksText = styled.p`
  color: ${colors.mineShaft}7f;
  font-size: 0.9375rem;
  margin: 0;
  padding: 2.5rem 0;
  text-align: center;

  a {
    font-size: 0.9375rem;
  }
`;
