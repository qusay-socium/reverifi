import { ReactComponent as BellIcon } from 'assets/images/bell.svg';
import { ReactComponent as LocationPinIcon } from 'assets/location.svg';
import {
  Container,
  Location,
  LocationText,
  Logo,
  OfferDetails,
  Price,
  SideButtonsContainer,
  SubmitButton,
  SubmitOffer,
} from 'components/listing-page/Offer/offer.styles';
import SaveAndShareButtons from 'components/shared/SaveAndShareButtons';
import { useShowModal } from 'contexts/ShowModalContext';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Offer details section.
 *
 * @param {Object} price      price for listing
 * @param {Object} address    address for listing
 * @param {String} id         listing id
 *
 * @return {JSX.Element}
 */
function Offer({ price, address, id }) {
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
        <Logo>
          <BellIcon />
        </Logo>
        <SaveAndShareButtons listingId={id} setShowModal={setShowModal} />
      </SideButtonsContainer>
    </Container>
  );
}

Offer.propTypes = {
  address: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Offer;
