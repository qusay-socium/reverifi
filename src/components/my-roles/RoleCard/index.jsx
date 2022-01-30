import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Card, CheckIcon, Overview, Rectangle } from './role-card.styles';

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
  const { Icon, overview, role, id, fetchedRoles } = data;
  const [isSelected, setIsSelected] = useState(false);

  /**
   * Adds/removes selected card to/from selected roles object on click on card.
   */
  const handleCardSelect = () => {
    setSelectedRole((prev) => new Set(prev).add(id));
    if (isSelected)
      setSelectedRole((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    fetchedRoles?.map(({ id: roleId }) => {
      if (roleId === id) {
        handleCardSelect();
      }
      return true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedRoles]);

  return (
    <Card onClick={handleCardSelect} isSelected={isSelected}>
      <Rectangle isSelected={isSelected}>
        {isSelected && <CheckIcon />}
      </Rectangle>
      <Icon />
      <h3>{role}</h3>
      <Overview>{overview}</Overview>
    </Card>
  );
}

RoleCard.propTypes = {
  data: PropTypes.shape({
    Icon: PropTypes.elementType.isRequired,
    fetchedRoles: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
    id: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedRole: PropTypes.func.isRequired,
};

export default RoleCard;
