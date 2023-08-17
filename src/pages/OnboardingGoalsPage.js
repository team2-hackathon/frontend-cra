import React from "react";
import BudgetSvg from "../assets/icons/goals/Budget.svg";
import CreditscoreSvg from "../assets/icons/goals/Creditscore.svg";
import FutureSvg from "../assets/icons/goals/Future.svg";
import LearnSvg from "../assets/icons/goals/Learn.svg";
import ManageSvg from "../assets/icons/goals/Manage.svg";
import NetworthSvg from "../assets/icons/goals/Networth.svg";
import SavingsSvg from "../assets/icons/goals/Savings.svg";
import SpendingSvg from "../assets/icons/goals/Spending.svg";


export const OnboardingGoalsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold mb-8">Choose your goals</h1>
      
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={SpendingSvg} alt="Spending" />
        <p className="text-center">Track Spending</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={NetworthSvg} alt="Networth" />
        <p className="text-center">Track Net Worth</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={SavingsSvg} alt="Savings" />
        <p className="text-center">Grow Savings</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={CreditscoreSvg} alt="Creditscore" />
          <p className="text-center">Grow Credit Score</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={BudgetSvg} alt="Budget" />
          <p className="text-center">Create a Budget</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={ManageSvg} alt="Manage" />
          <p className="text-center">Manage Budget</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={FutureSvg} alt="Future" />
        <p className="text-center">Plan for Future</p>
        </div>
        <div className="bg-gray-200 w-1/3 p-2 rounded-lg flex flex-col items-center justify-center">
        <img src={LearnSvg} alt="Learn" />
        <p className="text-center">Learn Finance</p>
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
