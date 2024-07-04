import React , {useContext} from 'react'  // 'useContext' => name of hook
import UserContext from '../context/UserContext' // isko kyu import krwaya hai? => kyoki hamare pass bohot components bane hue ho skte hai or sabme ho skta hai ki hamne 'context' use kiya ho that's why hame batana padega ki kiss component ka 'context' use krna chaht hai ham
function Profile() {
 const {user} = useContext(UserContext) // just like 'useState' hook we are using this 'useContext' hook also. yaha const '{user}' q likha hai? coz 'Login.jsx' mai 'setUser' method ki vajah sai 'user' ke andra value update hogyi thi
 
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile