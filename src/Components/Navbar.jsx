import React, { useState } from "react";
import KQlogo from "/assets/KQlogo2.png";
import SSlogo2 from "/assets/SSLogo.webp";
import Headline from "/assets/headline.png";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full md:w-[1280px]  mt-8">
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full px-4 md:px-0">
          {/* Logo */}
          <img
            src={SSlogo2}
            className="h-24 sm:h-44 mb-4 md:mb-0"
            alt="SS Logo"
          />
          {/* Headline or Navigation */}
          <div className="md:ml-4 flex justify-center items-center">
            <img
              src={Headline}
              className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto"
              alt="Headline"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-full md:w-[1280px] h-px bg-gray-200 mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
