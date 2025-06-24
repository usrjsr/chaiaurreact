import React , {useState,useContext} from "react";
import Usercontext from "../context/Usercontext";


function Login() {
     const [username,setUsername]=useState('')
     const [password,setPassword]=useState('')


     const {setUser}=useContext(Usercontext)
    const handleSubmit=(e)=>{
      e.preventDefault()
      setUser({username,password})
    }
    return(
        <div>
            <h2>LogIn</h2>
            <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login