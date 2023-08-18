import { SignOutButton, useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";

const UserPage = () => {
  const { getToken } = useAuth();
  const { user } = useUser();

  async function checkAuth() {
    const data = {
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

  return (
    <div>
      {" "}
      <button onClick={checkAuth} className="p-2 bg-amber-500 rounded-xl">
        This button sends an auth to the backend
      </button>
      <button className="p-2 bg-lime-400 rounded-xl">
        <SignOutButton />
      </button>
    </div>
  );
};
export default UserPage;
