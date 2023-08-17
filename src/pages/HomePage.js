import React from "react";

export const HomePage = () => {
  return (

    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center mb-2">Make money decisions easier</h1>
      <h2 className="text-base text-gray-600 font-semibold text-center py-4 px-6 mb-6">
        See everything from one place at a glance so you can make the best informed decisions on your finances
      </h2>
    
      <div className="flex flex-col items-center space-y-4 mt-12">
        <button className="bg-blue-400 hover:bg-gray-600 text-white px-4 py-2 rounded">
          Sign up with Google
        </button>
        <button className="bg-blue-400 hover:bg-gray-600 text-white px-4 py-2 rounded">
          Sign up with Apple
        </button>
        <h2>OR</h2>
        <button className="bg-blue-600 hover:bg-gray-600 text-white px-4 py-2 rounded">
          Sign up with Email
        </button>
      </div>

    <div>
      <h1>Team2 Financial App Homepage</h1>
      <button className="p-4 bg-green-300 border-2 rounded-xl">
        <a href="/dashboard">Go to Dashboard</a>
      </button>

    </div>
    </div>

  );
};
