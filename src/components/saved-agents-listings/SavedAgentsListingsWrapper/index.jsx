import Tabs from 'components/shared/Tabs';
import React from 'react';
import SavedAgents from '../SavedAgents';
import SavedListings from '../SavedListings';
import {
  SavedAgentsListingsContainer,
  SavedText,
} from './saved-agents-listings-wrapper.styles';

/**
 * Saved Agents Listings Wrapper component.
 *
 * @return {JSX.Element}
 */
function SavedAgentsListingsWrapper() {
  return (
    <SavedAgentsListingsContainer>
      <SavedText>Saved</SavedText>
      <Tabs
        tabsTitles={['Saved Listings', 'Saved Agents']}
        tabsContent={[<SavedListings />, <SavedAgents />]}
      />
    </SavedAgentsListingsContainer>
  );
}

export default SavedAgentsListingsWrapper;
