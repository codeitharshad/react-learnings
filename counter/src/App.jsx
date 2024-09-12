import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue =()=>{
    setCounter(counter + 1)
  };
  
  const lessValue = () => {
    if(counter === 0){
      setCounter(0)
      window.alert("Value cant be Negative")
    }else {
      setCounter((prev) => prev - 1);
    }
    
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
