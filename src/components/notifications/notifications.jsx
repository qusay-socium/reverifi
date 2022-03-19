import { usePointsNotifications } from 'contexts/PointsNotificationContext/PointsNotificationContext';
import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Notification from './notification';
import { Wrapper } from './styles';

export default function Notifications() {
  const { notificationItems } = usePointsNotifications();

  return (
    <Wrapper>
      {notificationItems.map(({ points, id }) => (
        <Notification key={id} points={points} id={id} />
      ))}
    </Wrapper>
  );
}
