import { useNavigate } from "react-router-dom";
import FirstNav from "../components/FirstNav";

export default function EntryChoice() {
  const navigate = useNavigate();

  return (
    <>
      <FirstNav />

      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-purple-50 to-white px-4">
        <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center space-y-8">
          {/* Heading */}
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Get Started
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Choose how you want to continue
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* USER CARD */}
            <div
              onClick={() => navigate("/signup")}
              className="cursor-pointer p-6 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">👤</div>
              <h2 className="font-semibold text-gray-800 group-hover:text-blue-600">
                Continue as User
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Access AI support & explore doctors
              </p>
            </div>

            {/* DOCTOR CARD */}
            <div
              onClick={() => navigate("/doctor-access")}
              className="cursor-pointer p-6 rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-md transition group"
            >
              <div className="text-3xl mb-3">🩺</div>
              <h2 className="font-semibold text-gray-800 group-hover:text-purple-600">
                Continue as Doctor
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Verified professionals only
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400">
            Secure & privacy-focused platform
          </p>
        </div>
      </div>
    </>
  );
}
