import React, { useState } from 'react';
import Slider from 'react-slick';
import { ReactComponent as Like } from 'assets/like.svg';
import { ReactComponent as EmptyLike } from 'assets/icons8-share.svg';
import AgentPhoto from 'assets/agent-photo.png';
import Button from 'components/shared/Button';
import {
  Comment,
  CommentLike,
  CommentSection,
  CommentsWrapper,
  CommentText,
  RatingBox,
  RatingBoxContainer,
  RatingContainer,
  RatingForm,
  RequestLink,
  StyledImg,
  StyledSlide,
  TextArea,
  Title,
} from './agent-rating.style';

/**
 * Rating and review section.
 *
 * @return {JSX.Element}
 */
function AgentRating() {
  const [likes, setLikes] = useState({
    Helpful: false,
    Knowledgeable: false,
    Responsiveness: false,
    Trustworthy: false,
  });

  /**
   * Like button handler.
   *
   * @param {String} itemName  item to be rated
   */
  const onLike = (itemName) => {
    setLikes({
      ...likes,
      [itemName]: !likes[itemName],
    });
  };

  return (
    <RatingContainer>
      <RatingForm>
        <Title>Rating And Reviews</Title>
        <RatingBoxContainer>
          {Object.entries(likes).map(([name, value]) => (
            <RatingBox key={name} onClick={() => onLike(name)}>
              {value ? <Like /> : <EmptyLike />}
              {name}
            </RatingBox>
          ))}
        </RatingBoxContainer>
        <TextArea placeholder="Write Your Review" />
        <div>
          <Button ariaLabel="Submit" onClick={() => {}}>
            Submit
          </Button>
          <RequestLink to="/">Request Reverifi Review</RequestLink>
        </div>
      </RatingForm>

      <StyledSlide>
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dotsClass="slide-dots"
          lazyLoad="ondemand"
          arrows={false}
          easing="ease-in-out"
        >
          {[1, 2, 3].map((index) => (
            <Comment key={index}>
              <StyledImg src={AgentPhoto} />
              <CommentSection>
                <CommentText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  <span>8 days ago</span>
                </CommentText>
                <CommentLike>
                  <Like />
                </CommentLike>
              </CommentSection>
            </Comment>
          ))}
        </Slider>
      </StyledSlide>

      <CommentsWrapper>
        {[1, 2, 3].map((index) => (
          <Comment key={index}>
            <StyledImg src={AgentPhoto} />
            <CommentText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              <span>8 days ago</span>
            </CommentText>
            <CommentLike>
              <Like />
            </CommentLike>
          </Comment>
        ))}
      </CommentsWrapper>
    </RatingContainer>
  );
}

export default AgentRating;
