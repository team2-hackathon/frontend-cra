import { useState } from "react";
import predictedBudget from "../../assets/dashboard/predicted.png";
export const PredictedBudget = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div>
      <div className="w-10/12 p-2 mx-auto border-[1px] border-[#F8F8F8] rounded-2xl shadow-lg relative">
        {/* <h3 className="text-center">Predicted Budget Overview</h3> */}
        <img src={predictedBudget} className="mx-auto" />
        {!isHidden && (
          <div className="bg-[#D9D9D9] h-56 absolute w-[105%] left-[-2.5%] top-[20%] rounded-xl shadow-lg p-4">
            <h3 className="text-center text-[1.5rem] font-medium ">
              Predictive Budgeting
            </h3>
            <div className="h-[1px] w-full bg-black my-2"></div>

            <p>
              Based on the past 6 months of your spending, we created a budget
              for you for the month.
            </p>
            <div className="flex justify-center w-full">
              <button
                className="rounded-xl w-[6.875rem] bg-[#C5E1F2] border-[#82B8D9] border-[1px] py-[.6875rem] px-[1.75rem] mt-4"
                onClick={() => {
                  setIsHidden((prev) => true);
                }}
              >
                Got it!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
