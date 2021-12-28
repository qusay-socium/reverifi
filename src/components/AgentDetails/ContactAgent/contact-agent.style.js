import colors from 'styles/colors';
import mq from 'styles/media-query';
import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${colors.white};
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 1.375rem;
  font-weight: 600;
  gap: 3rem;

  p {
    margin-bottom: 0;
  }

  ${mq.tablet`
    padding: 0 2rem;
  `}
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 0.0823rem solid ${colors.mercury};
  font-size: 1.125rem;
  outline: none;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  margin-top: 0.3125rem;
  outline: none;
  border: 0.0823rem solid ${colors.mercury};
  height: 7rem;

  ::placeholder {
    color: ${colors.mercury};
  }
`;

export const Label = styled.label`
  color: ${colors.grey};
  font-size: 1rem;

  p {
    display: inline;
    margin: 0;
  }

  span {
    float: right;
    font-size: 0.75rem;
    margin: 0;
  }
`;
