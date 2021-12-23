import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const MainContainer = styled.div`
  background: ${colors.white};
  border-radius: 0.56rem;
  box-shadow: 0rem 0.06rem 0.37rem ${colors.darkshadow};
  padding: 1.5rem 2.37rem;
`;

export const UserInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 0 1.68rem 0;

  ${mq.mobile`
    flex-direction: row;
  `}
`;

export const UserImg = styled.img`
  background: ${colors.midgrey};
  border-radius: 50%;
  margin: 0 1.5rem 0 0;
  max-height: 5.31rem;
  max-width: 5.31rem;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h3`
  color: ${colors.black};
  margin: 0.68rem 0 0.62rem 0;
  text-align: center;

  ${mq.mobile`
    text-align: left;
  `}
`;

export const DialButton = styled.button`
  align-items: center;
  background: ${colors.lightgreen};
  border-radius: 1.75rem;
  border: none;
  color: ${colors.white};
  display: flex;
  font-family: Montserrat;
  gap: 0.62rem;
  max-width: 8.5rem;
  outline: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;

export const SubmitButton = styled(DialButton)`
  font-weight: 600;
  margin: 1.37rem auto 0 auto;
  padding: 0.75rem 2.18rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  border-bottom: 0.06rem solid ${colors.midgrey};
  border: none;
  margin: 2.75rem 0 0 0;
  min-width: 100%;
  outline: none;

  ::placeholder {
    color: ${colors.grey};
  }

  :first-of-type {
    margin: 0;
  }
`;

export const Message = styled.textarea`
  border: 0.06rem solid ${colors.midgrey};
  margin: 0 0 0 0;
  min-height: 7rem;
  min-width: 100%;
  outline: none;
  resize: none;
`;

export const MessageLabel = styled.label`
  align-items: center;
  color: ${colors.grey};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2.75rem 0 0.62rem 0;
  min-width: 100%;

  span {
    font-size: 0.75rem;
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.red};
  font-size: 0.75rem;
  margin: 0 0 0.31rem 0;
`;
