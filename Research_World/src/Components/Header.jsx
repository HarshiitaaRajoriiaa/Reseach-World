import React, { useState } from 'react';
import { MdHome } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import Profile from './Profile'; // Ensure the path is correct
export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const profileClicked = () => {
    console.log("Hello")
    setShowProfile(prev => !prev)
  }

  return (
    <div>
      <div className='bg-[#00264d] will-change-scroll p-3 sticky z-50 shadow-xl text-white flex flex-row justify-between flex-wrap'>
        <div className="Logo_Title flex flex-row">
          <img className="h-12 w-14" src="../Images/Logo.png" alt='logo' />
          <div className="title font-bold text-2xl mt-2 ml-3 font-Roboto"><span className='text-[#ff8c00]'>Research</span> World</div>
        </div>
        <div className=" flex flex-row Other_Buttons space-x-4 mt-2">
          <button className=' flex flex-row text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41]   pl-3 pr-3'> <MdHome className=' text-xl mt-1 mr-1' />Home</button>
          <button className=' flex flex-row text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41]   pl-3 pr-3'> <IoShareSocial className='text-xl mt-1 mr-1' />About Us</button>
          <button className=' flex flex-row text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41]   pl-3 pr-3'> <SlCallOut className='text-xl mt-1 mr-1' />Contact Us</button>
          <button className=' flex flex-row text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41]   pl-3 pr-3' onClick={profileClicked}> <FaUserCircle className='text-xl mt-1 mr-1' /> Profile</button>
        </div>
      </div>
      {showProfile &&
        <div className="absolute top-12 right-0 z-50 md:right-3">
          <Profile />
        </div>}
    </div>
  )
}




