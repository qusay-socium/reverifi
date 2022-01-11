import PropTypes from 'prop-types';
import React from 'react';
import ContactForm from '../ContactForm';
import ScheduleVisit from '../ScheduleVisit';
import {
  Claim,
  ClaimButton,
  ClaimHeading,
  ClaimParagraph,
  Container,
  OverviewParagraph,
  Partition,
  Statistics,
  Title,
  Value,
  Wrapper,
} from './overview.styles';

/**
 * Listing page overview section.
 *
 * @param {Object} props      The component props.
 * @param {Object} props.data The component data.
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
              <span key={key}>
                <span>
                  {key}: <Value> {statistics[key]}</Value>
                </span>
                {index !== array.length - 1 && <Partition />}
              </span>
            ))}
          </Statistics>

          <OverviewParagraph>{overview}</OverviewParagraph>
        </div>
        <Claim>
          <div>
            <ClaimHeading> Do you own this property? </ClaimHeading>
            <ClaimParagraph>
              Claim this property and verifiy it’s details
            </ClaimParagraph>
          </div>
          <ClaimButton
            aria-label="Claim this property"
            type="button"
            onClick={() => {
              /* Todo */
            }}
          >
            Claim this property
          </ClaimButton>
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
