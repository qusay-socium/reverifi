import propTypes from 'prop-types';
import React from 'react';
import { TooltipText } from './tooltip.styles';

/**
 * shared Tooltip component
 *
 * @param {String} text tooltip text
 * @param {String} arrowPosition tooltip arrow position (top,bottom,left,right)
 * @param {Array(Number)} position tooltip position numbers array in 'rem' [top,right,bottom,left]
 *
 * @return {JSX.Element}
 */
function Tooltip({ text, arrowPosition, position }) {
  return (
    <TooltipText
      arrowPosition={arrowPosition}
      top={position[0]}
      right={position[1]}
      bottom={position[2]}
      left={position[3]}
    >
      {text}
    </TooltipText>
  );
}

Tooltip.propTypes = {
  arrowPosition: propTypes.string.isRequired,
  position: propTypes.arrayOf(propTypes.number).isRequired,
  text: propTypes.string.isRequired,
};

export default Tooltip;
