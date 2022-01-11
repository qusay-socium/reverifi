import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Card,
  CheckIcon,
  IconContainer,
  Overview,
  Rectangle,
  RoleText,
} from './role-card.styles';

/**
 * Role Card.
 *
 * @param {Object} props                 Props passed to RoleCard.
 * @param {Object} props.data            Role card data.
 * @param {func}   props.setSelectedRole Sets selected role.
 *
 * @returns {JSX.Element} Role Card holding role details.
 */
function RoleCard({ data, setSelectedRole }) {
  const { Icon, overview, role } = data;
  const [isSelected, setIsSelected] = useState(false);

  /**
   * Adds/removes selected card to/from selected roles object on click on card.
   */
  const handleCardSelect = () => {
    setSelectedRole((prev) => new Set(prev).add(role));
    if (isSelected)
      setSelectedRole((prev) => {
        const next = new Set(prev);
        next.delete(role);
        return next;
      });
    setIsSelected(!isSelected);
  };

  return (
    <Card onClick={handleCardSelect} isSelected={isSelected}>
      <Rectangle isSelected={isSelected}>
        {isSelected && <CheckIcon />}
      </Rectangle>
      <IconContainer>
        <Icon />
      </IconContainer>
      <RoleText>{role}</RoleText>
      <Overview>{overview}</Overview>
    </Card>
  );
}

RoleCard.propTypes = {
  data: PropTypes.shape({
    Icon: PropTypes.elementType.isRequired,
    overview: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedRole: PropTypes.func.isRequired,
};

export default RoleCard;
