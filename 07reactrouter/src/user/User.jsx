import React from "react";
import { useParams } from "react-router-dom";


export default function User() {
    const {userid}=useParams()
    return(
        <>
         <div className="bg-gray-600 p-4 text-white flex justify-center">User  : {userid}</div>
        </>
    )
}