import React, { useState } from 'react'
import { useUserStore } from '../stores/useUserStore'
import { Link, useNavigate } from 'react-router-dom'
import {Loader} from 'lucide-react'

const Login = () => {
 const{login , loading , user} = useUserStore()
  const[val,setval] =useState({})
   const navigate = useNavigate(); 
  const handleSubmit = (e) => { 
  e.preventDefault();
    login(val);
    
   console.log("clicked")
  }  


    const inputHandler = (e) =>{
setval({...val,[e.target.name] : e.target.value });

  }

  console.log(val)
  return (
    <div className=' flex items-center justify-center  w-screen bg-red-500  bg-cover  bg-no-repeat  bg-center h-[100vh] '    style={{
        backgroundImage: "url('/assets/Gemini_Generated_Image_sciobasciobascio.png')",
      }}>
       <div className='w-[600px] flex flex-col min-h-[350px] bg-opacity-70 bg-white shadow-full rounded-lg'>
 <h1 className='text-[45px]'>𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖡𝖺𝖼𝗄!</h1>
 <h6 className='w-full text-[19px] text-gray-500'>𝖫𝗈𝗀 𝗂𝗇𝗍𝗈 𝗒𝗈𝗎𝗋 𝖳𝖺𝗌𝗄𝖥𝗅𝗈𝗐 𝗉𝗋𝗈 𝖺𝖼𝖼𝗈𝗎𝗇𝗍</h6>

{/* input */}
<div className="flex flex-col items-center justify-center gap-5  w-full pt-6 ">
  <div className='w-[70%] relative'>
      <input className=' w-full shadow-md rounded-sm space-x-5  h-8  ' type='email' name='email'  onChange={inputHandler}  />
  {val.email ? "" : <span className=' absolute left-1  top-1 text-[13px]  text-gray-400 '>Email Address</span>}  
  </div>
   <div className='w-[70%] relative'>
      <input className=' w-full shadow-md rounded-sm space-x-5 h-8  ' type='password'  name='password' onChange={inputHandler} />
   {val.password ? "" : <span className=' absolute left-1 text-[13px] top-1  text-gray-400 '>Password</span> } 
  </div>
<div className='flex items-center justify-center gap-20'>
        <span className='text-sm flex items-center gap-1'> Remember me <input type="checkbox" /></span>
<h4 className='text-sm flex items-center'>Forgot Password?</h4>
</div>

 </div>

{/* button*/}

        <div className="flex justify-center w-full mt-6">


            {loading ? (
                <>
                  <Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
                  Loading...
                </>
              ) : 
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-1 rounded-md 
                       transition-all duration-200 shadow-md"
         onClick={handleSubmit} >
            Login
          </button>

            }
        </div>

        <Link to="signup">
             <h5 className='text-sm mt-3 text-gray-500'>Dont have an account? Sign up </h5>
        </Link>
    




       </div>
    </div>
  )
}

export default Login
