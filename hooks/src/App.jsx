import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)
  
  //let counter = 5

  const addValue =()=>{
    
    if(counter >= 20)
      {
        alert("you can't add from now")
        return;
      }
    // counter = counter+1
    // setCounter(counter)
    setCounter(counter + 1)
    
    //console.log('clicked',counter);
    //value comes from queue in log that why first 5
  }

  const removeval = ()=>{
    if (counter <= 0)
    {
      alert('value in minus or 0')
      console.log("value in minus",Math.random());
    }
    setCounter(counter - 1)
    return;
  }

  return (
   <>
   <h1>Learning REACT </h1>
   <h2>Counter value : {counter}</h2>
   <button onClick={addValue}>ADD VALUE: {counter}</button>
   <br /> 
   <button onClick={removeval}>REMOVE VALUE:{counter}</button>
  <p>footer :{counter}</p>
   </>
  )
}

export default App
