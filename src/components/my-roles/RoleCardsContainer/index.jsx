import RoleCard from 'components/my-roles/RoleCard';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getRoles from 'services/roles';
import { getUserRoles } from 'services/user';
import rolesData from './data';
import { CardsContainer } from './role-cards-container.styles';

/**
 * Component holding role cards, it maps roles to their cards.
 *
 * @param {Object} props                  Props passed to RoleCardsContainer.
 * @param {func}   props.setSelectedRoles Sets selected roles.
 *
 * @return {JSX.Element} Container holding role cards.
 */
function RoleCardsContainer({ setSelectedRoles }) {
  const [roles, setRoles] = useState([]);
  const [fetchedRoles, setFetchedRoles] = useState([]);

  const navigate = useNavigate();
  const { isLoggedIn } = useUser();

  /**
   * Fetches roles data from API and sets it to roles state.
   */
  const getAllRoles = async () => {
    if (!isLoggedIn) {
      navigate('/');
    } else {
      const data = await getRoles();
      setRoles(data);

      const userRoles = await getUserRoles();
      if (userRoles) setFetchedRoles(userRoles);
    }
  };

  useEffectOnce(getAllRoles);

  return (
    <CardsContainer>
      {roles?.map(({ id, role }, index) => (
        <RoleCard
          data={{ ...rolesData[index], fetchedRoles, id, role }}
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
