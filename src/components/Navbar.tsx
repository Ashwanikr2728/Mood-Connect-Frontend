import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export default function Navbar() {
  const [firstName, setFirstName] = useState<string>("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) return;
    api
      .get("/api/v1/user/me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setFirstName(res.data.firstName))
      .catch((err) => console.log(err));
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/signin");
  }
  return (
    <nav className="w-full flex items-center justify-between px-10 py-4 fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-xl border-b border-gray-200/50">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition">
          M
        </div>

        <span className="text-lg font-semibold text-gray-800 tracking-wide 0 transition">
          MindSupportAI
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        {["Home", "Features", "Safety", "About"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group"
          >
            <span className="group-hover:text-blue-600 transition">{item}</span>

            {/* Underline hover effect */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {token ? (
        <div className="relative flex items-center gap-4">
          {/* Profile */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl shadow-md cursor-pointer border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold">
              {firstName?.charAt(0).toUpperCase()}
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500">Welcome back</span>
              <span className="text-sm font-semibold text-gray-800">
                {firstName}
              </span>
            </div>
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-14 w-44 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl overflow-hidden">
              <button
                onClick={logout}
                className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {/* Login */}
          <Link to="/signin">
            <button className="px-5 py-2 rounded-lg text-gray-600 font-medium hover:text-blue-600 hover:bg-blue-50 transition">
              Login
            </button>
          </Link>

          {/* CTA */}
          <Link to="/signup">
            <button className="relative px-6 py-2 rounded-lg font-semibold text-white bg-linear-to-r from-blue-500 to-purple-500 shadow-lg overflow-hidden group">
              {/* Glow effect */}
              <span className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition"></span>

              {/* Button text */}
              <span className="relative z-10">Get Started</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
