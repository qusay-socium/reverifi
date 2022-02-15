import React from 'react';
import { howWeWorkDescription } from '../data';
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
          <p>{howWeWorkDescription}</p>
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
