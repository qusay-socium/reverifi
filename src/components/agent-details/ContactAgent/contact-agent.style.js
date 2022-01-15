import styled from 'styled-components';
import colors from 'styles/colors';

export const Form = styled.form`
  background-color: ${colors.white};
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-weight: 600;
  gap: 3rem;
  padding: 0 2rem;

  h2 {
    margin-bottom: 0;
  }
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 0.0823rem solid ${colors.mercury};
  font-size: 1.125rem;
`;

export const TextArea = styled.textarea`
  border: 0.0823rem solid ${colors.mercury};
  height: 7rem;
  margin-top: 0.3125rem;
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
