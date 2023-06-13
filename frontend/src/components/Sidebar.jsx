import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri';
import {IoIosArrowForward} from 'react-icons/io'

import logo from '../assets/logo.png';

const isNotActiveStyle = 'flex items-centre px-5 gap-3 text-gray-500 hover:text-black tranisition-all duration-200 ease-in-out capitalize'
const isActiveStyle = 'flex items-centre px-5 gap-3 font-extrabold border-r-2 border-black tranisition-all duration-200 ease-in-out capitalize'

const Sidebar = ({user, closeToggle}) => {
  const handleCloseSidebar=()=>{
    if(closeToggle) closeToggle(false);
  }
  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scrikk min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link to="/"
         className="flex px-5 gap-2 my-6 pt-1 w-190 iteams-center"
         onClick={handleCloseSidebar}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex flex-col gap-5">
        <NavLink
        to="/"
        className={({isActive})=>isActive? isActiveStyle: isNotActiveStyle}>
        
        </NavLink>
        
        </div>
      </div>
    </div>
  )
}

export default Sidebar