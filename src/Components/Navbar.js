import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FaGem } from 'react-icons/fa';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container fixed top-0 w-full z-50">
      <div className="navbar-content container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex flex-col items-center ms-4">
          <Link to={'/'}>
            <span className="text-[#c3910b] font-bold brand">ZA CADCAM</span>
            <FaGem className='brand gem' style={{ color: '#c3910b', fontSize: '38px' }} />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl lg:hidden focus:outline-none"
        >
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

        {/* Navigation Links for large and medium screens */}
        <div className="nav-links lg:flex lg:items-center hidden">
          <ul className="flex flex-row gap-7 text-center text-white text-lg">
            <li>
              <Link to="/" className="hover:text-yellow-500">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-500">Services</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-yellow-500">About Us</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-yellow-500">Contact Us</Link>
            </li>
          </ul>

          {/* Button for large and medium screens */}
          <div className="flex items-center ml-4">
            <Link to="/ordernow">
              <button className="order-button">Order Now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`dropdown-menu lg:hidden ${isOpen ? 'block' : 'hidden'} bg-[#003366] w-full py-4`}>
        <ul className="flex flex-col gap-4 text-white text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-500">Home</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-500">Services</Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-yellow-500">About Us</Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-yellow-500">Contact Us</Link>
          </li>
        </ul>

        {/* Button for small and extra-small screens */}
        <div className="mt-4">
          <Link to="/ordernow">
            <button className="order-button mx-auto order-btn-sm text-center" style={{ width: '127px' }}>Order Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
