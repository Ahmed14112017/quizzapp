import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "./Shared/Component/AuthLayout/AuthLayout"
import Notfound from "./Shared/Component/Notfound/Notfound"
import Login from "./Modules/Authontication/Login/Login"
import Register from "./Modules/Authontication/Register/Register"
import Forgetpassword from "./Modules/Authontication/Forgetpassword/Forgetpassword"
import ChangePassword from "./Modules/Authontication/ChangePassword/ChangePassword"
import Logout from "./Modules/Authontication/Logout/Logout"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import MasterLayout from "./Shared/Component/MasterLayout/MasterLayout"
import Dashboard from "./Shared/Component/Dashboard/Dashboard"
import ResetPassword from "./Modules/Authontication/ResetPassword/ResetPassword"



function App() {

  const router=createBrowserRouter([
    {
      path:"",element:<AuthLayout/>,errorElement:<Notfound/>,
      children:[
        {index:true,element:<Login/>},
        {path:"Login",element:<Login />},
        {path:"register",element:<Register />},
        {path:"forget-password",element:<Forgetpassword />},
        {path:"reset-password",element:<ResetPassword />},  
        {path:"change-password",element:<ChangePassword />},
        {path:"Logout",element:<Logout />},
      ]

    },
    {
      path:"dashboard",element:<MasterLayout/>,errorElement:<Notfound/>,
      children:[
        {index:true, element:<Dashboard/>}
      ]
    }
  ])
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router} />
    </>
  )
}

export default App
