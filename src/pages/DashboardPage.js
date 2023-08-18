import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";
import { Transactions } from "../component/dashboard/Transactions";
import { DashHeader } from "../component/dashboard/DashHeader";
import { PredictedBudget } from "../component/dashboard/PredictedBudget";
import { BudgetBreakDown } from "../component/dashboard/BudgetBreakDown";
export const DashboardPage = () => {
  const { getToken } = useAuth();
  const { user } = useUser();

  async function checkAuth() {
    const data = {
      email: user.primaryEmailAddress.emailAddress,
      username: user.username,
      fullName: user.fullName,
    };
    try {
      const URL = `${process.env.REACT_APP_API_SERVER_URL}/checkAuth`;
      const res = await axios.post(URL, data, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <img src={dashboardPlaceholder} /> */}
      <DashHeader />
      <PredictedBudget />
      <BudgetBreakDown />
      <Transactions />

 
    </div>
  );
};
