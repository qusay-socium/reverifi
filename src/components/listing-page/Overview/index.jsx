import PropTypes from 'prop-types';
import React from 'react';
import Button from 'components/shared/Button';
import { Title } from 'components/listing-page/Details/details.styles';
import ContactForm from '../ContactForm';
import ScheduleVisit from '../ScheduleVisit';
import {
  Container,
  Claim,
  Paragraph,
  Partition,
  Statistics,
  Value,
  Wrapper,
} from './overview.styles';

/**
 * Listing page overview section.
 *
 * @param {Object} props      The component props.
 * @param {Object} props.data Overview component data.
 *
 * @return {JSX.Element}
 */
function Overview({ data }) {
  const { overview, statistics } = data;

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

          <Paragraph>{overview}</Paragraph>
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
  data: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    statistics: PropTypes.shape({
      Saves: PropTypes.string.isRequired,
      Shared: PropTypes.string.isRequired,
      'Time on Reverifi': PropTypes.string.isRequired,
      Views: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Overview;
