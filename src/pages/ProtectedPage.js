import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { NavBar } from "../component/NavBar";

export const ProtectedPage = () => {
  return (
    <>
      <SignedIn>
        <NavBar />
        <Outlet />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};
