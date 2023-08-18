import React from "react";

export const OnboardingChoosePage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-15">
      <h1 className="mt-20 mb-10 text-3xl font-bold">Connect your Accounts</h1>
      <h2 className="mt-1 mb-20 text-l text-center flex flex-wrap">
        Connecting your accounts will make every day finance seamless and fun!
      </h2>

      <div className="mt-12 flex flex-col items-center">
        <button className="w-60 h-10 mb-2 text-black bg-[#C5E1F2] rounded-lg hover:bg-gray-600 border-[1px] border-[#82B8D9] shadow-md">
          Connect Banks
        </button>
        <button className="w-60 h-10 text-black bg-[#C5E1F2] rounded-lg hover:bg-gray-600 border-[1px] border-[#82B8D9] shadow-md">
          Connect Credit Card
        </button>
      </div>

      <div className="mt-20">
        <a href="/dashboard">
          <button className="w-60 px-16 py-2 text-black bg-gray-200 rounded-lg hover:bg-gray-600 border-[1px] border-[#82B8D9] shadow-md mt-20">
            Skip for now
          </button>
        </a>
      </div>
    </div>
  );
};
