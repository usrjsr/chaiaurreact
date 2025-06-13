import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../component/card'

let myobj={
  username: 'utkarsh',
  age:19
}

let arr=[23,334,,54]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-lg mb-5'>Tailwind Test</h1>
     <Card username='Utkarsh Singh Rajput' position='Senior Software Engineer' myarr={myobj} array={arr}/>
     <Card username='Sumit Singh Rajput' />
    </>
  )
}

export default App
