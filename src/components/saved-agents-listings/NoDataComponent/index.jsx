import Button from 'components/shared/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NoDataContainer, NoDataImage } from './no-data-component.styles';

/**
 * No Data Component
 *
 * @param {String} image  no data image
 * @param {String} dataFor data for listing or agent
 * @param {String} buttonText text to show on button
 *
 * @return {JSX.Element}
 */
function NoDataComponent({ image, dataFor, buttonText }) {
  const navigate = useNavigate();
  return (
    <NoDataContainer>
      <NoDataImage src={image} />
      <h2>you haven&apos;t saved any {dataFor} yet</h2>
      <p>
        Use the heart icon to like the {dataFor} you&apos;re interested in and
        access your favorites here.
      </p>
      <Button
        onClick={() =>
          dataFor.toLowerCase() === 'listing'
            ? navigate('/')
            : navigate('/agent-list')
        }
      >
        {buttonText}
      </Button>
    </NoDataContainer>
  );
}

NoDataComponent.propTypes = {
  buttonText: PropTypes.string.isRequired,
  dataFor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default NoDataComponent;
