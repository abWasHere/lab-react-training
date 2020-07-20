import React from 'react';

const Random = (props) => {
  let randomNum = Math.floor(Math.random() * props.max) + props.min;

  return (
    <div className="text-box">
      Random number between {props.min} and {props.max} : {randomNum}
    </div>
  );
};

export default Random;
