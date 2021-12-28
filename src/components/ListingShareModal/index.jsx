import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as FacebookIcon } from 'assets/icons/share-listing-facebook.svg';
import { ReactComponent as ShareImg } from 'assets/icons/share-listing-main.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/share-listing-twitter.svg';
import { ReactComponent as WhatsAppIcon } from 'assets/icons/share-listing-whatsapp.svg';
import Button from 'components/shared/Button';
import FormInput from 'components/shared/FormInput';
import Modal from 'components/shared/Modal';
import { useShowModal } from 'contexts/ShowModalContext';
import React from 'react';
import { useForm } from 'react-hook-form';
import listingShareModalSchema from './listing-share-modal-schema';
import {
  InfoContainer,
  InputWrapper,
  ShareContainer,
  ShareForm,
  ShareWithText,
  SocialIconsContainer,
  Title,
} from './listing-share-modal.styles';

/**
 * Component for rendering share listing modal.
 *
 * @return {JSX.Element}
 */
function ListingShareModal() {
  const { showModal, setShowModal } = useShowModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(listingShareModalSchema),
  });

  /**
   * Handle form submit
   */
  const submit = () => {
    setShowModal(!showModal);
    reset();
  };

  /**
   * Handle modal close
   */
  const handleClose = () => {
    setShowModal(!showModal);
    reset();
  };

  return (
    <Modal show={showModal} handleClose={handleClose}>
      <ShareContainer>
        <ShareImg />

        <InfoContainer>
          <Title>Share Listing by email</Title>
          <ShareForm onSubmit={handleSubmit(submit)}>
            <InputWrapper>
              <FormInput
                error={errors.name?.message}
                label="Name"
                name="name"
                placeholder="eg: Jhon Doe"
                register={register}
              />
            </InputWrapper>
            <InputWrapper>
              <FormInput
                error={errors.email?.message}
                label="E-mail"
                name="email"
                placeholder="eg: Jhon@domain.com"
                register={register}
              />
            </InputWrapper>
            <Button type="submit">Send</Button>
          </ShareForm>

          <div>
            <ShareWithText>Or share with</ShareWithText>
            <SocialIconsContainer>
              <FacebookIcon />
              <TwitterIcon />
              <WhatsAppIcon />
            </SocialIconsContainer>
          </div>
        </InfoContainer>
      </ShareContainer>
    </Modal>
  );
}

export default ListingShareModal;
