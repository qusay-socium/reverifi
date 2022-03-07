import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { LikeButtonWrapper, LikeIcon } from './like-button.styles';

/**
 * Like Button component
 *
 * @param {Boolean} active active state
 *
 * @return {JSX.Element}
 */
function LikeButton({ active }) {
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
    >
      <LikeIcon active={isLiked} />
    </LikeButtonWrapper>
  );
}

LikeButton.defaultProps = {
  active: false,
};

LikeButton.propTypes = {
  active: PropTypes.bool,
};

export default LikeButton;
