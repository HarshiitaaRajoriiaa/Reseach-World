import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { LiaUniversitySolid } from 'react-icons/lia';
import { PiChalkboardTeacherThin } from 'react-icons/pi';
import { LuFileSpreadsheet } from 'react-icons/lu';
import { SlChemistry } from 'react-icons/sl';

function App() {
  const [data, setData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-research-eight.vercel.app/get-All');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Render the data in a more colorful and visually appealing card format
  return (
    <div className="container mx-auto p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <div
          key={index}
          className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
        >
          <div className="introduction border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-2xl text-indigo-700">{item.authfull || 'Unknown Name'}</h2>
              <span className="flex items-center bg-yellow-100 rounded-full px-2 py-1 text-yellow-700 text-sm">
                <IoIosStar className="text-yellow-500 text-2xl mr-1" />
                {item.rank}
              </span>
            </div>
            <p className="text-gray-600 flex items-center mt-2">
              <LiaUniversitySolid className="text-xl mr-2 text-gray-500" />
              {item.inst_name || 'Unknown University'}
            </p>
          </div>

          <div className="self grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-2 font-medium text-lg flex items-center text-indigo-700 border-b mb-2 pb-1">
              <PiChalkboardTeacherThin className="text-2xl mr-2 text-indigo-500" />
              Including Self Citations:
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">H-Index: </span>
              <span className="text-sm text-gray-600">{item.h_index_including || 'N/A'}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Citations: </span>
              <span className="text-sm text-gray-600">{item.citations_including || 'N/A'}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Papers: </span>
              <span className="text-sm text-gray-600">{item.papers_including || 'N/A'}</span>
            </div>
          </div>

          <div className="notself grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-2 font-medium text-lg flex items-center text-green-700 border-b mb-2 pb-1">
              <LuFileSpreadsheet className="text-2xl mr-2 text-green-500" />
              Excluding Self Citations:
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">H-Index: </span>
              <span className="text-sm text-gray-600">{item.h_index_excluding || 'N/A'}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Citations: </span>
              <span className="text-sm text-gray-600">{item.citations_excluding || 'N/A'}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Papers: </span>
              <span className="text-sm text-gray-600">{item.papers_excluding || 'N/A'}</span>
            </div>
          </div>

          <div className="work grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-2 font-medium text-lg flex items-center text-blue-700 border-b mb-2 pb-1">
              <SlChemistry className="text-xl mr-2 text-blue-500" />
              Field of Work:
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Major Field: </span>
              <span className="text-sm text-gray-600">{item.field || 'N/A'}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Sub-Field 1: </span>
              <span className="text-sm text-gray-600">{item.sm1 || 'N/A'}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">Sub-Field 2: </span>
              <span className="text-sm text-gray-600">{item.sm2 || 'N/A'}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
