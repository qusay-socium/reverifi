import checkbox from 'assets/icons/chackbox.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const SignUpContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 7.5rem;
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-color: ${colors.lightgrey2};
  display: none;
  align-items: center;
  justify-content: center;

  ${mq.desktopWide`
    display: flex;
  `}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 7.5rem;
  padding-right: 0;

  ${mq.desktopWide`
    padding: 7.5rem 0;
  `}
`;

export const Title = styled.h3`
  color: ${colors.black};
  font-weight: bold;
  font-size: 1.375rem;
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
  padding-bottom: 0.625rem;
  font-size: 15px;
  color: ${colors.grey2};
`;

export const InputField = styled.input`
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  border: 1px solid ${colors.lightgrey3};
  border-radius: 1.1875rem;

  ::placeholder {
    color: ${colors.lightgrey3};
  }

  &:focus {
    outline: 1px solid ${colors.lightgreen};
  }
`;

export const CheckboxInputContainer = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    padding: 0;
  }
`;

export const CheckboxInputField = styled.input`
  height: 1.125rem;
  width: 1.125rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border-radius: 4px;
  outline: none;
  border: 2px solid ${colors.lightgrey3};
  cursor: pointer;

  &:checked {
    border: none;
    background: url(${checkbox});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const PhoneInputContainer = styled.div`
  label {
    display: block;
  }
`;

export const PhoneInputField = styled(InputField)`
  border-radius: 0.375rem;
  width: 6.25rem;
  margin-right: 1.5rem;
`;

export const SubmitButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.lightgreen};
  border-radius: 1.5rem;
  text-align: center;
  padding: 0.625rem;
  border: none;
  font-weight: 600;
  letter-spacing: -0.0067rem;
  cursor: pointer;
  margin-top: 0.625rem;
`;

export const SignUpTerms = styled.p`
  margin-top: 1rem;
  font-size: 13px;
  color: ${colors.lightgrey4};
  letter-spacing: -0.0063rem;
  text-align: center;
  line-height: 1.25rem;
`;

export const LinkText = styled.a`
  color: ${colors.blue};
  text-decoration: underline;
  letter-spacing: -0.0063rem;
  font-size: 0.8125rem;
  cursor: pointer;
`;
