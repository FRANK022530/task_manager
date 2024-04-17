import Link from 'next/link'
import React from 'react'

const LogIn: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-72 md:w-80 lg:w-96 xl:w-112 h-3/5 rounded-lg border-solid border-2 p-8 sm:px-8 md:px-10 lg:px-10 xl:px-10">
        <h1 className='text-3xl mb-10'>Create account</h1>
        <input className='border-solid border mb-5 p-2 w-full' type='text' placeholder='Username'/>
        <input className='border-solid border mb-5 p-2 w-full' type='password' placeholder='Password'/>
        <input className='border-solid border mb-5 p-2 w-full' type='password' placeholder='Confirm Password'/>
        
        <button type='submit' className='bg-blue-500 p-2 mb-2 mt-3 text-white rounded w-full'>Log In</button>
        
        {/* Correct usage of Link to navigate to Register */}
        <Link href='../../'>
          <span className='text-gray-500 text-sm cursor-pointer'>Already have account? Log In</span>
        </Link>
      </div>   
    </div>
  )
}

export default LogIn
