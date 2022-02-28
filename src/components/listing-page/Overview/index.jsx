import { Title } from 'components/listing-page/Details/details.styles';
import PropTypes from 'prop-types';
import React from 'react';
import { getDatesDifference } from 'utils/helpers';
import ContactForm from '../ContactForm';
import ScheduleVisit from '../ScheduleVisit';
import {
  Claim,
  ClaimButton,
  Container,
  Paragraph,
  Partition,
  Statistics,
  Value,
  Wrapper,
} from './overview.styles';

/**
 * Listing page overview section.
 *
 * @param {Object} listing Overview component data.
 *
 * @return {JSX.Element}
 */
function Overview({ listing }) {
  return (
    <Container>
      <Wrapper>
        <div>
          <Title>Overview</Title>
          <Statistics>
            <span>
              Time on reverifi:
              <Value>
                {' '}
                {getDatesDifference(listing?.createdAt)} day
                {getDatesDifference(listing?.createdAt) > 1 && 's'}
              </Value>
              <Partition />
            </span>
            <span>
              Views:
              <Value> {listing?.listingSocial?.views || 0}</Value>
              <Partition />
            </span>
            <span>
              Saves:
              <Value> {listing?.listingSocial?.saves || 0}</Value>
              <Partition />
            </span>
            <span>
              Shares:
              <Value> {listing?.listingSocial?.shares || 0}</Value>
            </span>
          </Statistics>
          <div>
            <Paragraph>{listing?.overview}</Paragraph>
          </div>
        </div>
        <Claim>
          <div>
            <Title> Do you own this property? </Title>
            <Paragraph>Claim this property and verify its details</Paragraph>
          </div>
          <ClaimButton aria-label="Claim This Property" type="button">
            Claim This Property
          </ClaimButton>
        </Claim>
        <ScheduleVisit />
      </Wrapper>
      <ContactForm />
    </Container>
  );
}

Overview.propTypes = {
  listing: PropTypes.shape({
    createdAt: PropTypes.string,
    listingSocial: PropTypes.objectOf(PropTypes.string),
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default Overview;
