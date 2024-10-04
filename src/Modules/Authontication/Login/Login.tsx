import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authuserdata, LoginForm } from "../../../interface/interface";
import {VALIDATIONS} from"../../../constans/VAILDATION";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { authcontext } from "../../../Context/Authcontext";
// import { toast } from "react-toastify";
// import {AUTH_URL} from 
export default function Login() {
    const {saveuserdata}=useContext<authuserdata|null>(authcontext)
    
const {register,handleSubmit,formState:{errors}}=useForm<LoginForm>({defaultValues:{email:"",password:""}})
const navigate=useNavigate()
    const onsubmit=async(data:LoginForm)=>{
        try{
            const response=await axios.post(`https://upskilling-egypt.com:3005/api/auth/Login`,data)
            console.log(response)
            toast.success(response.data?.data.message||"login is successfully")
            localStorage.setItem("token",response.data.data.accessToken)
            saveuserdata()
            navigate("/dashboard")
        }
        catch(error){
            toast.error("login is failed")
        }
    }
  return (
    <div className="py-10">
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
                <label htmlFor="email" className="block" >Registered email address</label>
                <div className="flex items-center border-2 border-gray-600 rounded-3xl px-3 py-2 focus-within:border-auttextcolor2">
                <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>

                <input type="email" placeholder="Type your email" className="  w-full bg-authbackground border-none" {...register("email",{required:"email is require",pattern:{
                    value:VALIDATIONS.emailRegex,
                    message:"Invalid email",
                }})}/> 
                
                </div>
                {errors.email?<span>{errors.email.message}</span>:""}

                <label htmlFor="password" className="block" >password</label>
                <div className="flex items-center border-2 border-gray-600 rounded-3xl px-3 py-2 focus-within:border-auttextcolor2">
                <i className="fa-solid fa-key bg-authbackground text-xl mr-3"></i>

                <input type="password" placeholder="password" className="  w-full bg-authbackground border-none" {...register("password",{required:"password is required"})}/> 
                </div>
                {errors.password?<span>{errors.password.message}</span>:""}
                <div className="flex justify-between items-center py-3">
                <button className="py-3 px-10 rounded-2xl bg-white text-black font-semibold" type="submit">sign in <i className="fa-regular fa-circle-check"></i> </button>
                <span>Forget Password ? <Link className="text-auttextcolor underline-offset-1" to={"/forget-password"}>click here</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}
