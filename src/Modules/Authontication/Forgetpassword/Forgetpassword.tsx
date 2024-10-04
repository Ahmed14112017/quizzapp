import { useForm } from "react-hook-form";
import { ForgetPassword } from "../../../interface/interface";
import { VALIDATIONS } from "../../../constans/VAILDATION";
import axios from "axios";
import { AUTH_URL } from "../../../constans/END-POINTS";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Forgetpassword() {
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm<ForgetPassword>();
const onsubmit=async(data:ForgetPassword)=>{
  try{
const response = await axios.post(AUTH_URL.forgotpassword,data)
console.log(response.data);
toast.success(response.data.message)

navigate("/reset-password");
  }
  catch(error){
    console.log(error);
  }
}

  return (
    <div >
      <h1 className="py-5 font-bold text-3xl text-auttextcolor">Forgot password</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="py-10">
        <label htmlFor="email" className="block">Email address</label>
        <div className="rounded-3xl p-3 border-2 w-full flex border-gray-600 items-center">
        <i className="fa-solid fa-envelope bg-authbackground text-xl mr-3"></i>
        <input type="email" placeholder="Type your email" className="w-full bg-authbackground"{...register("email",{required:"email is require",pattern:{
          value:VALIDATIONS.emailRegex,
          message:"Invalid email"
        }})}/>
        </div>
        {errors.email?errors.email.message:<span className="text-red-600">email is wrong</span>}
        </div>
        <div>
        <button className="py-3 px-10 rounded-2xl bg-white text-black font-semibold"type="submit">send Email<i className="fa-regular fa-circle-check px-3"></i></button>

        </div>
      </form>
    </div>
  )
}
