import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromChildren, Link, NavLink, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './home/Home'
import About from './About/About'
import './index.css'
import Contact from './Contact/Contact'
import User from './user/User'
import Github ,{githubInfo} from './github/Github'


// const router= createBrowserRouter([{
//   path:'/',
//   element: <Layout/>,
//   children: [ {
//     path: "",
//     element: <Home/>
//   },
// {
//  path: "/about",
// element: <About/> 
// },
// {
//   path: "/contact",
//   element: <Contact/>
// }]

// }])

const router= createBrowserRouter(
  createRoutesFromChildren(<Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route loader={githubInfo} path='github' element={<Github/>}/>
  </Route>)
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
