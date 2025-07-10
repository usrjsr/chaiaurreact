import './App.css'
import { useState , useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authService from './appwrite/auth';
import { login,logout } from './store/auth.slice';
import { Outlet } from 'react-router-dom';
import {Header, Footer } from './components';


function App() {
   const [loading, setLoading] = useState(true);

   const dispatch = useDispatch();

   useEffect(() => {
    authService.getCurrentUser().then((userData)=>{ 
      if(userData){
         dispatch(login(userData)); // Dispatch login action with user data
      }
      else {
          dispatch(logout()); // Dispatch logout action if no user data
      }
    }).finally(() => setLoading(false)); // Set loading to false after checking user data
   },[])

  return !loading? <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        <div className='text-center'> Utkarsh</div>
        <Outlet/>
      </main>
      <Footer/>
    </div>
    </div>: null;
}

export default App
