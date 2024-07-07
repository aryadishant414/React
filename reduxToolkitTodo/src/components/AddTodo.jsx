import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
function AddTodo() {

  const [input , setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input)) // iss line ka mtlb yahi hai ki 'dispatch' use ho rha hai yaha and w.k that 'dispatch' is used to add data on the store. ANd we also know ki dispatch 'reducer' ka use krke store mai value change krta hai islie dispatch ke andar hamne 'addTo' reducer ka use kiya hai THATS WHY HAME harr ekk individual 'reducer' ko import krwana pdta hai
    // ABB ISS STEP KE BAAD HAMARA INPUT BANN GAYA HAI TOO VPS USS INPUT FIELD KO KHAALI BHI KRLETE HAI NAHITO ACHA NAHI LAGEGA KI DATA ADD KRNE KE BAAD BHI WO DATA HAMARI INPUT FIELD PAR SHOW HO RHA HAI
    setInput('')
  }


return (
  <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
  </form>
)
}

export default AddTodo