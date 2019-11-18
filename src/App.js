import React, { useState } from 'react';
import './App.css';
import Add from './component/add';
import Buttons from './component/buttons';
import Clear from './component/clear';
import Decimal from './component/decimal';
import Display from './component/display';
import Divide from './component/divide';
import Equals from './component/equals';
import Multiply from './component/multiply';
import Subtract from './component/subtract';
import LeftParen from './component/left-paren';
import RightParen from './component/right-paren';

const digits = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(0);
  const [error, setError] = useState(true)
  let temp;

  const handleOnClick = e => {
    const button = e.target.childNodes[0].data;

    if (button === 'AC') {
      setInput('');
      setOutput(0);
    } else if (button === '=') {
      let tempInput = input;
      if (tempInput.includes('-*')) {
        tempInput = tempInput.split('-').join('');
      }
      if (tempInput.includes('+*')) {
        tempInput = tempInput.split('+').join('');
      }
      if (tempInput.includes('*/')) {
        tempInput = tempInput.split('*').join('');
      }
      if (tempInput.includes('/*')) {
        tempInput = tempInput.split('/').join('');
      }
      if (tempInput.includes('+/')) {
        tempInput = tempInput.split('+').join('');
      }
      if (tempInput.includes('-%')) {
        tempInput = tempInput.split('-').join('');
      }
      if (tempInput.includes('+%')) {
        tempInput = tempInput.split('+').join('');
      }
      if (tempInput.includes('*-+')) {
        tempInput = tempInput.split('*-').join('');
      }
      if (tempInput.includes('++')) {
        tempInput = tempInput.split('++').join('+');
      }
      if (tempInput.includes('-+')) {
        tempInput = tempInput.split('-').join('');
      }
      // console.log(input, tempInput);
      // eslint-disable-next-line no-eval
      if(eval(tempInput)) {
        const ans = eval(tempInput);
        setInput(`${ans}`);
      } else {
        setError(true)
      }
      setOutput(tempInput);
    } else if (input === '0') {
      //prevent starting with zeros
      setInput(`${button}`);
    } else if (button === '0' && input === '') {
      //prevent starting with multiple zeros
    } else {
      if (
        input.includes('(') ||
        input.includes(')') ||
        input.includes('%') ||
        input.includes('/') ||
        input.includes('*') ||
        input.includes('-') ||
        input.includes('+')
      ) {
        temp = input.split(/[()%/*\-+]+/);
        temp = `${temp[temp.length - 1]}${button}`;

        if (temp.replace(/[^.]/g, '').length > 1 && button === '.') {
        } else {
          if(input.length >= 9) {
            temp = input.substring(1, input.length);
            setInput(`${temp}${button}`);
          } else {
            setInput(`${input}${button}`);
          }
        }
      } else if (input.replace(/[^.]/g, '').length > 0 && button === '.') {
      } else {
        console.log(input.length)
        if(input.length >= 9) {
          temp = input.substring(1, input.length);
          setInput(`${temp}${button}`);
        } else {
          setInput(`${input}${button}`);
        }
      }
    }
  };
  return (
    <div className='calc'>
      <Display input={input} output={output} />
      <div className='button-container'>
        <div className='top-container'>
          <LeftParen onClick={handleOnClick} />
          <RightParen onClick={handleOnClick} />
          <div className='button button-control' onClick={handleOnClick}>
            %
          </div>
          <Clear onClick={handleOnClick} />
        </div>
        <div className='flex-container'>
          <div className='left-controls'>
            {digits.map((d, i) => (
              <Buttons id={d} value={i} key={i} onClick={handleOnClick} />
            ))}
            <Equals onClick={handleOnClick} />
            <Decimal onClick={handleOnClick} />
          </div>
          <div className='right-controls'>
            <Divide onClick={handleOnClick} />
            <Multiply onClick={handleOnClick} />
            <Subtract onClick={handleOnClick} />
            <Add onClick={handleOnClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
