import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/cards'
import './App.css'

function App() {

// pass object
  let myObject = {
    username:"noorlam",
    age: "18",
  }

// pass Array
 let myArray = [1,2,3,4]

  return (
    <>
    <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">tialwind test</h1>
   < Card username ="Anna" clickMe="click ME"/>
   <Card username = "chaiandcode" clickMe = "visit me"/>
   <Card username = "nooralam" clickMe = "log in"/>
   <Card username = "nooralam" clickMe = ""/>
    </>
  )
}

export default App
