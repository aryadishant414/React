import { useState , useCallback , useEffect , useRef} from 'react'


function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  // 'useRef' Hook
  const passwordRef = useRef(null)


  // iss 'passwordGenerator' ka bss itna saa hee goal hai ki ise 'Cache MEmory' mai rkho isse 'Optimise' kro
  // ye niche wala (passwordGenerator) 'function definition' hee too hai
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*-_=+[]{}~`"
    }

    for(let i = 1 ; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)



  } , [length , numberAllowed , charAllowed , setPassword])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();  // sirf UI interactive banane ke liye isko use kiya hai ki copy hota hua highlight ho jaae and user ko achi feel aaye. agr isko nahi bhi likhenge too bhi chalega
    // passwordRef.current?.setSelectionRange(0,3);  // range dedi ki itne hee portion ko select krna hai but copy itne ko hee nhi krr rha hai ye baat ka dhyaan rkhna slect too poore input field ko hee krr rha hai coz of 'passwordRef.current?.select()'. bss password highlight itne characters ko hee krr rha hai jitn ki hamne range di hai
    window.navigator.clipboard.writeText(password)  // this line is used to copy something on clipboard
  } , [password])
  

  // run krne ka goal yaha sai achieve ho rha hai
  useEffect( () => {
    passwordGenerator()
  } , [length , numberAllowed , charAllowed , passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={ (e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
              type='checkbox'
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
        />
        <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        defaultChecked = {charAllowed}
        id='characterInput'
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor='characterInput'>Characters</label>
      </div>
    </div>


     </div>
    </>
  )
}

export default App
