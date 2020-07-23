import React, {useState} from 'react';
import {Message} from './Message';
import {Day} from './day';
import './App.css';

 function App() {
  let [count, setCount] = useState(0);
  let [isDay, setDay] = useState(false)
  // setCount = count + 1;
  return (
    <div className={`${isDay ? "day":"night"}`}>
      <Day isMorning={isDay}/>
      <button onClick={() => setDay(!isDay)}>Turn</button>
      <Message counter={count}/>
      <button onClick={() => setCount(++count)}>Increment</button>
    </div>
  );
}

export default App;
