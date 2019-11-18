import React from 'react';

const Subtract = ({ onClick }) => {
  return (
    <div id='subtract' className='button button-control' onClick={onClick}>
      -
    </div>
  );
};

export default Subtract;
