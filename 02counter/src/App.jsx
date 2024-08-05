import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

// using the HOOK (useState)

//    variable , function to update the variable
let [counter,setCounter] = useState(15)
// counter is same as (let counter = 5)
//  let counter = 5;

 const addValue = () => {
  // counter = counter + 1;
  setCounter(counter+1)

  // what will be the output
    // it will not change output increment by 1
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)

  // to increment more we used to use the functiono useState
  setCounter((prevCounter) => prevCounter+1 )
  setCounter((prevCounter) => prevCounter+1 )
  setCounter((prevCounter) => prevCounter+1 )
  setCounter((prevCounter) => prevCounter+1 )
 }

 const removeValue = () => {
  counter = counter - 1
  setCounter(counter)
  // or
  // setCounter(counter - 1)
 }

const setTO0 = () => {
  counter = 0
  setCounter(counter)
}


  return (
    <>
    {counter}
    <h1>chai and react</h1>
    <h2>counter value:{counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick = {removeValue}
     >Remove value</button>
   <br/>
     <button onClick={setTO0}
     > Remove all set to 0</button>
    </>
  )
}

export default App
