import { Title } from 'components/listing-page/Details/details.styles';
import Button from 'components/shared/Button';
import PropTypes from 'prop-types';
import React from 'react';
import ContactForm from '../ContactForm';
import ScheduleVisit from '../ScheduleVisit';
import {
  Claim,
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
  const statistics = {
    Saves: '10',
    Shared: '12',
    'Time on Reverifi': '8 days',
    Views: '30',
  };

  return (
    <Container>
      <Wrapper>
        <div>
          <Title>Overview</Title>
          <Statistics>
            {Object.keys(statistics).map((key, index, array) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label key={key}>
                {key}: <Value>{statistics[key]}</Value>
                {index !== array.length - 1 && <Partition />}
              </label>
            ))}
          </Statistics>

          <Paragraph>{listing.overview}</Paragraph>
        </div>
        <Claim>
          <div>
            <Title> Do you own this property? </Title>
            <Paragraph>Claim this property and verifiy it’s details</Paragraph>
          </div>
          <Button
            aria-label="Claim this property"
            type="button"
            onClick={() => {
              /* Todo */
            }}
          >
            Claim property
          </Button>
        </Claim>
        <ScheduleVisit />
      </Wrapper>
      <ContactForm />
    </Container>
  );
}

Overview.propTypes = {
  listing: PropTypes.shape({
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default Overview;
