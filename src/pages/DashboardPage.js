import { SignOutButton, useAuth, useUser } from "@clerk/clerk-react";
import dashboardPlaceholder from "../assets/dashPlaceholder.gif";
import axios from "axios";
import { useEffect } from "react";
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
      const res = await axios.post("http://localhost:8080/checkAuth", data, {
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
      <img src={dashboardPlaceholder} />
      <button onClick={checkAuth}>
        This button sends an auth to the backend
      </button>
      <button className="p-2 bg-lime-400 rounded-xl">
        <SignOutButton />
      </button>
    </div>
  );
};
