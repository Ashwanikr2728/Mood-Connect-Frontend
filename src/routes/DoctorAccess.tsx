import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstNav from "../components/FirstNav";
import InputField from "../components/Input";
import { api } from "../lib/api";

export default function DoctorAccess() {
  const [secret, setSecret] = useState("");
  const navigate = useNavigate();
  async function handleVerify() {
    try {
      await api.post("/api/v1/doctor/verify", {
        secret,
      });
      localStorage.setItem("secret", secret);
      navigate("/doctor/signup");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.response?.data?.message || "Invalid secret code");
    }
  }
  return (
    <>
      <FirstNav />

      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-purple-50 to-white px-4">
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-gray-100 space-y-7">
          {/* Heading */}
          <div className="text-center">
            <div className="text-4xl mb-2">🩺</div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Doctor Access
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Secure entry for verified professionals
            </p>
          </div>

          {/* Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-600">
              Secret Code
            </label>

            <InputField
              type="password"
              placeholder="Enter your access code"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            onClick={handleVerify}
            className="w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Verify & Continue
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="flex-1 h-px bg-gray-200" />
            Secure Access
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400 text-center">
            Unauthorized access is strictly prohibited
          </p>
        </div>
      </div>
    </>
  );
}
