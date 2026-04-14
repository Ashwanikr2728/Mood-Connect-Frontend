import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function HeroSection() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <div
      id="home"
      className="w-full min-h-screen relative flex flex-col overflow-hidden"
      style={{
        backgroundImage: "url('public/home-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-transparent" />

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl animate-pulse" />

      <Navbar />

      {/* Hero Content */}
      <div className="relative flex flex-1 items-center px-8 md:px-20">
        <div className="max-w-xl space-y-6">
          {/* Animated Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fadeInUp">
            AI-Driven Mental
            <br />
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Well-Being Support
            </span>
            <br />
            Platform
          </h1>

          {/* Animated Description */}
          <p className="text-gray-600 text-lg animate-fadeInUp delay-150">
            A confidential platform for emotional support, safe peer connection,
            and early risk indication.
          </p>

          <p className="text-gray-400 text-sm animate-fadeInUp delay-300">
            * This platform does not provide diagnosis or therapy.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 animate-fadeInUp delay-500">
            {token ? (
              <button
                onClick={() => navigate("/user-dashboard")}
                className="px-6 py-3 rounded-xl font-semibold text-white 
            bg-linear-to-r from-blue-500 to-purple-500 shadow-lg 
            hover:scale-105 hover:shadow-xl transition"
              >
                Go to Dashboard
              </button>
            ) : (
              <Link to="/signup">
                <button
                  className="group relative px-6 py-3 rounded-xl font-semibold text-white 
  bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500
  shadow-lg hover:shadow-2xl 
  transition-all duration-300 overflow-hidden"
                >
                  {/* Glow layer */}
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                  {/* Content */}
                  <span className="relative flex items-center gap-2">
                    Get Started
                    <span className="transform group-hover:translate-x-1 transition duration-300">
                      →
                    </span>
                  </span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
