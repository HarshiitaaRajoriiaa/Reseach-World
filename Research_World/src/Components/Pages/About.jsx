import React from 'react';
import { BsDiamondFill } from "react-icons/bs";

export default function AboutUs() {
  return (
    <>
      <div className="bg-black text-white w-full font-mono h-full flex flex-col">
        <div className="text-white text-4xl md:text-6xl flex justify-center mt-10 md:mt-20">
          ABOUT US:
        </div>
        
        <div className="bg-black text-white w-full font-mono flex flex-col md:flex-row p-6 md:p-10 justify-center md:justify-evenly items-center md:h-screen">
          <div className="flex items-center hover:scale-105 mb-6 md:mb-0 md:mr-5 w-full md:w-1/3 lg:w-1/4">
            <img className="h-full w-full object-cover" src="../Images/india.jpg" alt="India" />
          </div>
          
          <div className="Who_We_Are w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4">
            <div className="What text-white font-semibold text-lg md:text-xl">
              We are the premier digital platform dedicated to connecting you with India’s top researchers across various fields and domains. With a comprehensive database of 
              <span className="text-[#e79c41]"> over 3,000 and more researchers and academicians</span>, our platform leverages <span className="text-[#e79c41]">Stanford-verified</span> data to provide an unparalleled resource for discovering experts, learning about their contributions, and facilitating meaningful connections within the academic and research communities.
            </div>
            
            <div className="help text-lg md:text-xl font-semibold mt-6">
              <span>Whether you’re a student, fellow researcher, industry professional, or institution, we make it simple to:</span>
              <ul className="mt-4 space-y-4">
                <li className="flex flex-col md:flex-row items-start">
                  <BsDiamondFill className="text-[#e79c41] mt-1 mr-2" />
                  Discover Experts: Effortlessly find researchers based on specific fields, subfields, publications, and rankings.
                </li>
                <li className="flex flex-col md:flex-row items-start">
                  <BsDiamondFill className="text-[#e79c41] mt-1 mr-2" />
                  Gain In-depth Insights: Access detailed profiles showcasing each researcher’s expertise, contributions, and academic influence.
                </li>
                <li className="flex flex-col md:flex-row items-start">
                  <BsDiamondFill className="text-[#e79c41] mt-1 mr-2" />
                  Build Networks: Connect with professionals in your area of interest to foster collaboration and knowledge-sharing opportunities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
