import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BackgroundImage from "./Components/BackgroundImage";
import ProductDevelopmentCard from "./Components/ProductDevelopmentCard";
import AIAgentsCards from "./Components/AIAgentsCards";
import MobileDevelopmentCard from "./Components/MobileDevelopmentCard";
import QAAutomation from "./Components/QAAutomation";

import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <>
      {/* <div className='w-[1280px] text-center m-auto'> */}
      {/* <BackgroundImage /> */}
      <Navbar />
      {/* <div id="hero">
        <Hero />
      </div> */}
      <div className="min-h-screen bg-gray-50  w-full ">
        <h1 className="text-[4rem] md:text-[10rem] lg:text-[14rem] text-gray-800 pt-8 font-bold opacity-10">
          PRODUCTS
        </h1>
        <div className="flex items-center justify-center">
          <ProductDevelopmentCard />
        </div>
        <h1 className="text-[3rem] md:text-[6rem] lg:text-[7rem] text-gray-800 pt-8 font-bold opacity-10">
          {" "}
          MOBILE DEVELOPMENT
        </h1>
        <div className="flex items-center justify-center">
          <MobileDevelopmentCard />
        </div>
        <h1 className="text-[4rem] md:text-[10rem] lg:text-[14rem] text-gray-800 pt-8 font-bold opacity-10">
          {" "}
          AI AGENTS
        </h1>
        <div className="flex items-center justify-center">
          <AIAgentsCards />
        </div>
        <h1 className="text-[3rem] md:text-[8rem] lg:text-[14rem] text-gray-800 pt-8 font-bold opacity-10">
          {" "}
          QA & AUTOMATION
        </h1>
        <div className="flex items-center justify-center">
          <QAAutomation />
        </div>
      </div>

      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}

export default App;
