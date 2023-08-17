import { SignOutButton } from "@clerk/clerk-react";
import dashboardPlaceholder from "../assets/dashPlaceholder.gif";

export const DashboardPage = () => {
  return (
    <div>
      <img src={dashboardPlaceholder} />
      <button className="p-2 bg-lime-400 rounded-xl">
        <SignOutButton />
      </button>
    </div>
  );
};
