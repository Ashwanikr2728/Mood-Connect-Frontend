import { useNavigate } from "react-router-dom";

export default function FirstNav() {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center px-10 py-4 fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200">

      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-9 h-9 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
          M
        </div>

        <span className="text-lg font-semibold text-gray-800 tracking-wide group-hover:text-blue-600 transition">
          Mood Connect
        </span>
      </div>
    </nav>
  );
}