import checkbox from 'assets/icons/chackbox.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const SignUpContainer = styled.div`
  display: flex;
  gap: 7.5rem;
  justify-content: center;
  min-height: 100vh;
`;

export const ImageContainer = styled.div`
  align-items: center;
  background-color: ${colors.lightgrey2};
  display: none;
  flex: 1;
  justify-content: center;

  ${mq.desktopWide`
    display: flex;
  `}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding-right: 0;
  padding: 7.5rem;

  ${mq.desktopWide`
    padding: 7.5rem 0;
  `}
`;

export const Title = styled.h3`
  color: ${colors.black};
  font-size: 1.375rem;
  font-weight: bold;
  letter-spacing: -0.0229rem;
  margin: 0;
  padding-bottom: 1.25rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding-right: 7.5rem;
`;

export const SocialLinksContainer = styled.div`
  padding-right: 7.5rem;
`;

export const InputLabel = styled.label`
  color: ${colors.grey2};
  font-size: 0.9375rem;
  padding-bottom: 0.625rem;
`;

export const InputField = styled.input`
  border-radius: 1.1875rem;
  border: 1px solid ${colors.lightgrey3};
  padding: 0.625rem;

  ::placeholder {
    color: ${colors.lightgrey3};
  }

  &:focus {
    outline: 1px solid ${colors.lightgreen};
  }
`;

export const CheckboxInputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;

  label {
    padding: 0;
  }
`;

export const CheckboxInputField = styled.input`
  -moz-appearance: none;
  -o-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 4px;
  border: 2px solid ${colors.lightgrey3};
  cursor: pointer;
  height: 1.125rem;
  outline: none;
  width: 1.125rem;

  &:checked {
    background-repeat: no-repeat;
    background-size: contain;
    background: url(${checkbox});
    border: none;
  }
`;

export const PhoneInputContainer = styled.div`
  label {
    display: block;
  }
`;

export const PhoneInputField = styled(InputField)`
  border-radius: 0.375rem;
  margin-right: 1.5rem;
  width: 6.25rem;
`;

export const SubmitButton = styled.button`
  background-color: ${colors.lightgreen};
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

export const SignUpTerms = styled.p`
  color: ${colors.lightgrey4};
  font-size: 0.8125rem;
  letter-spacing: -0.0063rem;
  line-height: 1.25rem;
  margin-top: 1rem;
  text-align: center;
`;

export const LinkText = styled.a`
  color: ${colors.blue};
  cursor: pointer;
  font-size: 0.8125rem;
  letter-spacing: -0.0063rem;
  text-decoration: underline;
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 7.5rem;
  text-align: center;
`;

export const SocialLinksText = styled.p`
  border-top: ${({ borderTop }) =>
    borderTop && `1px solid ${colors.lightgrey3}`};
  color: ${colors.grey2};
  font-size: 0.9375rem;
  margin: 0;
  margin-top: ${({ borderTop }) => (borderTop ? '2.1875rem' : '0.9375rem')};
  padding: ${({ borderTop }) => borderTop && '1.5625rem'};

  a {
    font-size: 0.9375rem;
  }
`;

export const SocialButton = styled(SubmitButton)`
  align-items: center;
  background-color: ${colors.white};
  border: ${({ light }) => light && `1px solid ${colors.lightgrey3}`};
  color: ${({ light }) => light && colors.black};
  display: flex;
  font-weight: normal;
  gap: 2.9375rem;
  justify-content: center;
  ${({ blue }) => blue && `background-color: ${colors.blue}; gap: 2.1875rem;`}
  ${({ dark }) => dark && `background-color: ${colors.black}; gap: 3.75rem;`};
`;

export const ErrorMessage = styled.p`
  color: ${colors.red};
  font-size: 0.75rem;
  margin: 0.3125rem 0 0.9375rem 0;
`;
