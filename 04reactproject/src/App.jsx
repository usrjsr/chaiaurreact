import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [color, setColor] = useState('white');
  

//   return (
// <div className="w-full h-screen duration-200"
//     style={{backgroundColor: color}}
//     >
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//         <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-400 ">Green</button>
//         <button onClick={() => setColor('orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-400 ">Orange</button>
//         <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-400">Red</button>
//         <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">Black</button>
//         <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-400">Blue</button>
//         <button onClick={() => setColor('pink')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-400">Pink</button>
//       </div>
//     </div>
//     </div>
//   );
// }



function App() {
  const change = (color) => {
    return function changing() {
      document.body.style.backgroundColor = color;
    };
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="fixed bottom-10 inset-x-0 mx-auto flex flex-wrap justify-center gap-4 px-6 py-4 bg-white shadow-lg rounded-3xl w-max">
          <button onClick={change('green')} className="bg-green-400 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 duration-200">Green</button>
          <button onClick={change('orange')} className="bg-orange-400 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 duration-200">Orange</button>
          <button onClick={change('red')} className="bg-red-400 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 duration-200">Red</button>
          <button onClick={change('black')} className="bg-black text-white px-4 py-2 rounded-full shadow-md hover:scale-105 duration-200">Black</button>
          <button onClick={change('blue')} className="bg-blue-400 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 duration-200">Blue</button>
          <button onClick={change('pink')} className="bg-pink-400 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 duration-200">Pink</button>
        </div>
      </div>
    </>
  );
}


export default App;
