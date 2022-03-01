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
function Tabs({ tabsTitles, tabsContent, activePage, tabsIcons }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(activePage);
  }, [activePage]);

  return (
    <div>
      {tabsTitles?.map((title, index) => (
        <Tab
          onClick={() => setActiveTab(index)}
          key={title}
          active={activeTab === index}
        >
          {title} {tabsIcons[index] && tabsIcons[index]}
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
  tabsIcons: [],
};

Tabs.propTypes = {
  activePage: propTypes.number,
  tabsContent: propTypes.arrayOf(propTypes.node).isRequired,
  tabsIcons: propTypes.arrayOf(propTypes.string),
  tabsTitles: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Tabs;
