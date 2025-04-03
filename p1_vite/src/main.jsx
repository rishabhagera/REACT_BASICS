import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp ()
{
  return(
    <div>
      <h1>
        HELLO BUDY !
      </h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target:"_blank"
//   },
//   children:'Click ME TO VISIT GOOGLE'
// }
// // thier is no custom react written for this reactElement

const anotherElement =(<a href ="http://google.com" target="_blank">VISIT GOOGLE</a>)

const anoherUser =" ? TEA "

const reactElement = React.createElement(
  //pre-defined context/syntax
  //1 parameter
  'a',
  {href:'https://google.com',target:"_blank"},//if no attribute then empty
  'click me to visit google',
  anoherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />


    {/* <Myapp /> */}
    {/* reactElement */ }
    {/*anotherElement */}
  </StrictMode>,
)
