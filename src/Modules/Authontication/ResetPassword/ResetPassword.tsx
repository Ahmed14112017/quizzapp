import { useForm } from "react-hook-form";
import { Resetpassword } from "../../../interface/interface";
import axios from "axios";
import { AUTH_URL } from "../../../constans/END-POINTS";
import { VALIDATIONS } from "../../../constans/VAILDATION";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm<Resetpassword>();
  const onsubmit=async(data:Resetpassword)=>{
    try{
      const response =await axios.post(AUTH_URL.resetpassword,data)
      console.log(response.data);
      toast.success(response.data.message)
      navigate("/Login")
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <h1 className="py-5 font-bold text-3xl text-auttextcolor">Reset password</h1>
      <div className="py-10">
        <form onSubmit={handleSubmit(onsubmit)}>
        <label htmlFor="email" className="block py-3">Email address</label>
        <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
        <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
        <input type="email" placeholder="Type your email" className="w-full bg-authbackground"{...register("email",{required:"Email is require",pattern:{
          value:VALIDATIONS.emailRegex,
          message:"Invalid email"
        }})}/>
        </div>
        {errors.email?errors.email.message:<span className="text-red-600">email is wrong</span>}
        <label htmlFor="seed" className="block py-3">OTP</label>
        <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
        <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
        <input type="seed" placeholder="OTP" className="w-full bg-authbackground"{...register("otp",{required:"otp is require"})}/>
        </div>
        {errors.otp?errors.otp.message:<span className="text-red-600">OTP is wrong</span>}
        <label htmlFor="password" className="block py-3">password</label>
        <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
        <i className="fa-solid fa-key bg-authbackground text-xl mr-3"></i>
        <input type="password" placeholder="Type your password" className="w-full bg-authbackground"{...register("password",{required:"password is require",pattern:{
          value:VALIDATIONS.passwordRegex,
          message:"Invalid password"
        }})}/>
        </div>
        {errors.password?errors.password.message:<span className="text-red-600">password is wrong</span>}
        {/* <label htmlFor="password" className="block py-3">password</label>
        <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
        <i className="fa-solid fa-key bg-authbackground text-xl mr-3"></i>
        <input type="email" placeholder="Type your email" className="w-full bg-authbackground"{...register("email",{required:"email is require",pattern:{
          value:VALIDATIONS.emailRegex,
          message:"Invalid email"
        }})}/>
        </div>
        {errors.confirmPassword?errors.confirmPassword.message:<span className="text-red-600">Password is wrong</span>} */}
        <div>
        <button className="py-3 px-10 rounded-2xl bg-white text-black font-semibold"type="submit">Reset<i className="fa-regular fa-circle-check px-3"></i></button>

        </div>
        </form>
      </div>
       
        
      </div>
  )
}



