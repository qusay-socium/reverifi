import propTypes from 'prop-types';
import React from 'react';
import { TooltipText } from './tooltip.styles';

/**
 * shared Tooltip component
 *
 * @param {String} text tooltip text
 * @param {String} arrowPosition tooltip arrow position (top,bottom,left,right)
 * @param {Array(Number)} position tooltip position numbers array in 'rem' [top,right,bottom,left]
 * @param {Boolean} light white background
 * @param {Boolean} removeArrow remove arrow from tooltip
 * @param {Boolean} lineBreak break the tooltip for long text lines

 * @return {JSX.Element}
 */
function Tooltip({
  text,
  arrowPosition,
  position,
  light,
  removeArrow,
  lineBreak,
}) {
  return (
    <TooltipText
      arrowPosition={arrowPosition}
      top={position[0]}
      right={position[1]}
      bottom={position[2]}
      left={position[3]}
      light={light}
      removeArrow={removeArrow}
      lineBreak={lineBreak}
    >
      {text}
    </TooltipText>
  );
}

Tooltip.propTypes = {
  arrowPosition: propTypes.string.isRequired,
  light: propTypes.bool,
  lineBreak: propTypes.bool,
  position: propTypes.arrayOf(propTypes.number).isRequired,
  removeArrow: propTypes.bool,
  text: propTypes.string.isRequired,
};

Tooltip.defaultProps = {
  light: false,
  lineBreak: false,
  removeArrow: false,
};

export default Tooltip;
