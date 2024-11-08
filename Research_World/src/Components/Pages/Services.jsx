import React from 'react'
import { GrServices } from "react-icons/gr";
export default function Services() {
    return (
        <div className="Services_We_Provided  bg-gray-100 flex pb-10 flex-col   w-full">
            <div className='flex  flex-row justify-center'>
                <h1 className=' flex  flex-row text-5xl mt-20 hover:text-[#e79c41] w-fit text-[#00264d] font-semibold font-Roboto  '>
                    <GrServices className='mr-3 ' /> Services we Provide
                </h1></div>
            <div className='mt-10 flex flex-row  justify-evenly  flex-wrap w-full '>
                <div className='bg-[#00264d] m-4 text-white h-fit  p-5 rounded-lg shadow-slate-600 shadow-lg hover:scale-105 w-fit'>
                    <img className="rounded-lg  h-80 " src="../Images/discovery.jpg" />
                    <h1 className=' mt-2 text-xl text-center text-[#e79c41] font-bold'>Researcher Discovery and Filtering</h1>
                    <div className='w-80 text-center'>Enable users to easily find researchers by filtering through a wide range of criteria, such as field, subfield, number of publications, and rank. </div>
                </div>
                <div className='bg-[#00264d] m-4 text-white h-fit p-5 rounded-lg shadow-slate-600 shadow-lg hover:scale-105  w-fit'>
                    <img className="rounded-lg  h-80" src="../Images/insights.jpg" />
                    <h1 className='  mt-2 text-xl  text-center text-[#e79c41] font-bold'> Research Profile Insights</h1>
                    <div className='w-80 text-center '>Provide comprehensive profiles for each researcher, including an overview of their publications, areas of expertise, ranks, and notable contributions.</div> 
                </div>
                <div className='bg-[#00264d] m-4 text-white h-fit p-5 rounded-lg shadow-slate-600 shadow-lg hover:scale-105  w-fit'>
                    <img className="rounded-lg  h-80" src="../Images/network.jpg" />
                    <h1 className='  mt-2 text-xl  text-center text-[#e79c41] font-bold'> Collaborative Networking</h1>
                    <div className='w-80 text-center '> enabling users to build networks based on common research interests through their mails , university , country .</div> 
                </div>

            </div>
        </div>
    )
}
