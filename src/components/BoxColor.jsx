import React from 'react';

const BoxColor = (props) => {
  return (
    <div
      style={{
        height: '100px',
        width: '50%',
        backgroundColor: `rgb(${props.r} , ${props.g} , ${props.b})`,
        border: 'black 1px solid',
        margin: '0px auto 10px',
        lineHeight: '100px',
        textAlign: 'center',
      }}
    >
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
};

export default BoxColor;
