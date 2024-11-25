import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { LiaUniversitySolid } from 'react-icons/lia';
import Sidebar from './SideBar';
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


  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl  w-[500px] shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
          >
            {/* Top Bar with Name and Rank */}
            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
              <h2 className="text-lg font-bold">{item.authfull || 'Unknown Name'}</h2>
              <span className="flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-semibold">
                <IoIosStar className="text-yellow-300 text-xl mr-1" />
                {item.rank}
              </span>
            </div>

            {/* Content Area */}
            <div className="px-6 py-5">
              {/* University Info */}
              <div className="flex items-center text-gray-600 mb-6">
                <LiaUniversitySolid className="text-gray-400 text-2xl mr-2" />
                <span className="text-base font-medium">{item.inst_name || 'Unknown University'}</span>
              </div>

              {/* Statistics Section */}
              <div className="mb-6 space-y-4">
                <div className="text-center py-4 rounded-lg bg-gray-50">
                  <div className="text-gray-700 font-semibold text-sm mb-1">H-Index (Including Self)</div>
                  <div className="text-lg font-bold text-indigo-600">{item.h_index_including || 'N/A'}</div>
                </div>
                <div className="text-center py-4 rounded-lg bg-gray-50">
                  <div className="text-gray-700 font-semibold text-sm mb-1">Citations (Including Self)</div>
                  <div className="text-lg font-bold text-indigo-600">{item.citations_including || 'N/A'}</div>
                </div>
                <div className="text-center py-4 rounded-lg bg-gray-50">
                  <div className="text-gray-700 font-semibold text-sm mb-1">Papers (Including Self)</div>
                  <div className="text-lg font-bold text-indigo-600">{item.papers_including || 'N/A'}</div>
                </div>
              </div>

              {/* Excluding Self Citations Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Excluding Self Citations</h3>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">H-Index:</span>
                  <span className="text-gray-800 font-semibold">{item.h_index_excluding || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">Citations:</span>
                  <span className="text-gray-800 font-semibold">{item.citations_excluding || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">Papers:</span>
                  <span className="text-gray-800 font-semibold">{item.papers_excluding || 'N/A'}</span>
                </div>
              </div>

              {/* Field of Work Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Field of Work</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="block text-xs font-semibold">Major Field:</span>
                    <span className="block text-sm text-gray-600">{item.field || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold">Sub-Field 1:</span>
                    <span className="block text-sm text-gray-600">{item.sm1 || 'N/A'}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-xs font-semibold">Sub-Field 2:</span>
                    <span className="block text-sm text-gray-600">{item.sm2 || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Border Accent */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default App;
