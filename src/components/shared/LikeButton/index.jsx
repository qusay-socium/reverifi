import { ReactComponent as Like } from 'assets/icons/agent-detailes-like.svg';
import { ReactComponent as GrayEmptyLike } from 'assets/icons/agent-list-empty-like.svg';
import { ReactComponent as GrayLike } from 'assets/icons/agent-list-like.svg';
import { ReactComponent as EmptyLike } from 'assets/icons8-share.svg';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { LikeButtonWrapper } from './like-button.styles';

/**
 * Like Button component
 *
 * @return {JSX.Element}
 */
function LikeButton({ grayIcon, active }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <LikeButtonWrapper
      onClick={() => {
        setIsLiked(!isLiked);
      }}
      active={isLiked}
    >
      {grayIcon ? (
        <>
          <GrayLike />
          <GrayEmptyLike />
        </>
      ) : (
        <>
          <Like />
          <EmptyLike />
        </>
      )}
    </LikeButtonWrapper>
  );
}

LikeButton.defaultProps = {
  active: false,
  grayIcon: false,
};

LikeButton.propTypes = {
  active: PropTypes.bool,
  grayIcon: PropTypes.bool,
};

export default LikeButton;
