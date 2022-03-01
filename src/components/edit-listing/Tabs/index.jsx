import { ReactComponent as AddSvg } from 'assets/add-icon.svg';
import CreateListingForm from 'components/create-listing/CreateListingForm';
import Tabs from 'components/shared/Tabs';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ReverifiPlus from '../ReverifiPlus';
import EditListingSchedulePage from '../Schedule/EditListingSchedule';
import { Container } from './tabs.style';

/**
 * Listing page edit tabs .
 *
 * @return {JSX.Element}
 */
function EditTabsForm() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 0;

  const tabsDate = [
    { icon: null, title: 'Details' },
    { icon: null, title: 'Schedule' },
    { icon: <AddSvg />, title: 'reverifi' },
  ];

  return (
    <Container>
      <Tabs
        activePage={+tab}
        tabs={tabsDate}
        tabsContent={[
          <CreateListingForm date="Edit Listing" />,
          <EditListingSchedulePage />,
          <ReverifiPlus />,
        ]}
      />
    </Container>
  );
}

export default EditTabsForm;
