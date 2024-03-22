
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [toggle, setToggle] = useState(true);
  
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
<>
<div className='relative lg:w-[1240px] mx-auto '>

<div className=' absolute z-10  lg:w-[1240px] mx-auto'>
    <div className='flex justify-between items-center h-24 lg:w-[1240px] w-[480px]   mx-auto  bg-transparent text-white '>
    <div className='flex justify-center  items-center ml-10'>
     <Link to='/'> <img src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-logo-light.svg" alt="" /></Link>
   
      </div>
     <div  className=' justify-end hidden md:flex' >
      <ul className='flex '>
      <Link to='/'> <li className='px-5 py-2 font-semibold text-xl hover:text-yellow-500'>Home</li></Link>
        <Link to='/course'><li className='px-5 py-2 font-semibold text-xl hover:text-yellow-500'>All Courses</li></Link>
        <Link to='/about'><li className='px-5 py-2 font-semibold text-xl hover:text-yellow-500'>About</li></Link>
        <NavLink to='/contact'><li className='px-5 py-2 font-semibold text-xl hover:text-yellow-500'>Contact</li></NavLink>
          
        </ul>
           
          <Link to='/course'> <button type="button" class=" focus:outline-none text-white bg-yellow-400 hover:bg-white  hover:text-black focus:ring-4 text-lg font-semibold rounded-full py-2 px-5 ">Start Learning</button></Link> 
      </div>

      <div onClick={handleNav} className='block px-10 md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      {/* </div> */}
      <ul className={nav ? ' fixed left-2 top-20 w-[99%] h-[250px] border-r border-r-gray-900 text-black bg-[white] ease-in-out duration-1000' : 'ease-in-out duration-1000 fixed left-[-90%] z-50'}>

  <Link to='/' onClick={toggleMenu}><li className='p-4 border-b border-gray-600'>Home</li></Link>
  <Link to='/course'> <li className='p-4 border-b border-gray-600'>All Courses</li></Link>
  <Link to='/about'><li className='p-4 border-b border-gray-600'>About</li></Link>
  <Link to='/contact'><li className='p-4'>Contact</li></Link>
      </ul>
      </div>
   
    </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;