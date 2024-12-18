'use client';

import '../globals.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <div className='sticky top-0 z-50 shadow-inner bg-white'>
      <div className=" w-full md:max-w-3xl md:px-8 lg:max-w-[940px] xl:max-w-[1120px] 2xl:max-w-[1120px] flex items-center justify-between lg:justify-between py-4 mx-auto px-8">
      {/* Logo */}
      <div>
        <Link href="/" className="w-28 lg:w-36">
          <Image src={exigentBase} alt="Logo" className="max-h-16" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-row md:items-center space-x-6 text-sm lg:text-base  text-gray-500 ">
        <Link href="/about" className="group border-b-3 border-transparent">
          About
          <div className="border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Link>
        <Link href="/team" className="group border-b-3 border-transparent">
          Team
          <div className="border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Link>
        <div
          className="group relative border-b-3 border-transparent cursor-pointer mb-[6px]"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span>Services</span>
          {dropdownVisible && (
            <div
              className="absolute left-0 top-full w-56 opacity-100 transition-opacity duration-300"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <Link
                href="/family"
                onClick={closeDropdown}
                className="block py-[2px] hover:text-red-700"
              >
                Family Office
              </Link>
              <Link
                href="/special"
                onClick={closeDropdown}
                className="block py-[2px] hover:text-red-700"
              >
                Investment Products
              </Link>
              <Link
                href="/strategic"
                onClick={closeDropdown}
                className="block py-[2px] hover:text-red-700"
              >
                Strategic Advisory
              </Link>
            </div>
          )}
        </div>
        <Link href="/contact" className="group border-b-3 border-transparent">
          Contact
          <div className="border-b-2 rounded-full border-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <button
        type="button"
        className="md:hidden"
        onClick={() => setOpennavbar(true)}
      >
        <Image src={menuIcon} alt="Menu Icon" />
      </button>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-max pb-6 w-1/4 max-w-xs px-6 text-base bg-gray-800 text-white transform ${
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
          <Link href="/about" className="text-white" onClick={() => setOpennavbar(false)}>
            About
          </Link>
          <Link href="/team" className="text-white" onClick={() => setOpennavbar(false)}>
            Team
          </Link>
          <Link href="/family" className="text-white" onClick={() => setOpennavbar(false)}>
            Family Office
          </Link>
          <Link href="/special" className="text-white" onClick={() => setOpennavbar(false)}>
            Special Situations
          </Link>
          <Link href="/strategic" className="text-white" onClick={() => setOpennavbar(false)}>
            Strategic Advisory
          </Link>
          <Link href="/contact" className="text-white" onClick={() => setOpennavbar(false)}>
            Contact
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default NavBar;
