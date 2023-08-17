import { SignOutButton } from "@clerk/clerk-react";

export const DashboardPage = () => {
  return (
    <div>
      Hello
      <br></br>
      <button className="p-2 bg-lime-400 rounded-xl">
        <SignOutButton />
      </button>
    </div>
  );
};
