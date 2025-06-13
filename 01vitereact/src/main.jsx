import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Usr from './usr.jsx'
import React from 'react';


function Jsr(){
  return (
    <h1>Custom</h1>
  )
}


// const ReactElement={
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target:'_blank'
//     },
//     children: 'Click me to visit Google'
// }

const reactElement=React.createElement('a',{
  href: 'https://google.com',
  target: '_blank'},'CLick me to visit GOOGLE')

const newElement=(
  <a href='https://google.com' target='_blank'>Click to Visit Google</a>
)

createRoot(document.getElementById('root')).render(
<>
<App/>
{reactElement}
{newElement}
<Usr/>
</>
)


