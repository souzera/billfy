import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { Home } from './routes/home/index.tsx'
import { Login } from './routes/login/index.tsx'
import { Playlist } from './routes/playlist/index.tsx'
import { PlalistContextProvider } from './components/context/playlist-context.tsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'playlists',
    element: <PlalistContextProvider>
      <Playlist />
    </PlalistContextProvider>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


