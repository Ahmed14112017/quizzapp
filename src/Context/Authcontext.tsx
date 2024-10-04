import { createContext, useEffect, useState} from "react";
import { authcontextprovider, authuserdata, Userdata } from "../interface/interface";
import { jwtDecode } from "jwt-decode";

export const authcontext=createContext<authuserdata|null>(null)
export default function Authcontextprovider({children}:authcontextprovider){
const [userdata,Setuserdata]=useState<Userdata|null>(null)
const saveuserdata=()=>{
    const endecodedcode=localStorage.getItem("token")
    if(endecodedcode){
        const decodedtoken:any=jwtDecode(endecodedcode)
        Setuserdata(decodedtoken)

    }
}
useEffect(()=>{
    if(localStorage.getItem("token")|| userdata != null){
        saveuserdata()
    }

},[])
return(
    <authcontext.Provider value={{userdata,saveuserdata}}>
        {children}
    </authcontext.Provider>
)
}

