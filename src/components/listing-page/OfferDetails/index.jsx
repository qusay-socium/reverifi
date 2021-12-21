import { ReactComponent as BellIcon } from 'assets/images/bell.svg';
import { ReactComponent as HeartIcon } from 'assets/images/heart.svg';
import { ReactComponent as MoreIcon } from 'assets/images/more-horizontal.svg';
import { ReactComponent as ShareIcon } from 'assets/images/share.svg';
import {
  ButtonsSection,
  Container,
  Details,
  Location,
  LocationText,
  LogoButton,
  Pin,
  Price,
  SubmitButton,
  SubmitOffer,
} from 'components/listing-page/OfferDetails/offer-details.styles';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Offer details section.
 *
 * @param {Object} props      The component props.
 * @param {Object} props.data The component data.
 *
 * @return {JSX.Element}
 */
function OfferDetails({ data }) {
  const { price, location } = data;

  return (
    <Container>
      <Details>
        <div>
          <Price> {price} </Price>
          <Location>
            <Pin />
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
      </Details>

      <ButtonsSection>
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
        <LogoButton
          onClick={() => {
            /* Todo */
          }}
        >
          <ShareIcon />
        </LogoButton>
        <MoreIcon />
      </ButtonsSection>
    </Container>
  );
}

OfferDetails.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default OfferDetails;
