import propTypes from 'prop-types';
import React, { useState } from 'react';
import { Tab, TabContent } from './tabs.styles';

/**
 * Tabs component
 *
 * @param {Array(String)} tabsTitles tabs titles array
 * @param {Array(any)} tabsContent tabs content array
 *
 * @return {JSX.Element}
 */
function Tabs({ tabsTitles, tabsContent }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {tabsTitles?.map((title, index) => (
        <Tab
          onClick={() => setActiveTab(index)}
          key={title}
          active={activeTab === index}
        >
          {title}
        </Tab>
      ))}

      {tabsContent?.map((Content, index) => (
        <TabContent key={index.toString()} active={activeTab === index}>
          {Content}
        </TabContent>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabsContent: propTypes.arrayOf(propTypes.node).isRequired,
  tabsTitles: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Tabs;
