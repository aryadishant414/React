import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}


// ye niche wala hamara wala custom react jo hamne banayi thi uska code ye niche wale 'createRoot' method mai inject nhi hua coz hamne jo custom properties likhi hai object mai react too kuch dusri properties expect kar rha hai unki jagah par. 
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'  // ye wo text hai jo hame hamare element mai inject krna hota hai
// }


const anotherElement = (
  <a href='https://google.com' target='blank'> Visit Google</a>
)

// creating our variable to inject inside below createElement method
const anotherUser = 'chai aur react';

// REact andar ese create krta hai hai element ko
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com' , 
   target: '_blank'
  } ,
  'click me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
)



// JSX ka ekk or mtlb pata chala => ki JAVASCRIPT ke andar HTML mix hai isse ham JSX hee kahenge