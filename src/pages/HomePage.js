import React from "react";
import splashImage from "../assets/splash.png";
import "./homepage.css";
export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="image-container fade-in">
        <img src={splashImage} alt="splash" />
      </div>
      {/* <h1 className="mb-2 text-3xl font-bold text-center">
        Make money decisions easier
      </h1>
      <h2 className="px-6 py-4 mb-6 text-base font-semibold text-center text-gray-600">
        See everything from one place at a glance so you can make the best
        informed decisions on your finances
      </h2>
   
      <div className="flex flex-col items-center mt-12 space-y-4">
        <button className="px-4 py-2 text-white bg-blue-400 rounded hover:bg-gray-600">

          Sign up with Google
        </button>
        <button className="px-4 py-2 text-white bg-blue-400 rounded hover:bg-gray-600">
          Sign up with Apple
        </button>
        <h2>OR</h2>
        <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-gray-600">
          Sign up with Email
        </button>
      </div>

      <div>
        <h1>Team2 Financial App Homepage</h1>
        <button className="p-4 bg-green-300 border-2 rounded-xl">
          <a href="/dashboard">Go to Dashboard</a>
        </button>

        
      </div> */}

      <a href="/about">
        <button className="w-[18.75rem] bg-[#C5E1F2] py-[.625rem] rounded-md shadow-sm border-[1px] border-[#82B8D9]">
          Continue
        </button>
      </a>
    </div>
  );
};
