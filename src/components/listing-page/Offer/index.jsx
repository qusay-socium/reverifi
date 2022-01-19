import { ReactComponent as BellIcon } from 'assets/images/bell.svg';
import { ReactComponent as HeartIcon } from 'assets/images/heart.svg';
import { ReactComponent as MoreOptionsIcon } from 'assets/images/more-horizontal.svg';
import { ReactComponent as ShareIcon } from 'assets/images/share.svg';
import { ReactComponent as LocationPinIcon } from 'assets/images/location-pin.svg';
import {
  SideButtonsContainer,
  Container,
  OfferDetails,
  Location,
  LocationText,
  LogoButton,
  Price,
  SubmitButton,
  SubmitOffer,
} from 'components/listing-page/Offer/offer.styles';
import { useShowModal } from 'contexts/ShowModalContext';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Offer details section.
 *
 * @param {Object} props      Offer Details component props.
 * @param {Object} props.data Offer details data.
 *
 * @return {JSX.Element}
 */
function Offer({ data }) {
  const { price, location } = data;

  const { setShowModal } = useShowModal();

  return (
    <Container>
      <OfferDetails>
        <div>
          <Price> {price} </Price>
          <Location>
            <LocationPinIcon />
            <LocationText> {location}</LocationText>
          </Location>
        </div>
        <SubmitOffer>
          <SubmitButton
            aria-label="Submit an Offer"
            type="button"
            onClick={() => {
              /* Todo */
            }}
          >
            Submit an Offer
          </SubmitButton>
        </SubmitOffer>
      </OfferDetails>

      <SideButtonsContainer>
        <LogoButton
          onClick={() => {
            /* Todo */
          }}
        >
          <BellIcon />
        </LogoButton>
        <LogoButton
          onClick={() => {
            /* Todo */
          }}
        >
          <HeartIcon />
        </LogoButton>
        <LogoButton onClick={() => setShowModal(true)}>
          <ShareIcon />
        </LogoButton>
        <LogoButton onClick={() => setShowModal(true)}>
          <MoreOptionsIcon />
        </LogoButton>
      </SideButtonsContainer>
    </Container>
  );
}

Offer.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default Offer;
