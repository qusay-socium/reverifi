import { yupResolver } from '@hookform/resolvers/yup';
import AgentPhoto from 'assets/icons/agent-list-avatar-placeholder.svg';
import Button from 'components/shared/Button';
import TextAreaInput from 'components/shared/FormTextArea';
import LikeButton from 'components/shared/LikeButton';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addReview,
  getRatingCriteria,
  getReviews,
  updateReview,
} from 'services/reviews';
import { getDatesDifference, toUpperCaseFirstLetter } from 'utils/helpers';
import agentRatingSchema from './agent-rating-schema';
import {
  ButtonsContainer,
  CancelButton,
  Comment,
  CommentSection,
  CommentsWrapper,
  CommentText,
  EditIcon,
  EditIconContainer,
  RatingBox,
  RatingBoxContainer,
  RatingContainer,
  RatingForm,
  RatingText,
  RatingTextContainer,
  ReviewDate,
  StyledImg,
} from './agent-rating.style';

/**
 * Rating and review section.
 *
 * @return {JSX.Element}
 */
function AgentRating() {
  const { id: userId } = useParams();
  const { userInfo: authInfo, isLoggedIn } = useUser();
  const navigate = useNavigate();

  const [ratingCriteria, setRatingCriteria] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [editMode, setEditMode] = useState({ active: false, editedReview: {} });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
    clearErrors,
  } = useForm({
    resolver: yupResolver(agentRatingSchema),
  });

  /**
   * handle rate click
   */
  const handleRate = (id) => {
    if (!isLoggedIn) {
      navigate('/login');
    }

    if (selectedCriteria.find((selectedId) => selectedId === id)) {
      setSelectedCriteria((prev) =>
        prev.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedCriteria((prev) => [...prev, id]);
    }
  };

  /**
   * fetch user rating criteria
   */
  const fetchRatingCriteriaAndUserReviews = async () => {
    const criteria = await getRatingCriteria('user');
    setRatingCriteria(criteria);

    const reviews = await getReviews(userId);
    setUserReviews(reviews);
  };

  /**
   * handle form submit
   */
  const submit = async ({ review }) => {
    if (!isLoggedIn) {
      navigate('/login');
    }

    if (editMode.active) {
      await updateReview({
        review,
        reviewId: editMode.editedReview?.id,
        selectedCriteria,
      });

      setEditMode({ active: false, review: {} });
    } else {
      await addReview({ review, selectedCriteria, userId });
    }

    setSelectedCriteria([]);
    setValue('review', '');
    setFocus('review');
    fetchRatingCriteriaAndUserReviews();
  };

  /**
   * handle review edit
   */
  const handleReviewEdit = (editedReview) => {
    clearErrors();

    setEditMode({
      active: true,
      editedReview,
    });

    setSelectedCriteria(editedReview?.ratings?.map((rate) => rate.id));

    setValue('review', editedReview.review);
    setFocus('review');
  };

  useEffectOnce(fetchRatingCriteriaAndUserReviews);

  return (
    <RatingContainer>
      <RatingForm onSubmit={handleSubmit(submit)}>
        <h1>Rating And Reviews</h1>
        {editMode.active ? (
          <>
            <RatingBoxContainer>
              {ratingCriteria?.map(({ id, criteria: text }) => (
                <RatingBox key={id} onClick={() => handleRate(id)}>
                  <span>{text}</span>
                  <LikeButton active={selectedCriteria.includes(id)} />
                </RatingBox>
              ))}
            </RatingBoxContainer>
            <TextAreaInput
              name="review"
              limit={300}
              placeholder="Write your Review"
              register={register}
              error={errors.review?.message}
              required
            />
            <ButtonsContainer>
              <Button type="submit">Save</Button>
              <CancelButton
                onClick={() => {
                  setEditMode(false);
                  setValue('review', '');
                  setFocus('review');
                  clearErrors();
                  setSelectedCriteria([]);
                }}
              >
                Cancel
              </CancelButton>
            </ButtonsContainer>
          </>
        ) : (
          <>
            <RatingBoxContainer>
              {ratingCriteria?.map(({ id, criteria: text }) => (
                <RatingBox key={id} onClick={() => handleRate(id)}>
                  <span>{text}</span>
                  <LikeButton active={selectedCriteria.includes(id)} />
                </RatingBox>
              ))}
            </RatingBoxContainer>
            <TextAreaInput
              name="review"
              limit={300}
              placeholder="Write your Review"
              register={register}
              error={errors.review?.message}
              required
            />
            <Button ariaLabel="Submit" type="submit">
              Submit
            </Button>
          </>
        )}
      </RatingForm>

      <CommentsWrapper>
        {userReviews?.map(({ id, createdAt, ratings, review, reviewer }) => (
          <Comment key={id}>
            {authInfo?.id === reviewer?.id && (
              <EditIconContainer
                hover
                onClick={() => handleReviewEdit({ id, ratings, review })}
              >
                <EditIcon />
                <Tooltip
                  text="Edit "
                  arrowPosition="top"
                  position={[2.8, -1]}
                />
              </EditIconContainer>
            )}

            <StyledImg src={reviewer?.userInfo?.image || AgentPhoto} />
            <CommentSection>
              <CommentText>
                <h3>{toUpperCaseFirstLetter(reviewer?.name)}</h3>
                <p>{review}</p>

                <RatingTextContainer>
                  {ratings?.map(({ criteria }, i) => (
                    <RatingText key={criteria}>
                      {criteria} {i + 1 !== ratings.length && '|'}
                    </RatingText>
                  ))}

                  <ReviewDate>
                    {getDatesDifference(createdAt) === 1
                      ? 'Just now'
                      : `${getDatesDifference(createdAt)} days ago`}
                  </ReviewDate>
                </RatingTextContainer>
              </CommentText>
            </CommentSection>
          </Comment>
        ))}
      </CommentsWrapper>
    </RatingContainer>
  );
}

export default AgentRating;
