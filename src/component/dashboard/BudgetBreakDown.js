import budgetBreakdown from "../../assets/dashboard/budgetbreakdown.png";
export const BudgetBreakDown = () => {
  return (
    <div>
      <div className="w-10/12 p-2 py-12 mx-auto border-[1px] border-[#F8F8F8] rounded-2xl shadow-lg">
        <h3 className="text-center text-[1.25rem] font-semibold">
          Budget Breakdown
        </h3>
        <img src={budgetBreakdown} className="mx-auto mt-12" />
      </div>
    </div>
  );
};
