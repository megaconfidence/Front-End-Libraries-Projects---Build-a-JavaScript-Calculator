import React from 'react';

const Add = ({onClick}) => {
  return (
    <div id='add' className='button button-control' onClick={onClick}>
      +
    </div>
  );
};

export default Add;
