import { Outlet } from "react-router-dom";
import authimg from "../../../assets/Login Image.png"

export default function AuthLayout() {
  return (
    <div className="bg-authbackground lg:h-screen overflow-hidden  ">
        <div className="flex flex-col  justify-between items-center gap-10 text-white w-screen px-12  lg:flex-row h-screen">
       
            <div className="w-full">
            <Outlet/>
            </div>
            <div className="bg-backgroudcolor rounded-xl text-align:center flex items-center justify-center w-full">
            <img src={authimg} />
            </div>
            
        
        </div>
    </div>
    
  )
}
