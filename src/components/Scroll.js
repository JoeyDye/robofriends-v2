import React from 'react';

export default props => {
  return (
    <div
      style={{ overflowY: 'scroll', border: '1px solid #000', height: '500px' }}
    >
      {props.children}
    </div>
  );
};
