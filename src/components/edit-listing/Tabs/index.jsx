import CreateListingForm from 'components/create-listing/CreateListingForm';
import Tabs from 'components/shared/Tabs';
import React from 'react';
import { Container } from './tabs.style';

/**
 * Listing page edit tabs .
 *
 * @return {JSX.Element}
 */
function EditTabsForm() {
  return (
    <Container>
      <Tabs
        tabsTitles={['Details', 'Schedule', 'reverifi PLUS']}
        tabsContent={[
          <CreateListingForm date="Edit Listing" />,
          'sent invitations table',
        ]}
      />
    </Container>
  );
}

export default EditTabsForm;
