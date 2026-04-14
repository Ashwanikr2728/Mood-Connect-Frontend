import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="about"
      className="w-full py-20 px-6 md:px-20 relative overflow-hidden text-center"
      style={{
        backgroundImage: "url('/footer-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Overlay (bg visible but softened) */}
      <div className="absolute inset-0 bg-linear-to-r from-white/85 via-white/60 to-white/40" />

      {/* 🔥 Background glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="relative">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md mb-3">
            M
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Mood Connect</h2>

          <p className="text-gray-500 text-sm mt-2">
            AI-powered emotional support, built with care & safety.
          </p>
        </div>

        {/* 🔥 NAV LINKS WITH PREMIUM HOVER */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-medium mb-10">
          {[
            { name: "About", link: "#" },
            { name: "Key Features", link: "#features" },
            { name: "Ethics & Safety", link: "#safety" },
            { name: "Support", link: "#" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative group text-gray-600"
            >
              <span className="group-hover:text-blue-600 transition">
                {item.name}
              </span>

              {/* Gradient underline */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[1.5px] 
              bg-linear-to-r from-blue-500 to-purple-500 
              transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-md mx-auto h-px bg-gray-200 mb-8" />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            className="p-3 rounded-full bg-white/80 border border-gray-200 shadow-sm 
          hover:shadow-md hover:-translate-y-1 transition"
          >
            <FaTwitter size={16} />
          </a>

          <a
            className="p-3 rounded-full bg-white/80 border border-gray-200 shadow-sm 
          hover:shadow-md hover:-translate-y-1 transition"
          >
            <FaLinkedin size={16} />
          </a>

          <a
            className="p-3 rounded-full bg-white/80 border border-gray-200 shadow-sm 
          hover:shadow-md hover:-translate-y-1 transition"
          >
            <FaFacebook size={16} />
          </a>

          <a
            className="p-3 rounded-full bg-white/80 border border-gray-200 shadow-sm 
          hover:shadow-md hover:-translate-y-1 transition"
          >
            <FaEnvelope size={16} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 Mood Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
