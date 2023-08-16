import React from "react";

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Tell us about yourself</h1>
      
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <div className="bg-gray-200 w-1/3 p-4 rounded">
          
          I am married
        </div>
        <div className="bg-gray-200 w-1/3 p-4 rounded">
          I have kids
        </div>
        <div className="bg-gray-200 w-1/3 p-4 rounded">
          I rent
        </div>
        <div className="bg-gray-200 w-1/3 p-4 rounded">
          I own a house
        </div>
        <div className="bg-gray-200 w-1/3 p-4 rounded">
          I have a business
        </div>
        <div className="bg-gray-200 w-1/3 p-4 rounded">
          I pay student loans
        </div>
        <div className="bg-gray-200 w-1/3 p-4 rounded">
          I have a financial advisor
        </div>
        <div className="bg-gray-200 w-1/3 p-4 rounded">
          I share finances with a partner
        </div>
      </div>
      
      <div className="mt-12">
        <button className="bg-blue-400 hover:bg-gray-600 text-white px-4 py-2 rounded">
          Continue
        </button>
      </div>
    </div>
  );
};
