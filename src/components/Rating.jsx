import React from 'react';

const Rating = ({ children }) => {
  function getStars(rate) {
    let stars;
    if (rate > 0 && rate <= 1) {
      rate = 1;
      stars = '★☆☆☆☆';
    } else if (rate > 1 && rate <= 2) {
      rate = 1;
      stars = '★★☆☆☆';
    } else if (rate > 2 && rate <= 3) {
      rate = 1;
      stars = '★★★☆☆';
    } else if (rate > 3 && rate <= 4) {
      rate = 1;
      stars = '★★★★☆';
    } else if (rate > 4 && rate <= 5) {
      rate = 1;
      stars = '★★★★★';
    } else {
      stars = '☆☆☆☆☆';
    }
    return stars;
  }

  return <div> {getStars(children)}</div>;
};

export default Rating;
