import { ReactComponent as NotificationIcon } from 'assets/notification.svg';
import { usePointsNotifications } from 'contexts/PointsNotificationContext/PointsNotificationContext';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Close from 'react-feather/dist/icons/x';
import { useNavigate } from 'react-router-dom';
import {
  CloseButton,
  Message,
  NotificationMessage,
  NotificationSvg,
  NotificationWrap,
  PointsLink,
} from './styles';

export function Notification({ points, id }) {
  const { removeNotification } = usePointsNotifications();
  const [show, setShow] = useState(true);
  const timeoutRef = useRef();

  const navigate = useNavigate();

  const hide = () => {
    clearTimeout(timeoutRef.current);
    setShow(false);
  };

  const onAnimationEnd = () => {
    if (!show) {
      removeNotification(id);
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShow(false);
    }, 6000);

    return () => clearTimeout(timeoutRef.current);
  });

  return (
    <NotificationWrap
      tabIndex="0"
      onAnimationEnd={onAnimationEnd}
      className={show ? 'in' : 'out'}
      role="alert"
    >
      <NotificationMessage>
        <NotificationSvg>
          <NotificationIcon size="16" />
        </NotificationSvg>
        <Message> You&#39;ve earned {points} points !</Message>
        <PointsLink onClick={() => navigate('/achievements')}>
          View Points
        </PointsLink>
        <CloseButton onClick={hide}>
          <Close size="16" strokeWidth="2" />
        </CloseButton>
      </NotificationMessage>
    </NotificationWrap>
  );
}

Notification.propTypes = {
  id: PropTypes.string,
  points: PropTypes.number,
};

Notification.defaultProps = {
  id: null,
  points: null,
};

export default Notification;
