import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authuserdata, RegisterForm } from "../../../interface/interface";
import { VALIDATIONS } from "../../../constans/VAILDATION";
import axios from "axios";
import { AUTH_URL } from "../../../constans/END-POINTS";
import { useContext } from "react";
import { authcontext } from "../../../Context/Authcontext";
import { toast } from "react-toastify";

export default function Register() {
  const {userdata}=useContext<authuserdata>(authcontext)
  const navigate=useNavigate()
  console.log(userdata)
  const {register,handleSubmit,formState:{errors}}= useForm<RegisterForm>()
  const onsubmit=async(data:RegisterForm)=>{
    try{
      const response= await axios.post(AUTH_URL.register,data)
      console.log(response)
      toast.success(response.data.message)
      navigate("Login")
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className="py-5">
        <div>
        <h3 className="text-auttextcolor font-bold px-10">Continue your learning journey with QuizWiz!</h3>
        <div className="p-10 w-full flex justify-start gap-8">
            <div className="bg-authchoosuserbackgroundcolor w-48 text-center py-5 rounded-xl transition-all hover:outline outline-6 outline-auttextcolor ">
            <Link to="/login" className="text-6xl"><i className="fa-solid fa-user-tie"></i></Link>
            <h6 className="font-semibold pt-2">sign in</h6>
            </div>
            <div className="bg-authchoosuserbackgroundcolor w-48 text-center py-5 rounded-xl transition-all hover:outline outline-6 outline-auttextcolor">
            <Link to="/register" className="text-6xl"><i className="fa-solid fa-user-plus"></i></Link>
            <h6 className="font-semibold pt-2">sign up</h6>
            </div>
            
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col mdl:flex-row justify-between items-center ">
          <div>
          <label htmlFor="first name" className="block" >Your first name</label>
                <div className="flex items-center border-2 border-gray-600 rounded-3xl px-3 py-2 focus-within:border-auttextcolor2">
                <i className="fa-solid fa-address-card bg-authbackground text-xl mr-3"></i>

                <input type="text" placeholder="Type Your first name" className="  w-full bg-authbackground border-none"{...register("first_name",{required:"firstname is require"})}/> 
                
                </div>
                {errors.first_name?<span>{errors.first_name.message}</span>:<span className="text-red-600">first name is wrong</span>}
                </div>
                
                
                <div>
                <label htmlFor="last name" className="block" >Your last name</label>
                <div className="flex items-center border-2 border-gray-600 rounded-3xl px-3 py-2 focus-within:border-auttextcolor2">
                <i className="fa-solid fa-address-card bg-authbackground text-xl mr-3"></i>

                <input type="text" placeholder="Type Your last name" className="  w-full bg-authbackground border-none"{...register("last_name",{required:"lastname is require"})} /> 
                </div>
                {errors.last_name?<span className="text-red-700">{errors.last_name.message}</span>:<span className="text-red-600">last name is wrong</span>}
                </div>
          </div>
                  <div className="py-1">
                  <label htmlFor="email" className="py-2">Your email address</label>
                <div className="rounded-3xl border-2 flex p-3 border-gray-600 items-center">
                <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
                <input type="email"placeholder="Type Your email" className="w-full bg-authbackground" {...register("email",{required:"email is require",pattern:{
                  value:VALIDATIONS.emailRegex,
                  message:"invalid email"
                }})}/>
                </div>
                {errors.email?<span>{errors.email.message}</span>:"email is wrong"}

                  </div>
                  <div className="py-1">
                  <label htmlFor="role"  className="py-2">choose Your role</label>
                <div className="rounded-3xl border-2 flex p-3 border-gray-600 items-center">
                <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
                <select className="w-full bg-authbackground" {...register("role",{required:"role is require"})}>
                  <option value="" disabled>choose Your role</option>
                  <option value="Instructor" >Instructor</option>
                  <option value="student" >student</option>
                </select>
                </div>
                {errors.role?<span>{errors.role.message}</span>:"role is wrong"}

                  </div>
                  <div className="py-1"> 
                  <label htmlFor="password" className="block py-2">Type Your password</label>
                <div className="rounded-3xl border-2 flex p-3 border-gray-600 items-center">
                <i className="fa-solid fa-key bg-authbackground text-xl mr-3"></i>
                <input type="password"placeholder="Type Your password" className="w-full bg-authbackground"{...register("password",{required:"password is require",pattern:{
                  value:VALIDATIONS.passwordRegex,
                  message:"invalid password"
                }})} />
                </div>
                {errors.password?<span>{errors.password.message}</span>:"password is wrong"}

                  </div>
                
                
                
               <div className="py-3">
               <button className="py-3 px-10 rounded-2xl bg-white text-black font-semibold" type="submit">sign up <i className="fa-regular fa-circle-check"></i> </button>

               </div>
               
            </form>
        </div>
    </div>
   
  )
}
