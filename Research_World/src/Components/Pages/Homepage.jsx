import React from 'react';
import { IoSearchCircle } from "react-icons/io5";
export default function TaglineSection() {
    return (
        <>
            <div className='w-full h-screen flex flex-col items-center justify-center  bg-[#00264d]  text-white'>
            <div className="title  text-7xl mb-6 ">RESEARCH HUB</div>
                <div className="Tag_Line text-center text-5xl font-semibold mb-4">
                    Empowering Research Connections Across  <span className='bg-gradient-to-r from-orange-600 via-white to-green-400 inline-block text-transparent bg-clip-text'>India</span>
                </div>
                <div className="Sub_Tag_Line mt-5 text-center text-xl max-w-4xl px-4">
                    Whether you’re a student, fellow researcher, industry professional, or institution, our platform will help you discover experts, gain in-depth insights, and build valuable networks in the academic and research communities across .
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

