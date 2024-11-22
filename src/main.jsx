import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home'
import ManageUser from './pages/ManageUser'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {index:true,element:<Home></Home>},
      {
        path:"login",element:<Login></Login>
      },
      {path:"signUp",element:<SignUp></SignUp>},
      {
        path:"manage",element:<ManageUser></ManageUser>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
