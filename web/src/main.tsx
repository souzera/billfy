import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { Home } from './routes/home/home.tsx'
import { Login } from './routes/login/login.tsx'
import { Playlist } from './routes/playlist/playlist.tsx'

export const router  = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'playlists',
    element:<Playlist/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)