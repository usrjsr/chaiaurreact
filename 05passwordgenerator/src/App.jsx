import { useState,useCallback ,useEffect,useRef} from 'react'

function App() {
  const [length,setLength]=useState(6)
  const [numallowed,setNumallowed]=useState(false)
  const [charallowed,setCharallowed]=useState(false)
  const [password,setPassword]=useState("")

  //callback memoize all the changes and keep in cache
  const passwordGenerator=useCallback(()=>{
   let pass=""
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numallowed){
    str+="1234567890"
   }
   if(charallowed){
    str+="@#$%^&*+-"
   }

   for(let i=1;i<=length;i++){
    pass+=str[Math.floor(Math.random()*str.length+1)];
   }

   setPassword(pass);
  },[length,numallowed,charallowed,setPassword])

 //useeffect calls the function as there is any changes in the dependencies
  useEffect(()=>{passwordGenerator()},[length,numallowed,charallowed,passwordGenerator])

  const passwordRef=useRef(null);
  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password);
  }
  ,[password])
  return (
    <>
    
      <div className="text-center w-full max-w-lg mx-auto shadow-md rounded-lg px-6 py-8 my-8 bg-gray-800">
        <h1 className="text-4xl text-white mb-6">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            className="w-full py-2 px-3 text-center text-lg bg-white text-black"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-blue-400 px-4 text-black font-semibold hover:bg-blue-500 transition"
          onClick={copyPasswordtoClipboard}>
            Copy
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-white mt-6 items-center">
          <div className="flex items-center gap-2">
            <input type="range" min="6" max="100" id="length" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor="length">Length : {length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="characters" onClick={()=>{setCharallowed((prev) => !prev)}} />
            <label htmlFor="characters">Characters</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="numbers" onClick={()=>{setNumallowed((prev) => !prev)}}/>
            <label htmlFor="numbers">Numbers</label>
          </div>
        </div>
      </div>

    </>
  ) 
}

export default App
