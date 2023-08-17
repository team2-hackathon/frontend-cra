// import "./App.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
import { ProtectedPage } from "./pages/ProtectedPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import Logout from "./pages/Logout";
import { HomePage } from "./pages/HomePage";

import { AccountsPage } from "./pages/AccountsPage";
import { PlansPage } from "./pages/PlansPage";
import { TrendsPage } from "./pages/TrendsPage";
import { PaymentsPage } from "./pages/PaymentsPage";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
function App() {
  return (
    <div className="bg-gray-800 min-h-fullscreen min-w-">
      {/* limits the size of the app to 384 */}
      <div className="relative max-w-sm min-h-screen mx-auto bg-white">
        <ClerkProvider publishableKey={clerkPubKey}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" elemen={<Logout />} />
            <Route element={<ProtectedPage />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/accounts" element={<AccountsPage />} />
              <Route path="/plans" element={<PlansPage />} />
              <Route path="/trends" element={<TrendsPage />} />
              <Route path="/payments" element={<PaymentsPage />} />
            </Route>
          </Routes>
        </ClerkProvider>
      </div>
    </div>
  );
}

export default App;
