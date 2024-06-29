import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from '../components/Card.jsx'

function App() {

  const [count, setCount] = useState(0)

  // ye niche hamne hamara khudka object banaya hai and usko ekk myobj name ke variable mai store karwaya hai jisse ham iss variable ko aage use kar ske
  let myObj = {
    username: "Dishant",
    age: 21
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username ="chaiaurcode" btnText = "click me"/>
      <Card username= "Dishant" btnText = "visit me" />
    </>
  )
}

export default App
