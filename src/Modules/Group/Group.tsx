import axios from "axios";
import { GROUP_URLS, STUDENTS_URLS } from "../../constans/END-POINTS";
import { SetStateAction, useEffect, useState } from "react";
import { Addgroup, GroupsList, ItemGroup, StudentData } from "../../interface/interface";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

export default function Group() {
  const {register,setValue,reset,handleSubmit,formState:{errors}}=useForm<ItemGroup>({
    defaultValues:{
      name:"",
      students:[]
    }
  })
  const[Groups,SetGroups]=useState<GroupsList[]|null>(null)
  const[groupid,setgroupid]=useState<string[]|null>(null)
  const [student,Setstudent]=useState<StudentData|[]>([])
  const [studentid,Setstudentid]=useState<string[]>([])
  const [show,Setshow]=useState(false)
  const [showdeletemodel,Setshowdeletemodel]=useState<boolean>(false)
  const [showUpdateModel, SetShowUpdateModel] = useState<boolean>(false);
  const [selectedGroup, setSelectedGroup] = useState<ItemGroup | null>(null);


  const closemenu=()=>{
    Setshow(false)
  }
  const showmenue=()=>{
  Setshow(!show)
  reset({name:"",students:[]})
  
  
  }
  const showmodel=()=>{
    Setshowdeletemodel(true)
  }
  const closemodel=()=>{
    Setshowdeletemodel(false)
    setgroupid(null)
  }
  const closeupdatemodel=()=>{
    SetShowUpdateModel(false)
    setgroupid(null)
  }
  const handelclick=(id: string)=>{
    setgroupid(id)
    showmodel()
    console.log(groupid)

  }

  const handelClickupdate=(group:ItemGroup)=>{
    setgroupid(group._id)
    setSelectedGroup({
      name:group.name,
      students:group.students|| [],
      message:group.message||""
    
    })
    setValue("name", group.name);
    setValue("students", group.students || []);
    SetShowUpdateModel(true)
    console.log(selectedGroup)
    console.log(groupid)
   }

  const onsubmitupdate=async(data:ItemGroup)=>{
    try{
      const response =await axios.put(GROUP_URLS.updateGroup(groupid),data,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
      console.log(response.data)
      getGroups();
      SetShowUpdateModel(false)
      toast.success(response.data.message||"record is update successfully")


    }
    catch(error){
      console.log("error")
      toast.error("Failed to update group.");

    }
  }
   
  const getGroups=async()=>{
    try{  
      const response=await axios.get(`${GROUP_URLS.getGroups}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
      console.log(response.data)
      SetGroups(response.data)
      closemenu()
      
    }
    catch(error){
      console.log(error);
    }
  }
//  const getstudentbyid=async(id:any)=>{
//   try{
//     const response=await axios.get(`https://upskilling-egypt.com:3005/api/student/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
//     console.log(response.data)
//   }
//   catch(error){
//     console.log(error);
//   }
//  }
 const getstudent=async()=>{
  try{
    const response=await axios.get(STUDENTS_URLS.getStudents,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
    console.log(response.data)
    Setstudent(response.data)
    console.log(student)
    

  }
  catch(error){
    console.log(error);
  }
 }
  const onsubmit=async(data:ItemGroup)=>{
    try{
      const response= await axios.post<ItemGroup>( GROUP_URLS.createGroup,data,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
      console.log(response.data)
      toast.success(response.data?response.data.message:"group is created successfully")
      getGroups()

    }
    catch(error){
      console.log(error,"group is failed to create");
      
    }
  }
  const deletegroup= async()=>{
    try{
      console.log(`Attempting to delete group with ID: ${groupid}`);

        const response= await axios.delete(GROUP_URLS.deleteGroup(groupid),{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
        console.log(response.data)
        getGroups()
        closemodel()
        toast.success(response.data?response.data.message:"group is deleted successfully")
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getGroups()
    getstudent()
  },[])
  return (
    <div className="grid">
      <div className="flex justify-end mt-3 px-3">
    <button onClick={showmenue}  className="border-2 border-gray-400 rounded-2xl p-1 font-semibold"><i className="fa-solid fa-plus bg-black text-white rounded-full mr-2 p-1 w-6 h-5"></i>Add Group</button>
      </div>
      <div className="grid grid-cols-2 gap-4 border-2 border-gray-400 mt-2 ml-10 p-4">
       
        <div className=" col-span-2">
        <h3 className="p-3">Group List</h3>
        </div>
            
              
              {Groups?(
                Groups.map((group:GroupsList)=>{
                  return(
                    <div
                  key={group. _id} // Ensure that each item has a unique key
                  className="flex justify-between items-center gap-4 border-2 border-gray-400 p-2 w-full"
                >
                  <div>
                    <h3>{group.name}</h3>
                    <span>No of student : {group.max_students}</span> {/* Adjust this field based on actual data */}
                  </div>
                  <div>
                    <i onClick={()=>{handelClickupdate(group)}} className="fa-regular fa-pen-to-square pr-2 cursor-pointer"></i>
                    <i onClick={()=>{
                      handelclick(group._id)

                      }}  className="fa-regular fa-trash-can cursor-pointer"></i>
                  </div>
                </div>
                  )
                })
              ):(<p>loading....</p>)}
              
       
        </div>
        {show?(
         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
         <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
           <h2 className="text-xl font-semibold mb-4">Add New Group</h2>
           <div className="space-y-4">
           <div>
            <form onSubmit={handleSubmit(onsubmit)}>
            <label className="block text-sm font-medium text-gray-700">Group Name</label>
           <input
             type="text"
             placeholder="Group Name "
             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
             {...register("name", {required: true})}
             
             />
             {errors.name?errors.name.message:"Student is already in a group"}
             
           
            <div>
            <label className="block text-sm font-medium text-gray-700">List Students</label>
           <select className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"value={studentid} multiple  {...register("students",{required:"require"})} onChange={(e)=>{
            const selectedoption=Array.from(e.target.selectedOptions).map((e)=>e.value)
            Setstudentid(selectedoption)
           }}>
            <option>List Students</option>
            {student?.map((e:any)=>{
              return(
                <option key={e._id} value={e._id}>{e.first_name} {e.last_name}</option>
              )
            })}
           </select>
           {errors.students?errors.students.message:"create group is failed"}
              </div>
              <div className="flex justify-end space-x-4 py-3">
             <button
               onClick={closemenu}
               className="bg-gray-300 px-4 py-2 rounded-md"
             >
               Cancel
             </button>
             <button
              type="submit"
               className="bg-blue-500 text-white px-4 py-2 rounded-md"
             >
               Add Group
             </button>
           </div>
            </form>
          
            </div>
           </div>
          
           
           
           
         </div>
       </div>
        ):""}
        {showdeletemodel?(
          <div className="fixed inset-0  bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 ">
            <div className="w-1/3 bg-white rounded-xl h-40">
             <div className="flex justify-between items-center border-b-4">
              <h3 className="ps-3 font-bold">delete Group</h3>
              <div className="flex justify-start items-center">
                <div className="border-2 border-gray-400 cursor-pointer">
                <i  onClick={deletegroup} className="fa-solid fa-check p-3"></i>
                </div>
                <div className="border-2 border-gray-400 cursor-pointer ">
                <i onClick={closemodel} className="fa-solid fa-xmark p-3"></i>
                </div>
              </div>
             </div>
             <h2 className="p-3">are you sure delete group ?</h2>
             
            </div>
            </div>
        ):""}
        {showUpdateModel?(
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">update Group</h2>
            <div className="space-y-4">
            <div>
             <form onSubmit={handleSubmit(onsubmitupdate)}>
             <label className="block text-sm font-medium text-gray-700">Group Name</label>
            <input
              type="text"
              placeholder="Group Name "
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              {...register("name", {required: true})} />
              {errors.name?errors.name.message:"Student is already in a group"}
              
            
             <div>
             <label className="block text-sm font-medium text-gray-700">List Students</label>
            <select className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"value={studentid} multiple  {...register("students",{required:"require"})} onChange={(e)=>{
             const selectedoption=Array.from(e.target.selectedOptions).map((e)=>e.value)
             Setstudentid(selectedoption)
            }}>
             <option>List Students</option>
             {student?.map((e:any)=>{
               return(
                 <option key={e._id} value={e._id}>{e.first_name}</option>
               )
             })}
            </select>
            {errors.students?errors.students.message:"create group is failed"}
               </div>
               <div className="flex justify-end space-x-4 py-3">
              <button
                onClick={closeupdatemodel}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
               type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                update Group
              </button>
            </div>
             </form>
           
             </div>
            </div>
           
            
            
            
          </div>
        </div>
        ):""}
    </div>
  )
}
