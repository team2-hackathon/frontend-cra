// import "./App.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
import { ProtectedPage } from "./pages/ProtectedPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedPage />}>
          <Route path="Dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </ClerkProvider>
  );
}

export default App;
