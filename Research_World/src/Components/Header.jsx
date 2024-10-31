import React, { useState } from 'react';
import { MdHome } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import Profile from './Profile'; // Ensure the path is correct
// import { useNavigate } from 'react-router';

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const profileClicked = () => {
    setShowProfile(prev => !prev)
  }
  // const navigate = useNavigate();

  return (
    <>
      <div className='bg-[#00264d] p-1 shadow-xl text-white flex flex-row justify-between flex-wrap fixed top-0 w-full z-50'>
        <div className="Logo_Title flex flex-row">
          <button><CgDetailsMore className='text-3xl mr-2' /></button>
          <img className="h-12 w-14" src="../Images/Logo.png" alt='logo' />
          <div className="title font-bold text-2xl mt-2 ml-3 font-Roboto">Research <span className='bg-[#ff8c00] h-fit w-fit text-black rounded-sm pl-2 pr-2'> hub</span> </div>
        </div>
        <div className="flex flex-row  justify-evenly flex-wrap Other_Buttons space-x-4 p-1 space-y-2 ">
          <button className='flex flex-row flex-wrap text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41] mt-2 pl-3 pr-3
          ' 
          >
            <MdHome className='text-xl mt-1 mr-1' />Home
          </button>
          <button className='flex flex-row flex-wrap text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41] pl-3 pr-3'>
            <IoShareSocial className='text-xl mt-1 mr-1' />About Us
          </button>
          <button className='flex flex-row  flex-wrap text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41] pl-3 pr-3'>
            <SlCallOut className='text-xl mt-1 mr-1' />Contact Us
          </button>
          <button className='flex flex-row flex-wrap text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41] pl-3 pr-3' onClick={profileClicked}>
            <FaUserCircle className='text-xl mt-1 mr-1' /> Profile
          </button>
        </div>
      </div>
      {showProfile &&
        <div className="absolute top-12 right-0 z-50 md:right-3">
          <Profile />
        </div>}
    </>
  );
}
