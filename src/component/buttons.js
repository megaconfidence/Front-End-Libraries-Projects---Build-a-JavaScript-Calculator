import React from 'react';

const Buttons = ({ id, value, onClick }) => {
  return (
    <div id={id} className='digits button' style={{ order: 9 - value }} onClick={onClick}>
      {value}
    </div>
  );
};

export default Buttons;
