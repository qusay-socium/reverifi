import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { LineSeparator, Tab, TabContent } from './tabs.styles';

/**
 * Tabs component
 *
 * @param {Array(String)} tabsTitles tabs titles array
 * @param {Array(any)} tabsContent tabs content array
 * @param {number} activePage the number of the current active page
 * @param {Array(String)} tabsIcons tabs icons
 *
 * @return {JSX.Element}
 */
function Tabs({ tabsContent, activePage, tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(activePage);
  }, [activePage]);

  return (
    <div>
      {tabs?.map(({ title, icon }, index) => (
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
  tabs: [],
};

Tabs.propTypes = {
  activePage: propTypes.number,
  tabs: propTypes.arrayOf(propTypes.object),
  tabsContent: propTypes.arrayOf(propTypes.node).isRequired,
};

export default Tabs;
