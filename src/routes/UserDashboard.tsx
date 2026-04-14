import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import ProfileSection from "../components/dashboard/ProfileSection";
import DoctorsSection from "../components/dashboard/DoctorSection";
import AiSection from "../components/dashboard/AiSection";
import Tabs from "../components/tabs/Tab";
import { api } from "../lib/api";

type Doctor = {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  specialist: string;
};
type User = {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  age: number;
};

export default function UserDashboard() {
  const [users, setUsers] = useState<User | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [activeTab, setActiveTab] = useState("ai");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    api
      .get("/api/v1/user/dashboard", {
        headers: { Authorization: token },
      })
      .then((res) => setDoctors(res.data.doctors))
      .catch(console.log);

    api
      .get("/api/v1/user/me", {
        headers: { Authorization: token },
      })
      .then((res) => setUsers(res.data))
      .catch(console.log);
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-x-3">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, {users?.firstName}
          </h1>
          <Sparkles className="w-5 h-5 text-gray-600 animate-[wave_1.5s_infinite]" />
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Sections */}
      {activeTab === "ai" && <AiSection />}
      {activeTab === "doctors" && <DoctorsSection doctors={doctors} />}
      {activeTab === "profile" && users && (
        <ProfileSection user={users} setUser={setUsers} />
      )}
    </div>
  );
}
