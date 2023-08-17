import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { DashboardPage } from "./DashboardPage";

export const LoginPage = () => {
  return (
    <div>
      <SignedIn>
        <DashboardPage />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};
