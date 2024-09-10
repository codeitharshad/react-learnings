import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 0;

  const addValue =()=>{
    
  };

  const lessValue = () => {

  };


  return (
    <>
      <div className="main">

        <h2 className="main--display">Counter Value: {counter}</h2>

        <div className="main--buttons">
          <button className="main--increase" onClick={addValue}>Increase</button>
          <button className="main--decrease" onClick={lessValue}>Decrease</button>
        </div>

      </div>
    </>
  );
}

export default App
