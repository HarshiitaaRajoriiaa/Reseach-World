import React from 'react'
import { MdHome } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
export default function Header() {
  return (
    <div>
      <div className='bg-[#00264d]  p-3 sticky z-50 shadow-xl text-white flex flex-row justify-between flex-wrap'>
        <div className="Logo_Title flex flex-row">
          <img  className ="h-12 w-14" src="../Logo.png" alt='logo'/>
          <div className="title font-bold text-2xl mt-2 ml-3 font-Roboto"><span className='text-[#ff8c00]'>Research</span> World</div>
        </div>
        <div className=" flex flex-row Other_Buttons space-x-4 mt-2">
          <button className=' flex flex-row text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41]   pl-3 pr-3'> <MdHome  className='mt-1 mr-2'/>Home</button>
          <button className=' flex flex-row text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41]   pl-3 pr-3'> <IoShareSocial  className='mt-1 mr-2'/>About Us</button>
          <button className=' flex flex-row text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41]   pl-3 pr-3'> <SlCallOut  className='mt-1 mr-2'/>Contact Us</button>
          <button className=' flex flex-row text-center font-semibold text-lg bg-[#007bff] p-1 rounded-lg hover:bg-[#e79c41]   pl-3 pr-3'> <FaUserCircle  className='mt-1 mr-2'/> Profile</button>
        </div>
      </div>
    </div>
  )
}
