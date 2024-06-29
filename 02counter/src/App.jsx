import { useState } from 'react'  // hooks saare yaahase hee aayenge
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , dishantCounter] = useState(15)  // 'useState' hook hame ekk array deta hai jisme 2 chije hoti hai. pehli too ekk value jo bhi apn use state mai pass krte hai and dusri ekk function jo ki responsible hota hai iss array ki pehli waali value ko update krne ke liye.
  // iss array ki dono value ka naam ham kuch bhi rakh skte hai
  
  // let counter = 15
  
  
  const addValue = () => {
    counter = counter + 1
    dishantCounter(counter)
    // setCounter(counter + 1) ye line bhi thik hai but agar ye line likhni hai too 'counter = counter + 1' ko comment krna hoga
  }

  const removeValue = () => {
    counter = counter - 1;
    dishantCounter(counter)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Decrease value {counter} {addValue}</button>
    </>
  )
}

export default App
