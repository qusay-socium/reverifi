import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getUserOrListingSave,
  saveUserOrListing,
  viewOrShareUserOrListing,
} from 'services/social-statistics';
import {
  ButtonsContainer,
  HeartIcon,
  RoundedButton,
  ShareIcon,
} from './save-and-share-buttons.styles';

/**
 * Save And Share Buttons component
 *
 * @param {String} userId            user id
 * @param {String} listingId         listing id
 * @param {Function} setShowModal    show modal function
 * @param {Boolean} small            small icons if true
 *
 *@return {JSX.Element}
 */
function SaveAndShareButtons({ userId, listingId, setShowModal, small }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();
  const [saved, setSaved] = useState(false);

  /**
   * handle save
   */
  const handleSave = async () => {
    if (!isLoggedIn) navigate('/login');

    setSaved(!saved);

    await saveUserOrListing({ listingId, userId });
  };

  /**
   * handle get user saved
   */
  const fetchSave = async () => {
    try {
      const data = await getUserOrListingSave(userId || '', listingId || '');
      if (data) setSaved(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffectOnce(fetchSave);

  const handleShare = async () => {
    await viewOrShareUserOrListing({
      listingId,
      type: 'shares',
      userId,
    });
  };

  return (
    <ButtonsContainer small={small}>
      <RoundedButton onClick={handleSave} active={saved} small={small}>
        <HeartIcon small={small} />
      </RoundedButton>
      <RoundedButton
        onClick={() => {
          handleShare();
          setShowModal(true);
        }}
        small={small}
      >
        <ShareIcon />
      </RoundedButton>
    </ButtonsContainer>
  );
}

SaveAndShareButtons.defaultProps = {
  listingId: null,
  setShowModal: () => {},
  small: null,
  userId: null,
};

SaveAndShareButtons.propTypes = {
  listingId: PropTypes.string,
  setShowModal: PropTypes.func,
  small: PropTypes.string,
  userId: PropTypes.string,
};

export default SaveAndShareButtons;
