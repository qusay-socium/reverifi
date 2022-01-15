import Button from 'components/shared/Button';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const MainContainer = styled.div`
  border-radius: 0.56rem;
  box-shadow: 0rem 0.06rem 0.37rem ${colors.dustyGray};
  margin-top: 1rem;
  height: 100%;
  padding: 1.5rem 2.37rem;

  ${mq.desktop`
    margin-top: 0;
    min-width: 25rem;
  `};
`;

export const UserInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.68rem;

  ${mq.mobile`
    flex-direction: row;
  `}
`;

export const UserImg = styled.img`
  border-radius: 50%;
  margin: 0 1.5rem 0 0;
  max-height: 5.31rem;
  max-width: 5.31rem;
`;

export const UserName = styled.h3`
  margin: 0.68rem 0 0.62rem 0;
  text-align: center;

  ${mq.mobile`
    text-align: left;
  `}
`;

export const DialButton = styled(Button)`
  align-items: center;
  display: flex;
  padding: 0.75rem 1rem;
`;

export const DialButtonContent = styled.div`
  align-items: center;
  display: flex;
  font-weight: normal;
  gap: 0.62rem;
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.37rem 0 0 0;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 0.06rem solid ${colors.midGray};
  margin: 2.75rem 0 0 0;
  min-width: 100%;

  :first-of-type {
    margin: 0;
  }
`;

export const Message = styled.textarea`
  border: 0.06rem solid ${colors.midGray};
  min-height: 7rem;
  min-width: 100%;
  resize: none;
`;

export const MessageLabel = styled.label`
  align-items: center;
  color: ${colors.gray};
  display: flex;
  justify-content: space-between;
  margin: 2.75rem 0 0.62rem 0;

  span {
    font-size: 0.75rem;
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.red};
  font-size: 0.75rem;
`;
