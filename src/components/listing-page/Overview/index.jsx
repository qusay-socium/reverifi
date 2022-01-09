import PropTypes from 'prop-types';
import React from 'react';
import {
  Claim,
  ClaimButton,
  ClaimHeading,
  ClaimParagraph,
  Container,
  FormContainer,
  OverviewParagraph,
  Partition,
  ScheduleVisit,
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
        <ScheduleVisit>
          <h2> Schedule Visit</h2>
          <p> To Do</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ScheduleVisit>
      </Wrapper>
      <FormContainer>
        <h2> Form </h2>
        <p> To Do</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </FormContainer>
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
