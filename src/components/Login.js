import React, { useState } from 'react'
import { Header } from './Header'
export const Login = () => {

const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignForm=()=>{
setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg" alt="image"/>
        </div>

        <form className='p-12 bg-black bg-opacity-80 absolute w-3/12 my-36 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 w-full rounded-lg"/>}
            <input type="text" placeholder='Email Address' className="p-2 my-2 w-full rounded-lg"/>
            <input type="password" placeholder="Password" className="p-2 my-2 w-full rounded-lg"/>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered ? Sign In Now"}</p>
        </form>
    </div>
  )
}
