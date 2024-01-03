import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import SignUp from "../pages/auth/signUp";
import SignUpPageTwo from "../pages/auth/signUpPageTwo";
import Home from "../pages/home";
import DashBoard from "../pages/dashboard";
import ProtectedRoute from "./protectedRoute";

const CentralNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUpPageTwo" element={<SignUpPageTwo />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route element={<ProtectedRoute/>}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <DashBoard /> {/* Include your Dashboard component here */}
    </div>
  );
};

export default CentralNav;
