import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri';
import {IoIosArrowForward} from 'react-icons/io'

import logo from '../assets/logo.png';


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
      </div>
    </div>
  )
}

export default Sidebar