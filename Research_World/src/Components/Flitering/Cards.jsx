import React from 'react';
import { LiaUniversitySolid } from "react-icons/lia";
import { SlChemistry } from "react-icons/sl";
import { IoIosStar } from "react-icons/io";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { LuFileSpreadsheet } from "react-icons/lu";

function Cards({ data }) {
  return (
    <div className="container mx-auto p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-6 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
        >
          {/* Card content remains the same */}
        </div>
      ))}
    </div>
  );
}

export default Cards;
