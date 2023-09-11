import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./statics/navbar/Navbar";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Login from "./pages/authentication/login/Login";
import Register from "./pages/authentication/register/Register";
import ForgotPassword from "./pages/authentication/forgotpassword/ForgotPassword";
import NewReservationForm from "./components/newReservation/NewReservationForm";
import RegisterUser from "./pages/authentication/registerUser/RegisterUser";
import Notfound from "./pages/notfount/Notfound";
import RegisterPassword from "./pages/authentication/registerPassword/RegisterPassword";

const DisplayNavbar = () => {
  return (
    <div className="display-sidebar-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

function App() {
  const registerToken = localStorage.getItem("registerToken");
  const forgotPasswordToken = localStorage.getItem("forgetPasswordToken");
  return (
    <Routes>
      <Route element={<DisplayNavbar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/newReservation" element={<NewReservationForm />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/newReservation" element={<NewReservationForm />} />
      <Route
        path={`/enjoyAlbania/registration/${registerToken}`}
        element={<RegisterUser />}
      />
      <Route
        path={`/enjoyAlbania/resetPassword/${forgotPasswordToken}`}
        element={<RegisterPassword />}
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
