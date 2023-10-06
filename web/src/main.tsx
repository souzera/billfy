import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { Home } from './routes/home/index.tsx'
import { Login } from './routes/login/index.tsx'
import { Playlist } from './routes/playlist/index.tsx'
import { PlalistContextProvider } from './components/context/playlist-context.tsx'
import { AuthContextProvider } from './components/context/auth-context.tsx'

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
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
)


