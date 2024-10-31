import React from 'react'
import { BsDiamondFill } from "react-icons/bs";
export default function 
() {
  return (
    <> 
        
        <div className='bg-black  text-white w-full font-mono  h-screen p-10 flex flex-row  justify-evenly'>
            <div className='flex  items-center hover:scale-105 mr-5'><img  className="h-5/6"src="../Images/india.jpg"/></div>
            <div className="Who_We_Are w-1/2 flex flex-col  justify-center">
                <div className="What text-white    font-semibold  text-xl    justify-center ">
                 We are the premier digital platform dedicated to connecting you with India’s top researchers across various fields and domains. With a comprehensive database of <span className='text-[#e79c41]'>over 3,000  and more  researchers and academicians</span>, our platform leverages
                <span className='text-[#e79c41]'> Stanford-verified</span> data to provide an unparalleled resource for discovering experts, learning about their contributions, 
                and facilitating meaningful connections within the academic and research communities.
                </div>
                <div className='help   text-xl font-semibold'>
                    <span>Whether you’re a student, fellow researcher, industry professional, or institution, we make it simple to:</span>
                    <ul>
                        <li className='flex flex-row '> <BsDiamondFill  className='text-[#e79c41] mt-1 m-2 '/>Discover Experts: Effortlessly find researchers based on specific fields, subfields, publications, and rankings.</li>
                        <li className='flex flex-row '><BsDiamondFill  className='text-[#e79c41] mt-1 m-2'/>Gain In-depth Insights: Access detailed profiles showcasing each researcher’s expertise, contributions, and academic influence.</li>
                        <li className='flex flex-row '><BsDiamondFill  className='text-[#e79c41] mt-1 m-2'/>Build Networks: Connect with professionals in your area of interest to foster collaboration and knowledge-sharing opportunities.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
