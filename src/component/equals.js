import React from 'react';

const Equals = ({onClick}) => {
  return (
    <div id='equals' className='button clear' style={{ order: 8 }} onClick={onClick}>
      =
    </div>
  );
};

export default Equals;
