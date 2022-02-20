import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8125rem;
  padding: 2rem 1.0625rem;

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
  gap: 2.8125rem;

  h1 {
    margin: 0;
  }
`;

export const TextArea = styled.textarea`
  background-color: ${colors.white};
  border-radius: 0.94rem;
  border: 0.08rem solid ${colors.mercury};
  height: 12.375rem;
  padding: 1.5rem 1.5rem;
  resize: none;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
`;

export const RequestLink = styled(Link)`
  color: ${colors.blue};
  font-size: 0.875rem;
  margin-left: 1rem;
`;

export const Comment = styled.div`
  align-items: center;
  border: 0.0823rem solid ${colors.mercury};
  display: flex !important;
  flex-direction: column;
  flex: 1;
  gap: 1.875rem;
  justify-content: space-between;
  padding: 2rem;

  ${mq.tablet`
    flex-direction:row
  `}
`;

export const CommentPhoto = styled.div`
  border-radius: 50%;
  height: 6.125rem;
  width: 6.25rem;
`;

export const CommentText = styled.div`
  display: inline;
  line-height: 1.1875rem;

  p {
    margin: 0;
  }

  span {
    color: ${colors.dustyGray};
    float: right;
    padding: 0.5rem;
  }
`;

export const CommentsWrapper = styled.div`
  display: none;

  ${mq.desktop`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.7rem;
  `}
`;

export const StyledSlide = styled.div`
  ${mq.desktop`
    display:none
  `}

  .slick-slider {
    width: 100%;
  }

  .slide-dots {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;

    > li {
      display: inline;
      margin: 0 0.3125rem;
      > button {
        background-color: ${colors.midGray};
        border-radius: 50%;
        border: none;
        cursor: pointer;
        font-size: 0;
        height: 0.75rem;
        padding: 0;
        width: 0.75rem;
      }
    }
  }

  .slide-dots li.slick-active button {
    background-color: ${colors.white};
    border: 0.125rem solid ${colors.green};
    height: 0.9375rem;
    width: 0.9375rem;
  }
`;

export const StyledImg = styled.img`
  border-radius: 50%;
  height: 5.625rem;
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
  cursor: pointer;
  display: flex;
  flex: 50%;
  font-size: 1.25rem;
  gap: 0.5rem;

  > svg {
    margin-bottom: 0.187rem;
  }

  > span {
    min-width: 10rem;
  }
`;

export const CommentSection = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
`;
