import { ReactComponent as editIcon } from 'assets/icons/edit.svg';
import Button from 'components/shared/Button';
import { IconContainer } from 'components/shared/Table/table-styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  padding: 2rem 1.06rem;

  ${mq.tablet`
    flex :1;
    padding: 2rem 3rem;
  `};

  ${mq.desktop`
    flex-direction : row;
  `};
`;

export const RatingForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.8rem;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 2rem;
  }

  > button {
    font-weight: 600;
    font-size: 0.9rem;
    align-self: flex-start;
  }

  textarea {
    min-height: 12.3rem;
    padding: 1.5rem 1.5rem;
    resize: none;
    font-family: inherit;
    font-size: 1rem;
    box-shadow: 0 0.06rem 0.38rem ${colors.mercury};

    ::placeholder {
      color: ${colors.dustyGray};
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
`;

export const RequestLink = styled(Link)`
  color: ${colors.azure};
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 600;
`;

export const Comment = styled.div`
  align-items: flex-start;
  border: 0.08rem solid ${colors.mercury};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0.06rem 0.38rem ${colors.mercury};
  border-radius: 0.38rem;
  position: relative;

  ${mq.tablet`
    flex-direction:row
  `}
`;

export const CommentText = styled.div`
  h3 {
    font-weight: 600;
    font-size: 1rem;
    margin: 0.8rem 0;
  }

  p {
    margin: 0;
    text-align: justify;
    line-height: 1.25rem;
    word-break: break-all;
    margin-bottom: 0.5rem;
  }
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.4rem;
  position: relative;
  max-height: 40rem;
  overflow-y: auto;
`;

export const StyledImg = styled.img`
  border-radius: 50%;
  height: 6.25rem;
  width: 6.25rem;
`;

export const RatingBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.tablet`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;

export const RatingBox = styled.div`
  align-items: center;
  display: flex;
  flex: 50%;
  font-size: 1.25rem;
  gap: 0.5rem;
  margin: 0.15rem 0;

  > span {
    font-weight: 500;
    min-width: 10rem;
  }
`;

export const CommentSection = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  flex: 1;
`;

export const RatingText = styled.span`
  display: inline-block;
  color: ${colors.green};
  font-weight: 500;
  font-size: 0.85rem;
  padding-right: 0.2rem;
`;

export const ReviewDate = styled.span`
  display: inline-block;
  color: ${colors.dustyGray};
  font-weight: 500;
  font-size: 0.7rem;
  letter-spacing: 0.09rem;
  margin-left: auto;
`;

export const EditIconContainer = styled(IconContainer)`
  position: absolute;
  top: 1.1rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background: ${({ hover }) => hover && colors.whiteSand};
  }

  span {
    padding: 0.5rem 1.25rem;
  }
`;

export const EditIcon = styled(editIcon)`
  &:hover {
    + span {
      display: block;
    }
  }
`;

export const CancelButton = styled(Button)`
  background-color: ${colors.white};
  border: 0.06rem solid ${colors.gray};
  color: ${colors.gray};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  > button {
    font-size: 1rem;
    padding: 0 2.1rem;
  }
`;

export const RatingTextContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin: 0.8rem 0;
`;
