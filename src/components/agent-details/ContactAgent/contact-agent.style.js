import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';

export const Form = styled.form`
  background-color: ${colors.white};
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
  padding: 0 2rem;

  h2 {
    margin-bottom: 0;
    text-transform: capitalize;
  }

  button {
    align-self: center;
    margin-bottom: 1.2rem;
  }
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 0.08rem solid ${colors.mercury};
  font-size: 1.125rem;
`;

export const TextArea = styled.textarea`
  border: 0.08rem solid ${colors.mercury};
  height: 7rem;
  margin-top: 0.3rem;
  resize: none;
  width: 100%;

  ::placeholder {
    color: ${colors.mercury};
  }
`;

export const Label = styled.label`
  color: ${colors.grey};

  p {
    display: inline;
  }

  span {
    float: right;
    font-size: 0.75rem;
  }
`;

export const ContactButton = styled(Button)`
  font-size: 1rem;
  padding: 0 2rem;
`;
