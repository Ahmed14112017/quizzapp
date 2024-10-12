import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidbar from "../Sidbar/Sidbar";

export default function MasterLayout() {
  return (
    <>
    <div className="flex">
      <div>
      <Sidbar />
      </div>
      <div className="w-full">
    <Navbar/>
    <Outlet />
    </div>
    </div>
   
      
      
      
     
    </>
  )
}
