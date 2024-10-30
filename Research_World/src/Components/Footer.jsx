import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h5 className="font-bold text-lg mb-4">About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div   
 className="col-span-1">
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="font-bold text-lg mb-4">Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, Anytown, CA 12345</p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-200 pt-4">
          <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}