import React , {useState , useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext) //jese 'useState' hook use krte hai wese hee 'useContext' hook ka use krr rhe hai by passing its value.  ye 'setUser' hamne "UserContextProvider.jsx" ke andar banaya tha so yaha direct iss 'setUser' variable ko access krr paa rhe hai. access islie krr paa rhe hai kyoki 'Login.jsx' 'UserContextProvider.jsx' ka children hai wo hamne usme('UserContextProvider.jsx') already bata diya hai

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})  // iss line ka mtlab hai ki hamne 'setuser' ke andar username and password bhej diye hai
    }
  return (
    <div>
        <h2>Login</h2>

        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />

        <input type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login