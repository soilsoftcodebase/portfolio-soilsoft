import React from "react";

const QAAutomationCard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 max-w-[1280px] mx-auto mb-24 mx-4 md:mx-8">
      {/* Left Section: Logo and Description */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        {/* Logo */}
        <img
          src="/assets/AITEAlogo.png" // Replace with actual logo URL
          alt="QAAutomation Logo"
          className="w-72 h-40 mb-4 object-contain"
        />
        {/* Description */}
        <p className="text-gray-700 text-center text-sm">
          QAAutomation streamlines testing processes with advanced automation
          tools, ensuring seamless software quality assurance and improved
          efficiency.
        </p>
      </div>

      {/* Right Section: YouTube Video */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4 md:p-6">
        <iframe
          className="w-full h-[250px] sm:h-[315px] md:h-[450px] rounded-lg"
          src="https://www.youtube.com/embed/3W4nuM_WwSU?si=78IiFDqtdoiJNYSV"
          title="QAAutomation Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default QAAutomationCard;
