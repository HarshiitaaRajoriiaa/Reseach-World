import React from 'react';
import { IoSearchCircle } from "react-icons/io5";
export default function TaglineSection() {
    return (
        <>
            <div className='w-full h-screen flex flex-col items-center justify-center  bg-[#00264d]  text-white'>
                <div className='text-center text-6xl font-semibold mb-4'>Research <span className='bg-[#ff8c00] h-fit w-fit text-black rounded-sm pl-2 pr-2'> hub</span></div>
                <div className="Tag_Line text-center text-4xl font-semibold mb-4">
                    Empowering Research Connections Across India
                </div>
                <div className="Sub_Tag_Line text-center text-lg max-w-2xl px-4">
                    Whether you’re a student, fellow researcher, industry professional, or institution, our platform will help you discover experts, gain in-depth insights, and build valuable networks in the academic and research communities across India.
                </div>
                <div className='mt-10 hover:scale-105 '>
                    <button className='bg-[#007bff] text-xl text-slate-200  justify-between rounded-lg font-semibold p-1  pt-2 w-96 h-fit flex flex-row  pl-4 pr-4'>
                        Explore your interest.... <IoSearchCircle className=' text-4xl ' />
                    </button>
                </div>
            </div>
        </>
    );
}

