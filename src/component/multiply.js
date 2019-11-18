import React from 'react';

const Multiply = ({onClick}) => {
  return (
    <div id='multiply' className='button button-control' onClick={onClick}>
      *
    </div>
  );
};

export default Multiply;
