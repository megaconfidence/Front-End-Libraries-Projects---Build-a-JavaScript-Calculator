import React from 'react';

const Decimal = ({onClick}) => {
  return (
    <div id='decimal' className='button' style={{ order: 10 }} onClick={onClick}>
      .
    </div>
  );
};

export default Decimal;
