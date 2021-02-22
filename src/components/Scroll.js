import React from 'react';


const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '650px'}}>
      {props.children}
    </div>
  );
};

//specify overflowY if you don't want an X-axis scroll
export default Scroll;