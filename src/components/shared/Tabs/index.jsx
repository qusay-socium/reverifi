import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { LineSeparator, Tab, TabContent } from './tabs.styles';

/**
 * Tabs component
 *
 * @param {Array(String)} tabsTitles tabs titles array
 * @param {Array(any)} tabsContent tabs content array
 * @param {number} activePage the number of the current active page
 *
 * @return {JSX.Element}
 */
function Tabs({ tabsTitles, tabsContent, activePage }) {
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
          {title}
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
};

Tabs.propTypes = {
  activePage: propTypes.number,
  tabsContent: propTypes.arrayOf(propTypes.node).isRequired,
  tabsTitles: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Tabs;
