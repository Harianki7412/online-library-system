import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Online Library</h3>
          <p className="text-sm">
            Your gateway to a world of knowledge. Explore, discover, and add your favorite reads.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            {/* Social Media Icons (placeholders) */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaFacebook size={26}/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaTwitterSquare size={26}/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaInstagramSquare size={26}/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaLinkedin size={26}/>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Browse Books
              </Link>
            </li>
            <li>
              <Link to="/add-book" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Add Book
              </Link>
            </li>
            {/* Add more links as needed */}
            <li>
              <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info / Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <p className="text-sm mb-2">
            Sevda, Ashta, Sehore(M.P.)466125
          </p>
          <p className="text-sm mb-2">
            Email: <a className="hover:underline ">hariomverma0004@gmail.com</a>
          </p>
          <p className="text-sm">
            Phone: 9584418381
          </p>
          {/* You could add a simple newsletter signup here */}
          {/* <h4 className="text-lg font-semibold text-white mt-6 mb-3">Newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-md text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md transition-colors duration-200"
            >
              Subscribe
            </button>
          </form> */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Online Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;