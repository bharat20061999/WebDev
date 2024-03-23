import React from 'react';

const Tab = ({ label, onClick }) => {
  return (
    <div className="tab" onClick={onClick}>
      {label}
    </div>
  );
};

export default Tab;