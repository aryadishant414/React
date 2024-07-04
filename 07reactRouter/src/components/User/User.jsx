import React from 'react'
import { useParams } from 'react-router-dom'  // This is Another Type of 'Hook'


function User() {
    const {userid} = useParams() // hook sai value li hai iss 'userid' variable ke andar. 'useParams' hook hame allow krta hai value access krne ki jo ki kahi or define hai in our case 'userid' 'main.jsx' mai defined hai
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid} </div>
  )
}

export default User