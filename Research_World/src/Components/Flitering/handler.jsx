import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import Cards from './Cards';

function ParentComponent() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-research-eight.vercel.app/get-All');
        const result = await response.json();
        setData(result);
        setFilteredData(result); // Initialize filtered data with all data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Function to handle filtering, passed to SideBar
  const handleFilter = (filters) => {
    const { name, institute, field } = filters;

    // Apply filtering
    const filtered = data.filter((item) => {
      return (
        (name ? item.authfull?.toLowerCase().includes(name.toLowerCase()) : true) &&
        (institute ? item.inst_name?.toLowerCase().includes(institute.toLowerCase()) : true) &&
        (field ? (
          item.sm1?.toLowerCase().includes(field.toLowerCase()) || 
          item.sm2?.toLowerCase().includes(field.toLowerCase())
        ) : true)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className="flex">
      <SideBar onFilter={handleFilter} />
      <div className="flex-grow p-4">
        <Cards data={filteredData} />
      </div>
    </div>
  );
}

export default ParentComponent;
