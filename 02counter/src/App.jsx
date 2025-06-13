import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=15;

  let [counter,setCounter]=useState(15)
  function inc(){
    if(counter<20) {
      setCounter(counter+1)// sends in batches so if we use multiple setcounter then it will consider all the updation as one and will just add 1 even setcounter is used in Numch
    }
       //console.log("updated:",counter,new Date().toLocaleTimeString())
  }

  function dec(){
       
       if(counter>0) {
         setCounter(counter-1)
       }
       
       //console.log("updated:",counter,new Date().toLocaleTimeString())
       
  }
  return (
    <>
       <h1>REACT PEOJECT 1</h1>
       <h3>Counter Value : {counter}</h3>
       <button onClick={inc}>Increase Value {counter}</button>
       <button onClick={dec}> Decrease Value {counter}</button>
    </>
  )
}

export default App
