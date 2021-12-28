import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const LoginContainer = styled.div`
  display: flex;
  gap: 11.875rem;
  justify-content: center;
  min-height: 100vh;
`;

export const ImageContainer = styled.div`
  align-items: center;
  background-color: ${colors.alabaster};
  display: none;
  flex: 1;
  justify-content: center;

  ${mq.mobile`
    display: flex;
  `}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 4.6875rem 0 4.6875rem 11.875rem;

  ${mq.mobile`
    padding: 4.6875rem 0;
  `}
`;

export const Title = styled.h3`
  color: ${colors.mineShaft};
  font-size: 1.375rem;
  font-weight: bold;
  letter-spacing: -0.0229rem;
  margin: 0;
  padding-bottom: 1.25rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding-right: 11.875rem;
`;

export const LinkText = styled.a`
  color: ${colors.blue};
  cursor: pointer;
  font-size: 0.8125rem;
  text-decoration: underline;
`;

export const CheckboxInputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.3125rem;
  margin-bottom: 1.25rem;

  label {
    padding: 0;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${colors.green};
  border-radius: 1.5rem;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-weight: 600;
  letter-spacing: -0.0067rem;
  margin-top: 0.625rem;
  padding: 0.625rem;
  text-align: center;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 11.875rem;
  text-align: center;
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.25rem;
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

export const OrText = styled.div`
  margin: 0.9375rem 0 0.625rem 0;
  text-align: center;
`;
