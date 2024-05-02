import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[white]' onClick={() => navigate('/')}>
        QuickGym.
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-4' onClick={() => navigate('/Menu')}>Menu</li>
        <li className='p-4' onClick={() => navigate('/Home')}>Home</li>
        <li className='p-4' onClick={() => navigate('/About')}>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[white] m-4' onClick={() => navigate('/')}>
          QuickGym.
        </h1>
        <li className='p-4 border-b border-gray-600' onClick={() => navigate('/Menu')}>Menu</li>
        <li className='p-4 border-b border-gray-600' onClick={() => navigate('/Home')}>Home</li>
        <li className='p-4 border-b border-gray-600' onClick={() => navigate('/About')}>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
