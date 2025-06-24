import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
 const data=useLoaderData()
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/usrjsr').then(response=>response.json()).then(data=>{setData(data)})
    // },[])
    return (
        <>
         <div className=" flex flex-col gap-10 items-center justify-center text-center m-4 bg-gray-600 text-white p-4 text-3xl"> Github Followers: {data.followers}
            <img src={data.avatar_url}></img>
         </div>
         
        </>
    )
}

export const githubInfo=async()=> {
  const response= await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}