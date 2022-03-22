import { yupResolver } from '@hookform/resolvers/yup';
import submitOfferImage from 'assets/images/submit-offer.png';
import { ReactComponent as LocationIcon } from 'assets/location.svg';
import Button from 'components/shared/Button';
import FormInput from 'components/shared/FormInput';
import ListingImageInput from 'components/shared/ListingImageInput';
import Modal from 'components/shared/Modal';
import Toast from 'components/shared/Toast';
import { useShowModal } from 'contexts/ShowModalContext';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import useShowToastBar from 'hooks/use-show-toast-bar';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { createPurchaseOffer } from 'services/purchase-offer';
import { updatePhoneNumber } from 'services/user';
import { handleNumberInput } from 'utils/helpers';
import submitOfferSchema from './submit-offer-schema';
import {
  Container,
  FormContainer,
  HiddenInput,
  Location,
  Price,
  PriceContainer,
  SubmitOfferImage,
  TextContainer,
} from './submit-offer.style';

/**
 * Component for rendering submit offer modal.
 *
 * @return {JSX.Element}
 */
function SubmitOffer() {
  const { modalData, setModalData } = useShowModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const { userInfo } = useUser();
  const listing = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(submitOfferSchema),
  });

  const submit = async ({ price, phone }) => {
    const createOfferData = {
      createdBy: userInfo?.id,
      listingId: listing?.id,
      price,
    };
    const updatePhoneData = { id: userInfo?.id, phone };
    await createPurchaseOffer(createOfferData);
    if (!phoneNumber) {
      await updatePhoneNumber(updatePhoneData);
    }
    setIsSubmitted(true);
  };

  const checkPhoneNumber = async () => {
    if (userInfo?.phone) {
      setPhoneNumber(userInfo?.phone);
      setValue('showPhoneNumber', false);
    }
  };

  useEffectOnce(checkPhoneNumber);

  /**
   * hook that hide success toast message after n duration in seconds submitted
   */
  useShowToastBar(isSubmitted, setIsSubmitted);

  return (
    <Modal
      show={modalData?.isShowOffer}
      handleClose={() => {
        setModalData((data) => ({ ...data, isShowOffer: false }));
      }}
    >
      <Container>
        <SubmitOfferImage src={submitOfferImage} />
        <TextContainer>
          <PriceContainer>
            <h2>Purchase Offer</h2>
            <Price>$ {modalData?.price.toLocaleString()}</Price>
            <Location>
              <LocationIcon />
              {modalData?.address}
            </Location>
          </PriceContainer>
          <FormContainer onSubmit={handleSubmit(submit)}>
            <FormInput
              error={errors?.price?.message}
              label="Offer Price"
              name="price"
              register={register}
              maxLength="7"
              onChange={(e) => {
                handleNumberInput(e);
                setValue('price', e.target.value);
              }}
            />
            {!phoneNumber && (
              <FormInput
                label="Phone Number"
                name="phone"
                register={register}
                error={errors?.phone?.message}
                type="text"
                maxLength="10"
                onChange={handleNumberInput}
              />
            )}
            <HiddenInput
              type="checkbox"
              defaultChecked="true"
              {...register('showPhoneNumber')}
            />
            <ListingImageInput label="Mortgage Pre-Approval Letter" />
            <Button type="submit">Submit</Button>
          </FormContainer>
          {isSubmitted && (
            <Toast status="success" message="Your offer is submitted" />
          )}
        </TextContainer>
      </Container>
    </Modal>
  );
}

export default SubmitOffer;
