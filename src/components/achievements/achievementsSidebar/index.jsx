import { ReactComponent as NotificationIcon } from 'assets/notification.svg';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { getUserActionTypes } from 'services/points-service';
import { formatDate } from 'utils/formatDate';
import UserActivity from '../UserActivity';
import {
  ActivitiesWrapper,
  AvatarWrapper,
  NameWrapper,
  PointsText,
  PointsWrapper,
  SinceWrapper,
  Wrapper,
  YourActivityText,
} from './achievements-sidebar.styles';

/**
 * Achievements sidebar section.
 *
 * @return {JSX.Element}
 */
function AchievementsSidebar() {
  const { userInfo } = useUser();
  const [userActivity, setUserActivity] = useState([]);

  const fetchUserActivityData = async () => {
    if (userInfo && userInfo.id) {
      const data = await getUserActionTypes(userInfo.id);
      setUserActivity(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      fetchUserActivityData();
    };

    fetchData();
  }, [userInfo]);

  return (
    <Wrapper>
      <AvatarWrapper />
      <NameWrapper>{userInfo?.name}</NameWrapper>
      <SinceWrapper>{formatDate(userInfo?.createdAt)}</SinceWrapper>
      <PointsWrapper>
        <NotificationIcon />
        <PointsText>{userInfo?.points} Points</PointsText>
      </PointsWrapper>
      <ActivitiesWrapper>
        <YourActivityText>Your Activity</YourActivityText>
        {userActivity?.map(({ actionTypeId, id, date }) => (
          <UserActivity key={id} id={actionTypeId} date={date} />
        ))}
      </ActivitiesWrapper>
    </Wrapper>
  );
}

export default AchievementsSidebar;
