import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()

  // iss niche wale commented section ki need nhi hai abb kyoki hamne iski jagah 'useLoaderData' Hook ka use krliya hai for more Optimisation
    // const [data , setData] = useState([])
    // useEffect( () => {
    //     fetch('https://api.github.com/users/aryadishant414')
    //     .then(response => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data)
    //     })
        
    // } , [])

    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github


// Ye niche wala function hee responsile hai hamare 'main.jsx' file mai loader ke andar 'cache memory' mai iss 'API' ko fetch krke rkhne ke liye
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/aryadishant414')
  return response.json()
}

