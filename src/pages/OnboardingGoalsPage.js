import React from "react";
import BudgetSvg from "../assets/icons/goals/Budget.svg";
import CreditscoreSvg from "../assets/icons/goals/Creditscore.svg";
import FutureSvg from "../assets/icons/goals/Future.svg";
import LearnSvg from "../assets/icons/goals/Learn.svg";
import ManageSvg from "../assets/icons/goals/Manage.svg";
import NetworthSvg from "../assets/icons/goals/Networth.svg";
import SavingsSvg from "../assets/icons/goals/Savings.svg";
import SpendingSvg from "../assets/icons/goals/Spending.svg";
import ClickableBox from "../component/ClickableBox";


export const OnboardingGoalsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-15">
      <h1 className="text-3xl font-bold mb-20 mt-10">Choose your Goals</h1>
      
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <ClickableBox image={SpendingSvg} alt="Spending" text="Track Spending" />

        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <ClickableBox image={NetworthSvg} alt="Networth" text="Track Net Worth" />
        
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <ClickableBox image={SavingsSvg} alt="Savings" text="Grow Savings" />
     
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <ClickableBox image={CreditscoreSvg} alt="Creditscore" text="Grow Credit Score" />
     
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <ClickableBox image={BudgetSvg} alt="Budget" text="Create a Budget" />
    
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <ClickableBox image={ManageSvg} alt="Manage" text="Manage Budget" />
     
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <ClickableBox image={FutureSvg} alt="Future" text="Plan for Future" />

        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <ClickableBox image={LearnSvg} alt="Learn" text="Learn Finance" />
  
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
