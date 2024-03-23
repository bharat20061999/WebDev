import React from 'react';

const Tab3Content = ({ setActiveTab }) => {
  const handleViewMoreClick = () => {
    setActiveTab('tab1');
  };

  return (
    <div>
      <div>Hello World 3</div>
      <div>
        <button onClick={handleViewMoreClick}>
          View More (Go to Tab 1)
        </button>
      </div>
    </div>
  );
};

export default Tab3Content;