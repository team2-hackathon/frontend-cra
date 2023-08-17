import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { NavBar } from "../component/NavBar";

export const ProtectedPage = () => {
  return (
    <>
      <SignedIn>
        <div className="pb-32 ">
          <NavBar />
          <Outlet />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};
