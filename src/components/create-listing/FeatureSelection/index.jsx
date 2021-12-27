import PropTypes from 'prop-types';
import React from 'react';
import data from './data';
import {
  Feature,
  FeaturesContainer,
  FeatureTitle,
  IconContainer,
  MainContainer,
  Title,
} from './feature-selection.styles';

/**
 * Feature Selection section of Create Listing page.
 *
 * @param {Set} featureIds Set of selected feature id's.
 * @param {Function} handleFeatureClick feature click handler function.
 * @return {JSX.Element}
 */
function FeatureSelection({ featureIds, handleFeatureClick }) {
  return (
    <MainContainer>
      <Title>Features</Title>
      <FeaturesContainer>
        {data.map(({ id, title, icon }) => (
          <Feature key={id} onClick={() => handleFeatureClick(id)}>
            <FeatureTitle isActive={featureIds.has(id)}>
              <IconContainer isActive={featureIds.has(id)}>
                <img src={icon} alt={title} />
              </IconContainer>
              <span>{title}</span>
            </FeatureTitle>
          </Feature>
        ))}
      </FeaturesContainer>
    </MainContainer>
  );
}

FeatureSelection.propTypes = {
  /**
   * Set of selected feature id's.
   */
  featureIds: PropTypes.objectOf(PropTypes.number),
  /**
   * feature click handler function.
   */
  handleFeatureClick: PropTypes.func,
};

FeatureSelection.defaultProps = {
  featureIds: [],
  handleFeatureClick: null,
};

export default FeatureSelection;
