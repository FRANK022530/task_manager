import Link from 'next/link'
import React from 'react'

const LogIn = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className="w-72 md:w-80 lg:w-96 xl:w-112 h-96 rounded-lg border-solid border-2 p-8 sm:px-8 md:px-10 lg:px-10 xl:px-10">
        <h1 className='text-3xl mb-10'>Log In</h1>
        <input className='border-solid border mb-5 p-2 w-full' type='text' placeholder='Username'/>
        <input className='border-solid border mb-5 p-2 w-full' type='password' placeholder='Password'/>
        
        <Link  href='../pages/Projects'><button type='submit' className='bg-blue-500 p-2 mb-2 mt-3 text-white rounded w-full'>Log In</button></Link>
        
        
        <Link href='../pages/Register'>
          <span className='text-gray-500 text-sm cursor-pointer'>Do not have an account? Register</span>
        </Link>
      </div>   
    </div>
  )
}

export default LogIn
