import React from "react";

import logo from "../images/logo.jpeg";
import footerlogo from "../images/footerlogo.jpeg";

const Footer = () => {
  return (
    <footer className="mt-10 bg-white border-t border-slate-200 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left Side: Main Corporate Logo */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-auto object-contain rounded-lg shadow-xs"
          />
        </div>

        {/* Right Side: Footer Brand Asset / Certification Badge */}
        <div className="w-full max-w-[320px] sm:max-w-[400px]">
          <img
            src={footerlogo}
            alt="Footer Brand Detail"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
