import { useContext } from "react"
import { authcontext } from "../../../Context/Authcontext"

export default function Navbar() {
  const {userdata}=useContext(authcontext)
  console.log(userdata)
  return (
    <div className="border-b-4 border-1 border-gray-200 w-full h-20 flex flex-col justify-center p-3 ">
      <div className="flex justify-between items-center h-20">
        <div className="flex justify-between items-center w-1/2 border-e-2 h-20 pr-2">
          <h3 className=" border-e-2 h-full flex justify-center items-center p-2">Group</h3>
          <button className="py-3 px-5 border-2 rounded-3xl font-bold"><i className="fa-solid fa-circle-plus pr-2"></i>New quiz</button>
          </div>
          <div className="flex justify-between items-center w-1/2 pl-2">
          <div className=" flex justify-between items-center">
          <i className="fa-solid fa-envelope px-10  border-e-2 "></i>
          <i className="fa-solid fa-bell  px-10  border-e-2"></i>
          </div>
         <div className="pl-2">
         <div>{userdata.email}</div>
         <div>{userdata.role}</div>
         </div>
          
        </div>
      </div>
    </div>
  )
}
