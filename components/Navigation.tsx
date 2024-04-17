'use client'
import React, { useState } from 'react';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <>
    <nav className='flex justify-between items-center  py-4 px-8 '>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold cursor-pointer'>
          <span className='text-blue-500'>F</span>TM
        </h1>
      </div>

      {/* Burger menu icon */}
      <div className='block md:hidden lg:hidden'>
        <button onClick={toggleMenu} className=' focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>

      {/* Navigation links */}
      <ul className={`text-lg md:flex hidden`}>
        <li className='my-2 md:mx-4 cursor-pointer'>Projects</li>
        <li className='my-2 md:mx-4 cursor-pointer'>Tasks</li>
        <li className='my-2 md:mx-4 cursor-pointer'>Profile</li>
      </ul>
    </nav>
    <div className='flex '>
    <ul className={`text-lg w-full bg-blue-500 text-center ${showMenu ? 'block' : 'hidden'} `}>
        <li className='my-2 md:mx-4  cursor-pointer text-white '>Projects</li>
        <li className='my-2 md:mx-4 cursor-pointer text-white'>Tasks</li>
        <li className='my-2 md:mx-4 cursor-pointer text-white'>Profile</li>
      </ul>
    </div>
    </>
  );
};

export default Navigation;
