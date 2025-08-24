import { useState } from 'react'

import './App.css'
import SearchBar from './component/SearchBar'
import Favmovie from './component/favmovie'
import Login from './component/Login'
import Signup from './component/Signup'
import Layout from './Layout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <RouterProvider router={router}/>  
       
    </Provider>
  )
}

export default App
