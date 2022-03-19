import AchievementsContent from 'components/achievements/AchievementsContent';
import AchievementsSideBar from 'components/achievements/achievementsSidebar';
import React from 'react';
/**
 * Achievements component
 *
 * @return {JSX.Element}
 */
function Achievements() {
  return (
    <>
      <AchievementsContent />
      <AchievementsSideBar />
    </>
  );
}

export default Achievements;
