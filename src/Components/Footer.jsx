import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="shadow dark:bg-[#0f3249] mt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            {/* Logo Section */}
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/assets/KQlogowhite.png"
                className="h-20 sm:h-24 lg:h-28"
                alt="Knowledge Quest Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>

            {/* Navigation Links */}
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="appdevelopment"
                  className="hover:underline me-4 md:me-6"
                >
                  Google Flutter
                </a>
              </li>
              <li>
                <a href="portfolio" className="hover:underline me-4 md:me-6">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://forms.office.com/pages/responsepage.aspx?id=XWw-lpHoekGlgSs5V-dA_cSeeLdkO8lNglt51RYSY4pUNkRIVFM0R1kwVVJWS0w1MkpLUFVFWldHUi4u&route=shorturl"
                  className="hover:underline me-4 md:me-6"
                >
                  Enroll Now - As a College
                </a>
              </li>
              <li>
                <a
                  href="https://forms.office.com/pages/responsepage.aspx?id=XWw-lpHoekGlgSs5V-dA_cSeeLdkO8lNglt51RYSY4pUN0NaS1pTRTBVNjg1UEtUOE9YQzZBQ0k0NC4u&route=shorturl"
                  className="hover:underline me-4 md:me-6"
                >
                  Enroll Now - As a Student
                </a>
              </li>
              <li>
                <a
                  href="http://soilsoft.ai/"
                  className="text-white hover:underline"
                >
                  About SoilSoft Technologies
                </a>
              </li>
            </ul>
          </div>

          {/* Description Section */}
          <p className="text-left text-gray-500 text-sm sm:text-base">
            Empowering innovators, developers, and entrepreneurs
            <br /> with real-time training and hands-on project development.
          </p>

          {/* Footer Bottom Section */}
          <div className="mt-16">
            <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
            <div className="flex flex-wrap justify-between items-center mt-4 text-gray-500 text-sm dark:text-gray-400">
              <span>
                © 2024{' '}
                <a href="/" className="hover:underline">
                  Knowledge Quest™
                </a>
                . All Rights Reserved.
              </span>
              <p>Developed with ❤️ by SS DevTeam!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
