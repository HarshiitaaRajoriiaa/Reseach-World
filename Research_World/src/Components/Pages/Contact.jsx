import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { MdContacts } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#00264d]">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6 bg-gray-200 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00264d] flex items-center justify-center mb-4">
            Contact Us <MdContacts className="ml-3" />
          </h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email Id:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">
                Write a Message:
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 font-semibold flex items-center justify-center text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Send Message <IoMdSend className="text-2xl ml-3" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
