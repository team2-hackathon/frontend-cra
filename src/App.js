// import "./App.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
import { ProtectedPage } from "./pages/ProtectedPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import Logout from "./pages/Logout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NavBar } from "./component/NavBar";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
function App() {
  return (
    <>
      <NavBar />

      <ClerkProvider publishableKey={clerkPubKey}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<ProtectedPage />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </ClerkProvider>
    </>
  );
}

export default App;
