import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/6 h-screen bg-white border-r-2 border-gray-200 p-6 fixed left-0 top-0 bottom-0">
      {/* Name Filter */}
      <div className="mb-6">
        <label className="block text-blue-600 font-semibold mb-2">Name</label>
        <input
          type="text"
          placeholder="Search by name"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Institute Name Filter */}
      <div className="mb-6">
        <label className="block text-blue-600 font-semibold mb-2">Institute Name</label>
        <input
          type="text"
          placeholder="Search by institute"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Rank Sorting Options */}
      <div className="mb-6">
        <label className="block text-blue-600 font-semibold mb-2">Sort by Rank</label>
        <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option value="asc">Increasing Order</option>
          <option value="desc">Decreasing Order</option>
        </select>
      </div>

      {/* Field Filter */}
      <div className="mb-6">
        <label className="block text-blue-600 font-semibold mb-2">Field</label>
        <input
          type="text"
          placeholder="Search by field"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Subfield Filter */}
      <div className="mb-6">
        <label className="block text-blue-600 font-semibold mb-2">Subfield</label>
        <input
          type="text"
          placeholder="Search by subfield"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Subfield 2 Filter */}
      <div>
        <label className="block text-blue-600 font-semibold mb-2">Subfield 2</label>
        <input
          type="text"
          placeholder="Search by subfield 2"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      { /*button */}
      <div className="mt-8 text-center">
        <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
