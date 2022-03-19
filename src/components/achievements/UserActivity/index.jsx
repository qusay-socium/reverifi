import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { getActionTypeById } from 'services/points-service';
import { formatDate } from 'utils/formatDate';
import {
  ActivityDateText,
  ActivityDetailsWrapper,
  ActivityNameText,
  ActivityPoints,
  ActivityWrapper,
} from './user-activity.styles';

/**
 * Achievements sidebar section.
 *
 * @return {JSX.Element}
 */
function AchievementsSidebar({ id, date }) {
  const [userActivity, setUserActivity] = useState();

  const fetchUserActivityData = async () => {
    const data = await getActionTypeById(id);
    setUserActivity(data);
  };

  useEffectOnce(fetchUserActivityData);

  return (
    <ActivityWrapper>
      <ActivityDetailsWrapper>
        <ActivityNameText>{userActivity?.type}</ActivityNameText>
        <ActivityDateText>{formatDate(date && date)}</ActivityDateText>
      </ActivityDetailsWrapper>
      <ActivityPoints>+ {userActivity?.points} Points</ActivityPoints>
    </ActivityWrapper>
  );
}

export default AchievementsSidebar;
