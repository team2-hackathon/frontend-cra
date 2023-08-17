import { SignOutButton, useAuth } from "@clerk/clerk-react";
import dashboardPlaceholder from "../assets/dashPlaceholder.gif";
import axios from "axios";
export const DashboardPage = () => {
  const { getToken } = useAuth();

  async function useFetch() {
    const res = await axios.get("http://localhost:8080/get", {
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    console.log(res.data);
  }

  return (
    <div>
      <img src={dashboardPlaceholder} alt="dashboardPlaceholder"/>
      <button onClick={useFetch}>
        This button sends an auth to the backend
      </button>
      <button className="p-2 bg-lime-400 rounded-xl">
        <SignOutButton />
      </button>
    </div>
  );
};
