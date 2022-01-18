import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getFeatures } from 'services/listing-create-service';
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
 * @param  {Set}      featureIds         Set of selected feature id's.
 * @param  {Function} handleFeatureClick feature click handler function.
 *
 * @return {JSX.Element}
 */
function FeatureSelection({ featureIds, handleFeatureClick }) {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setFeatures(await getFeatures());
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <Title>Features</Title>
      <FeaturesContainer>
        {features.map(({ id, feature }, index) => (
          <Feature key={id} onClick={() => handleFeatureClick(id)}>
            <FeatureTitle isActive={featureIds.has(id)}>
              <IconContainer isActive={featureIds.has(id)}>
                <img src={data[index].icon} alt={feature} />
              </IconContainer>
              <span>{feature}</span>
            </FeatureTitle>
          </Feature>
        ))}
      </FeaturesContainer>
    </MainContainer>
  );
}

FeatureSelection.propTypes = {
  featureIds: PropTypes.objectOf(PropTypes.number),
  handleFeatureClick: PropTypes.func,
};

FeatureSelection.defaultProps = {
  featureIds: {},
  handleFeatureClick: null,
};

export default FeatureSelection;
