import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const PointsNotificationContext = createContext();
PointsNotificationContext.displayName = 'PointsNotificationContext';

/**
 * App points notification context provider component.
 *
 * @param {Object}      props
 * @param {JSX.Element} props.children Child nodes to render and pass context.
 *
 * @return {JSX.Element}
 */
export function PointsNotificationProvider({ children }) {
  const [notificationItems, setNotificationItems] = useState([]);

  const value = useMemo(() => {
    const addNotification = ({ points }) =>
      setNotificationItems([...notificationItems, { id: uniqueId(), points }]);

    const removeNotification = (itemId) => {
      setNotificationItems(notificationItems.filter(({ id }) => id !== itemId));
    };

    /**
     * Use points notification component.
     *
     * @param {string}  points         Action points.
     * @param {boolean} shouldAddToast Should add toast.
     */
    const usePointsNotification = (points, shouldAddNotification = true) => {
      useEffect(() => {
        if (shouldAddNotification) {
          addNotification({ points });
        }
      }, [shouldAddNotification, points]);
    };

    return {
      addNotification,
      notificationItems,
      removeNotification,
      usePointsNotification,
    };
  }, [notificationItems]);

  return (
    <PointsNotificationContext.Provider value={value}>
      {children}
    </PointsNotificationContext.Provider>
  );
}

PointsNotificationProvider.propTypes = {
  children: PropTypes.node,
};

PointsNotificationProvider.defaultProps = {
  children: null,
};

export const usePointsNotifications = () =>
  useContext(PointsNotificationContext);
