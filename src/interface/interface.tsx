import { ReactNode } from "react";

export interface LoginForm{
message: string;
email:string,
password: string;
}
export interface RegisterForm {
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    role:string,
}
export interface patternform {
    value:string;
    message:string
}
export interface Userdata {
    email:string;
    role:string;
}
export interface authuserdata {
    userdata:Userdata|null;
    saveuserdata:()=>void;
}
export interface authcontextprovider{
    children:ReactNode;
}
export interface ForgetPassword {
    email: string;
}
export interface Resetpassword {
    otp:string,
    email:string,
    password:string,
}