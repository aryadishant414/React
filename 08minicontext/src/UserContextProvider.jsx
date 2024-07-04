import React from 'react'
import UserContext from './context/UserContext';

const UserContextProvider = ({children}) => {
    const [user , setUser] = React.useState(null) // yaha hmane 'React.useState' isliye likha hai coz hame 'useState' hook use krna tha and w.k koi bhi hook use krne ke liye pehle usko 'import' bhi krwana pdta hai. too ham yaha import nhi krwa rhe hai 'useState' hook ko direct he use krr rhe hai direct ye likhke : React.useState(null) . NOTE : 'null' ki jagah ham koi or value bhi de skte hai its our choice
    return(
        <UserContext.Provider value={{user , setUser}}>
        {children}
        </UserContext.Provider>
        )
}

export default UserContextProvider