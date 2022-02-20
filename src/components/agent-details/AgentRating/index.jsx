import AgentPhoto from 'assets/agent-photo.png';
import { ReactComponent as Like } from 'assets/icons/agent-detailes-like.svg';
import Button from 'components/shared/Button';
import LikeButton from 'components/shared/LikeButton';
import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  Comment,
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
} from './agent-rating.style';

/**
 * Rating and review section.
 *
 * @return {JSX.Element}
 */
function AgentRating() {
  const [likes, setLikes] = useState({
    Responsiveness: false,
    Knowledgeable: false,
    Trustworthy: false,
    Helpful: false,
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
        <h1>Rating And Reviews</h1>
        <RatingBoxContainer>
          {Object.entries(likes).map(([name, value]) => (
            <RatingBox key={name} onClick={() => onLike(name)}>
              <span>{name}</span>
              {value ? <Like /> : <LikeButton />}
            </RatingBox>
          ))}
        </RatingBoxContainer>
        <TextArea placeholder="Write Your Review" />
        <div>
          <Button ariaLabel="Submit">Submit</Button>
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
                  <h3>Jhone Doe</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </p>
                  <span>8 days ago</span>
                </CommentText>
                <LikeButton />
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
              <h3>Jhone Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <span>8 days ago</span>
            </CommentText>
            <LikeButton />
          </Comment>
        ))}
      </CommentsWrapper>
    </RatingContainer>
  );
}

export default AgentRating;
