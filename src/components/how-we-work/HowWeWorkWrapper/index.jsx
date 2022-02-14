import React from 'react';
import ListingsTable from '../ListingsTable';
import {
  HowWeWorkContainer,
  StyledIframe,
  TextContainer,
  VideoContainer,
} from './how-we-work.styles';

const videoLink = 'https://www.youtube.com/embed/MjS5OVA7ugo?autoplay=1';
/**
 * How We Work Wrapper component.
 *
 * @return {JSX.Element}
 */
function HowWeWorkWrapper() {
  return (
    <HowWeWorkContainer>
      <VideoContainer>
        <TextContainer>
          <h2>How We Work</h2>
          <p>
            reverifi is the most transparent real estate platform that is
            committed to provide a unique experience to the customers by
            offering an effective range of solutions and services that will help
            enhance the home buying/selling, renting experience. It allows
            real-time tracking and communication between all parties involved in
            the transaction process.
          </p>
        </TextContainer>
        <div>
          <StyledIframe
            src={videoLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </VideoContainer>

      <ListingsTable />
    </HowWeWorkContainer>
  );
}

export default HowWeWorkWrapper;
