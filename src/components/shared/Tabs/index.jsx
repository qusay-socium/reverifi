import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { LineSeparator, Tab, TabContent } from './tabs.styles';

/**
 * Tabs component
 *
 * @param {Array(any)} tabsContent tabs content array
 * @param {number} activePage the number of the current active page
 * @param {Array(object)} tabsData tabs icons and titles
 *
 * @return {JSX.Element}
 */
function Tabs({ tabsContent, activePage, tabsData }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(activePage);
  }, [activePage]);

  return (
    <div>
      {tabsData?.map(({ title, icon }, index) => (
        <Tab
          onClick={() => setActiveTab(index)}
          key={title}
          active={activeTab === index}
        >
          {title} {icon && icon}
        </Tab>
      ))}
      <LineSeparator />
      {tabsContent?.map((Content, index) => (
        <TabContent key={index.toString()} active={activeTab === index}>
          {Content}
        </TabContent>
      ))}
    </div>
  );
}

Tabs.defaultProps = {
  activePage: 0,
  tabsData: [],
};

Tabs.propTypes = {
  activePage: propTypes.number,
  tabsContent: propTypes.arrayOf(propTypes.node).isRequired,
  tabsData: propTypes.arrayOf(propTypes.object),
};

export default Tabs;
