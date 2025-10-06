import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CounterPage from './zustand_module/pages/counter'
import CatPage from './zustand_module/pages/cat'
import FoodPage from './zustand_module/pages/food'
import BearPage from './zustand_module/pages/bear'

const routers = createBrowserRouter([
  {
    path: "/zustand",
    children: [
      {
        path: "",
        element: <CounterPage/>
      },
      {
        path: "cat",
        element: <CatPage/>
      },
      {
        path: "food",
        element: <FoodPage/>
      },
      {
        path: "bear",
        element: <BearPage/>
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
