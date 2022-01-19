import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGrey};
  margin-top: 1rem;
  height: 100%;
  padding: 1.5rem 2rem;

  ${mq.desktop`
    margin-top: 0;
    min-width: 25rem;
  `};
`;

export const UserInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  ${mq.mobile`
    flex-direction: row;
  `}
`;

export const UserImg = styled.img`
  border-radius: 50%;
  margin: 0 1.5rem 0 0;
`;

export const DialButtonContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 0.06rem solid ${colors.midGrey};
  min-width: 100%;
  font-size: 1rem;
  margin-top: 2.5rem;
  padding: 0.5rem 0 0.5rem 0;

  &:focus {
    border-color: ${colors.green};
    outline: none;
  }
`;

export const Message = styled.textarea`
  border: 0.06rem solid ${colors.midGrey};
  min-height: 9.5rem;
  min-width: 100%;
  resize: none;
  font-size: 1rem;
  font-family: Montserrat;

  &:focus {
    border-color: ${colors.green};
    outline: none;
  }
`;

export const MessageLabel = styled.label`
  align-items: center;
  color: ${colors.gray};
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0 0.5rem 0;

  span {
    font-size: 0.75rem;
  }
`;

export const ErrorMessage = styled.span`
  color: ${colors.red};
  font-size: 0.75rem;
`;
