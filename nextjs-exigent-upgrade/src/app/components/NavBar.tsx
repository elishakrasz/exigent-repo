'use client';

import '../globals.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import closeIcon from '../../../public/close-white.svg';
import exigentBase from '../../../public/exigent_base.jpg';
import menuIcon from '../../../public/menu.svg';

const NavBar = () => {
  const [opennavbar, setOpennavbar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const closeDropdown = () => setDropdownVisible(false);

  // Close the sidebar if the screen width is above 800px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setOpennavbar(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Run on initial render
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full max-w-6xl flex items-center justify-between lg:justify-between py-6 mx-auto px-10">

      <div>
        <a href="/" className="w-28">
          <Image src={exigentBase} alt="Logo" className="max-h-12" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-row md:items-center space-x-6 text-base text-gray-500">
        <a href="/about" className="group pb-1 border-b-3 border-transparent">
          About
          <div className="border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
        <a href="/team" className="group pb-1 border-b-3 border-transparent">
          Team
          <div className="border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
        <div
          className="group relative pb-1 border-b-3 border-transparent cursor-pointer mb-1"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span className="">Services</span>
          {dropdownVisible && (
            <div
              className="absolute left-0 top-full w-56 opacity-100 transition-opacity duration-300"
              onMouseEnter={() => setDropdownVisible(true)} // Keep visible when hovering over the dropdown
              onMouseLeave={() => setDropdownVisible(false)} // Close when leaving the dropdown
            >
              <a href="/family" onClick={closeDropdown} className="block py-[2px] hover:text-red-700">
                Family Office
              </a>
              <a href="/special" onClick={closeDropdown} className="block py-[2px]  hover:text-red-700">
                Investment Products
              </a>
              <a href="/strategic" onClick={closeDropdown} className="block py-[2px]  hover:text-red-700">
                Strategic Advisory
              </a>
            </div>
          )}
        </div>
        <a href="/contact" className="group pb-1 border-b-3 border-transparent">
          Contact
          <div className="border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        type="button"
        className="md:hidden "
        onClick={() => setOpennavbar(true)}
      >
        <Image src={menuIcon} alt="Menu Icon" />
      </button>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-max pb-6 w-1/4 max-w-xs px-6 bg-gray-800 text-white transform ${
          opennavbar ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          type="button"
          className="absolute top-4 left-4"
          onClick={() => setOpennavbar(false)}
        >
          <Image src={closeIcon} alt="Close Menu" />
        </button>
        <div className="flex flex-col space-y-4 mt-12">
          <a href="/about" className="text-white" onClick={() => setOpennavbar(false)}>
            About
          </a>
          <a href="/team" className="text-white" onClick={() => setOpennavbar(false)}>
            Team
          </a>
          <a href="/family" className="text-white" onClick={() => setOpennavbar(false)}>
            Family Office
          </a>
          <a href="/special" className="text-white" onClick={() => setOpennavbar(false)}>
            Special Situations
          </a>
          <a href="/strategic" className="text-white" onClick={() => setOpennavbar(false)}>
            Strategic Advisory
          </a>
          <a href="/contact" className="text-white" onClick={() => setOpennavbar(false)}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
