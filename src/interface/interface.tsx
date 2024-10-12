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

export interface GroupsList{
    _id:string|null,
    name:string|null,
    status:string|null,
    max_students:number|null
}
export interface Addgroup{
    name:string,
    students:number[]
}
export interface StudentData{
    _id:number,
    email:string,
    last_name:string,
    role:string,
    status:string
}

export interface ItemGroup {
    name:string,
    students:string[]
    message:string
}
