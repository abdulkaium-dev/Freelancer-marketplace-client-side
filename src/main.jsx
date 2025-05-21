import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Route/Router.jsx'
// import AuthProvider from './component/AuthProvider.jsx'
// import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router ={router}></RouterProvider>
    {/* <ToastContainer></ToastContainer> */}


  </StrictMode>,
)
