import achievementsImage from 'assets/images/achievements.png';
import Button from 'components/shared/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  UnderConstructionWrapper,
  Wrapper,
} from './achievements-content.styles';

/**
 * Achievements content section.
 *
 * @return {JSX.Element}
 */
function AchievementsContent() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>Achievements</Header>
      <UnderConstructionWrapper>
        <img src={achievementsImage} alt="No search results found" />
        <h1>Achievements is under construction</h1>
        <Button
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Go To Home Page
        </Button>
      </UnderConstructionWrapper>
    </Wrapper>
  );
}

export default AchievementsContent;
