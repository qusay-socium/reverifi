import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const LoginContainer = styled.div`
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
  height: 100vh;

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

  > button {
    &:last-child {
      margin-top: 0.625rem;
    }
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export const LinkText = styled.a`
  color: ${colors.blue};
  cursor: pointer;
  font-size: 0.8125rem;
  text-decoration: underline;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const OrText = styled.div`
  margin: 0.9375rem 0 0.625rem 0;
  text-align: center;
`;

export const SocialButton = styled(Button)`
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
  border: 0.0625rem solid ${colors.mercury};
  color: ${colors.mineShaft};
`;
