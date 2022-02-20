import { ReactComponent as Like } from 'assets/icons/agent-detailes-like.svg';
import { ReactComponent as EmptyLike } from 'assets/icons8-share.svg';
import React, { useState } from 'react';
import { LikeButtonWrapper } from './like-button.styles';

/**
 * Like Button component
 *
 * @return {JSX.Element}
 */
function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <LikeButtonWrapper onClick={() => setIsLiked(!isLiked)} active={isLiked}>
      <Like />
      <EmptyLike />
    </LikeButtonWrapper>
  );
}

export default LikeButton;
