import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-800 fixed top-0 w-full z-10" style={{ backgroundColor: "white",padding:"10px",boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.20)" }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-12" style={{maxWidth:"103rem"}}>
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center" style={{marginLeft:"1rem"}} >
          <a href='/'>
            <img src="dose.svg" alt="dose" style={{ width: "9rem", height: "3rem" }}  />
            {/* Replace with your logo */}
            </a>
          </div>
          <div className="hidden sm:block" >
            <div className="ml-4 flex  space-x-4" >
              <NavLink
              style={{color:"#000",fontFamily:"Inter",fontSize:"20px",fontStyle:"normal",fontWeight:"400",}}
                to="/about"
                activeClassName="text-white bg-gray-700"
                className="block text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </NavLink>
              <NavLink
                style={{color:"#000",fontFamily:"Inter",fontSize:"20px",fontStyle:"normal",fontWeight:"400",}}
                to="/career"
                activeClassName="text-white bg-gray-700"
                className="block text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Career
              </NavLink>
              <NavLink
                style={{color:"#000",fontFamily:"Inter",fontSize:"20px",fontStyle:"normal",fontWeight:"400",}}
                to="/partner"
                activeClassName="text-white bg-gray-700"
                className="block text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Partner With Us
              </NavLink>
              <NavLink
                style={{color:"#000",fontFamily:"Inter",fontSize:"20px",fontStyle:"normal",fontWeight:"400",}}
                to="/contact"
                activeClassName="text-white bg-gray-700"
                className="block text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-4">
            <NavLink
              to="/about"
              activeClassName="text-white bg-gray-700"
              className="block text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </NavLink>
            <NavLink
              to="/career"
              activeClassName="text-white bg-gray-700"
              className="block text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Career
            </NavLink>
            <NavLink
              to="/partner"
              activeClassName="text-white bg-gray-700"
              className="block text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Partner With Us
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="text-white bg-gray-700"
              className="block text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
