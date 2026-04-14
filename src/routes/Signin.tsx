import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/Input";
import { api } from "../lib/api";

export default function SigninPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  async function signin() {
    const response = await api.post(
      "/api/v1/user/signin",
      {
        email,
        password,
      },
    );
    console.log(response.data);
    const token = response.data.token;
    const role = response.data.role;
    localStorage.setItem("token", token);
    if (role == "DOCTOR") {
      navigate("/doctor/dashboard");
    } else {
      navigate("/home");
    }
  }
  return (
    <div
      className="min-h-screen w-full flex items-center justify-end relative overflow-hidden"
      style={{
        backgroundImage: "url('/signin-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ BALANCED OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-white/10 via-white/70 to-transparent" />

      {/* 🔥 BACK BUTTON (refined) */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-xl 
    bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 
    hover:bg-white/30 hover:scale-[1.03] transition shadow-sm"
      >
        ← Back
      </button>

      {/* 🔥 LEFT TEXT (VISIBLE BUT SOFT) */}
      <div className="absolute left-10 md:left-20 top-28 md:top-32 z-10 max-w-md">
        <h1 className="text-5xl font-bold leading-tight mb-4 text-gray-800">
          Welcome Back
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Continue your journey towards better mental well-being with AI-powered
          support.
        </p>
      </div>

      {/* Glow */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-40 w-52 h-52 bg-purple-400/20 rounded-full blur-3xl" />

      {/* FORM */}
      <div
        className="relative z-10 w-full max-w-md mr-10 md:mr-20 
    bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Welcome Back
        </h2>
        <p className="text-gray-500 mb-6 text-sm">Log in to your account</p>

        <div className="space-y-4">
          <InputField
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <InputField
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="text-right mt-2">
          <span className="text-sm text-blue-600 cursor-pointer hover:underline">
            Forgot password?
          </span>
        </div>

        <button
          onClick={signin}
          className="w-full mt-5 py-3 rounded-xl font-semibold text-white 
      bg-linear-to-r from-blue-500 to-purple-500 shadow-md 
      hover:scale-[1.03] hover:shadow-lg transition"
        >
          Log In
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-3 text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <p className="text-sm text-gray-500 text-center">
          Don’t have an account?{" "}
          <Link to="/signup">
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
