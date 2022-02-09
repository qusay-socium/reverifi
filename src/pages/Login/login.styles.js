import { Error } from 'components/shared/FormInput/form-input.styles';
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
  padding: 2rem;

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
  padding: 2rem;
  height: 100vh;

  ${mq.desktop`
    padding: 15rem 7.6rem 0;
  `}

  ${mq.tabletWide`
     padding: 8rem 7.6rem 0;
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

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const PasswordInputRapper = styled.div`
  width: 100%;
`;

export const IconContainer = styled.div`
  bottom: 0.75rem;
  height: 0.9rem;
  position: absolute;
  right: 0.8rem;
  width: 1.6rem;

  svg {
    path {
      fill: ${({ active }) => (active ? colors.green : colors.gray)};
    }
  }

  &:hover {
    cursor: pointer;
    path {
      fill: ${colors.dustyGray};
    }
  }
`;

export const LinkText = styled.a`
  color: ${colors.blue};
  cursor: pointer;
  font-size: 0.8125rem;
  padding: 0.3rem;

  &:hover {
    text-decoration: underline;
  }
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
  font-size: 0.9rem;
  margin: 0;
  padding: 2.5rem 0;
  text-align: center;

  a {
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled(Error)`
  font-size: 0.8rem;
  margin: 0.5rem 0 0 0;
  padding: 0.3rem;
`;
