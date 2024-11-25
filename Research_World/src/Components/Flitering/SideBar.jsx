import React, { useState } from 'react';

export default function SideBar({ onFilter }) {
  // Local state to manage filter criteria
  const [filters, setFilters] = useState({
    name: '',
    institute: '',
    field: '',
  });

  // Update the filter criteria state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Trigger filtering when the user submits the form
  const handleFilter = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  // Clear filters
  const handleClear = () => {
    setFilters({ name: '', institute: '', field: '' });
    onFilter({ name: '', institute: '', field: '' });
  };

  return (
    <div className="p-4 bg-gray-100 h-screen w-64 shadow-lg">
      <h2 className="text-lg font-bold mb-4">Filter Options</h2>
      <form onSubmit={handleFilter} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Filter by name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Institute</label>
          <input
            type="text"
            name="institute"
            value={filters.institute}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Filter by institute"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Field</label>
          <input
            type="text"
            name="field"
            value={filters.field}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Filter by field"
          />
        </div>

        <div className="flex space-x-2">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Apply Filter
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="w-full px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
