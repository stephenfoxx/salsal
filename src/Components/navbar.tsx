import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.jpeg";

export const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-emerald-600 text-white shadow-md sticky top-0 z-40 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between">
          {/* Logo / Brand Area */}
          <div className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="Company Logo"
              className="h-14 sm:h-20 w-auto rounded-lg object-contain"
            />
          </div>

          {/* Desktop Links (Hidden on Mobile, flex on Medium screens up) */}
          <ul className="hidden md:flex items-center space-x-6 font-medium text-lg lg:text-xl">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-200 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-200 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/ourwork"
                className="hover:text-yellow-200 transition-colors duration-200"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-200 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Hamburger icon for mobile (Hidden on Desktop) */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-emerald-700 focus:outline-none transition-colors"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <span className="text-2xl block leading-none">☰</span>
          </button>
        </div>
      </nav>

      {/* Backdrop overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Drawer for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-emerald-800 text-white z-50 p-6 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end mb-6">
          <button
            className="p-2 rounded-md hover:bg-emerald-700 text-3xl leading-none focus:outline-none"
            onClick={closeSidebar}
          >
            &times;
          </button>
        </div>

        {/* Mobile Navigation Links (Synced perfectly with Desktop routes) */}
        <ul className="flex flex-col space-y-4 text-lg font-medium">
          <li>
            <Link
              to="/"
              onClick={closeSidebar}
              className="block py-2 px-3 rounded hover:bg-emerald-700 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeSidebar}
              className="block py-2 px-3 rounded hover:bg-emerald-700 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/ourwork"
              onClick={closeSidebar}
              className="block py-2 px-3 rounded hover:bg-emerald-700 transition-colors"
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeSidebar}
              className="block py-2 px-3 rounded hover:bg-emerald-700 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
