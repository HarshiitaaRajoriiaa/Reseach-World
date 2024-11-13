import React from 'react'
import { IoMdExit } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
export default function Profile() {
    return (
        <div className='bg-gray-200 flex flex-col border space-y-2 border-black h-fit w-fit p-3 m-4  pl-7 pr-7 rounded-md'>
            <h1 className='text-center font-semibold '>harshitarajoria02@gmail.com</h1>
            <img className="w-20 h-20  rounded-full shadow-xl  mx-auto  hover:scale-105 " src="../Images/user.jpg" alt="Profile" />
            <h1 className='text-center text-[#007bff] font-bold text-3xl  hover:scale-105 '> Hi Harshita</h1>
            <div className='  flex flex-row justify-between space-x-2 pt-5 '>
                <button className='  flex flex-row text-white font-semibold bg-[#007bff] p-1 rounded-l-lg hover:bg-[#e79c41]   pl-3 pr-3'> <IoMdExit className='text-xl mt-1 mr-2' />Log out</button>
                <button className='  flex flex-row text-white font-semibold bg-[#007bff] p-1 rounded-r-lg hover:bg-[#e79c41]   pl-3 pr-3'>  <IoMdPersonAdd className='text-xl mt-1 mr-2' />Add Another Account</button>
            </div>
        </div>
    )
}
