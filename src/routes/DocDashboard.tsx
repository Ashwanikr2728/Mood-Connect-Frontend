
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export default function DoctorDashboard() {
  const navigate = useNavigate();
  const [totalPatients, setTotalPatients] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    try {
      api
        .get("/api/v1/doctor/dashboard", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setTotalPatients(response.data.totalPatients);
          setUsers(response.data.users);
        });
    } catch (error) {
      console.error("Error fetching dashboard", error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-8">
            Doctor Panel
          </h2>

          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium">
              Dashboard
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition">
              Appointments
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition">
              Patients
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition">
              Profile
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm font-medium shadow"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, Doctor 👋
          </h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-gray-500 text-sm">Total Patients</h3>
            <p className="text-3xl font-bold mt-2 text-gray-800">
              {totalPatients}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-gray-500 text-sm">Appointments Today</h3>
            <p className="text-3xl font-bold mt-2 text-blue-600">8</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-gray-500 text-sm">Pending Requests</h3>
            <p className="text-3xl font-bold mt-2 text-purple-600">3</p>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Appointments
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500 bg-gray-50">
                  <th className="py-3 px-2">Patient</th>
                  <th className="py-3 px-2">Age</th>
                  <th className="py-3 px-2">Status</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, indx) => (
                  <tr
                    key={indx}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-2 font-medium text-gray-800">
                      {user.firstName} {user.lastName}
                    </td>

                    <td className="py-3 px-2 text-gray-600">{user.age}</td>

                    <td className="py-3 px-2 text-green-600 font-medium">
                      Active
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
