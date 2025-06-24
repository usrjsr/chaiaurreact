import React, { useState } from "react";
import Usercontext from "./Usercontext";

const UsercontextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <Usercontext.Provider value={{user,setUser}}>
      {children}
    </Usercontext.Provider>
  );
};

export default UsercontextProvider;

//jo bhi prop aa rahe as it is pass kardo UsercontextProvider=({children})
/* <Usercontext.Provider value={{user,setUser}}>
   //  {children} {/*jo bhi children aa raha as it is render karwa do */
 //   /Usercontext.Provider> 

//value={{user,setUser}} passes the datas you wantd