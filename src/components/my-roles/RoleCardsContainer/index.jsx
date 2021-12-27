import RoleCard from 'components/my-roles/RoleCard';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getRoles from './data';
import { CardsContainer } from './role-cards-container.styles';

/**
 * Component holding role cards, it maps roles to their cards.
 *
 * @param {Object} props Props passed to RoleCardsContainer.
 * @param {func} props.setSelectedRoles Sets selected roles.
 *
 * @return {JSX.Element} Container holding role cards.
 */
function RoleCardsContainer({ setSelectedRoles }) {
  const [roles, setRoles] = useState([]);

  /**
   * Fetches roles data from API and sets it to roles state.
   */
  useEffect(() => {
    const fetchRoles = async () => {
      const data = await getRoles();
      setRoles(data);
    };
    fetchRoles();
  });

  return (
    <CardsContainer>
      {roles.map(({ Icon, overview, role }) => (
        <RoleCard
          data={{ Icon, overview, role }}
          key={role}
          setSelectedRole={setSelectedRoles}
        />
      ))}
    </CardsContainer>
  );
}

RoleCardsContainer.propTypes = {
  setSelectedRoles: PropTypes.func.isRequired,
};

export default RoleCardsContainer;
