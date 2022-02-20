import { ReactComponent as BellIcon } from 'assets/images/bell.svg';
import { ReactComponent as HeartIcon } from 'assets/images/heart.svg';
import { ReactComponent as ShareIcon } from 'assets/images/share.svg';
import { ReactComponent as LocationPinIcon } from 'assets/location.svg';
import {
  Container,
  Location,
  LocationText,
  LogoButton,
  OfferDetails,
  Price,
  SideButtonsContainer,
  SubmitButton,
  SubmitOffer,
} from 'components/listing-page/Offer/offer.styles';
import { useShowModal } from 'contexts/ShowModalContext';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Offer details section.
 *
 * @param {Object} price      price for listing.
 * @param {Object} address    address for listing.
 *
 * @return {JSX.Element}
 */
function Offer({ price, address }) {
  const { setShowModal } = useShowModal();

  return (
    <Container>
      <OfferDetails>
        <div>
          <Price> {`$ ${price.toLocaleString()}`} </Price>
          <Location>
            <LocationPinIcon />
            <LocationText> {address}</LocationText>
          </Location>
        </div>
        <SubmitOffer>
          <SubmitButton aria-label="Submit an Offer" type="button">
            Submit an Offer
          </SubmitButton>
        </SubmitOffer>
      </OfferDetails>

      <SideButtonsContainer>
        <LogoButton>
          <BellIcon />
        </LogoButton>
        <LogoButton>
          <HeartIcon />
        </LogoButton>
        <LogoButton onClick={() => setShowModal(true)}>
          <ShareIcon />
        </LogoButton>
      </SideButtonsContainer>
    </Container>
  );
}

Offer.propTypes = {
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Offer;
