import  { useState } from 'react';
import Tab from './TabNavigate/Tab';
import Tab1Content from './TabNavigate/Tab1';
import Tab2Content from './TabNavigate/Tab2';
import Tab3Content from './TabNavigate/Tab3';

const App = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-container">
        <Tab label="Tab 1" onClick={() => handleTabClick('tab1')} />
        <Tab label="Tab 2" onClick={() => handleTabClick('tab2')} />
        <Tab
          label="Tab 3"
          onClick={() => handleTabClick('tab3')}
        />
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <Tab1Content />}
        {activeTab === 'tab2' && <Tab2Content />}
        {activeTab === 'tab3' && <Tab3Content setActiveTab={setActiveTab} />}
      </div>
    </div>
  );
};

export default App;