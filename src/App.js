
import './App.css';
import { useState } from 'react';
import random from './utils/random';
import NumberInput from './components/NumberInput';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  
  return (
    <>
    <h1 id='title'>Random Number Generator</h1>
    <div className='inputsContainer'>
    <NumberInput id='min' setNumber={setNumber1} placeholder={'Min.'}/>
    <NumberInput id='max' setNumber={setNumber2} placeholder={'Max.'}/>
    <button id='generate' onClick={() => {setRandomNumber(random(number1,number2));}}>Generate</button>
    </div>
    <span>{Math.round(randomNumber)}</span>
    </>
  );
}

export default App;
