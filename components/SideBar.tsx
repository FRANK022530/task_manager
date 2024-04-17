import React from 'react'

const SideBar = () => {
  return (
    <div className=' mt-10 h-screen w-2/12 border-r-2'>
        <ul className=' p-10'>
            <li className='flex justify-center items-center py-4 text-lg hover:bg-blue-500 hover:text-white rounded'>Pending</li>
            <li className='flex justify-center items-center py-4 text-lg hover:bg-blue-500 hover:text-white rounded'>Ongoing</li>
            <li className='flex justify-center items-center py-4 text-lg hover:bg-blue-500 hover:text-white rounded'>Done</li>
        </ul>
    </div>
  )
}

export default SideBar