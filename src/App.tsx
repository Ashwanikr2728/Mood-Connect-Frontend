import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./routes/Signup";
import SigninPage from "./routes/Signin";
import Home from "./components/Home";
import DocSignup from "./routes/docSignup";
import EntryChoice from "./routes/EntryChoice";
import DoctorAccess from "./routes/DoctorAccess";
import DoctorDashboard from "./routes/DocDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./routes/UserDashboard";
import UserProtected from "./components/userProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryChoice />} />
        <Route path="/doctor-access" element={<DoctorAccess />} />
        <Route
          path="/doctor/dashboard"
          element={
            <ProtectedRoute>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route
          path="/user-dashboard"
          element={
            <UserProtected>
              <UserDashboard />
            </UserProtected>
          }
        />
        <Route path="/doctor/signup" element={<DocSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
