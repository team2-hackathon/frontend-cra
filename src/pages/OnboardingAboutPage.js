import React from "react";
import AdvisorSvg from "../assets/icons/about/Advisor.svg";
import BabySvg from "../assets/icons/about/Baby.svg";
import BusinessSvg from "../assets/icons/about/Business.svg";
import HouseSvg from "../assets/icons/about/House.svg";
import LoansSvg from "../assets/icons/about/Loans.svg";
import MarriedSvg from "../assets/icons/about/Married.svg";
import PartnerSvg from "../assets/icons/about/Partner.svg";
import RentSvg from "../assets/icons/about/Rent.svg";
import ClickableBox from "../component/ClickableBox";


export const OnboardingAboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-15">
      <h1 className="text-3xl font-bold mb-20 mt-10">Tell us about yourself</h1>
      
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 mt-15">
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg items-center justify-center">
          <ClickableBox image={MarriedSvg} alt="Married" text="I am married" />
        
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg items-center justify-center">
        <ClickableBox image={BabySvg} alt="Baby" text="I have kids" />
        
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg items-center justify-center">
        <ClickableBox image={RentSvg} alt="Rent" text="I rent" />
        
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg items-center justify-center">
        <ClickableBox image={HouseSvg} alt="House" text="I own a house" />
       
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg items-center justify-center">
        <ClickableBox image={BusinessSvg} alt="Business" text="I have a business" />
       
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg items-center justify-center">
        <ClickableBox image={LoansSvg} alt="Loan" text="I pay student loans" />
        
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg items-center justify-center">
        <ClickableBox image={AdvisorSvg} alt="Advisor" text="I have a financial advisor" />
        
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg items-center justify-center">
        <ClickableBox image={PartnerSvg} alt="Partner" text="I share finances with a partner" />
        
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
