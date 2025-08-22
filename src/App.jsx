import { useState } from 'react'

import './App.css'
import SearchBar from './component/SearchBar'
import Favmovie from './component/favmovie'
import Login from './component/Login'
import Signup from './component/Signup'
import Layout from './Layout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  
  const router=createBrowserRouter([
    {
      path:'/',element:<Layout/>,
      children:[
      {path:'', element:<SearchBar/>},
      {path:'/favmovie',element:<Favmovie/>},
      {path:'/login',element:<Login/>},
      {path:'/Signup',element:<Signup/>},
      ],
    },
  ])
  
  return (
    <>
      <RouterProvider router={router}/>  
       
    </>
  )
}

export default App
