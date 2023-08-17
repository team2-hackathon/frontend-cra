import React from "react";
import AdvisorSvg from "../assets/icons/about/Advisor.svg";
import BabySvg from "../assets/icons/about/Baby.svg";
import BusinessSvg from "../assets/icons/about/Business.svg";
import HouseSvg from "../assets/icons/about/House.svg";
import LoansSvg from "../assets/icons/about/Loans.svg";
import MarriedSvg from "../assets/icons/about/Married.svg";
import PartnerSvg from "../assets/icons/about/Partner.svg";
import RentSvg from "../assets/icons/about/Rent.svg";

export const OnboardingAboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold mb-8">Tell us about yourself</h1>
      
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={MarriedSvg} alt="Married" />
        <p className="text-center">I am married</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={BabySvg} alt="Baby" />
        <p className="text-center">I have kids</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={RentSvg} alt="Rent" />
        <p className="text-center">I rent</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={HouseSvg} alt="House" />
          <p className="text-center">I own a house</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={BusinessSvg} alt="Business" />
          <p className="text-center">I have a business</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={LoansSvg} alt="Loans" />
          <p className="text-center">I pay student loans</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={AdvisorSvg} alt="Advisor" />
        <p className="text-center">I have a financial advisor</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={PartnerSvg} alt="Partner" />
        <p className="text-center">I share finances with a partner</p>
        </div>
      </div>
      
      <div className="mt-12">
        <button className="bg-blue-400 hover:bg-gray-600 text-white px-16 py-2 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};
