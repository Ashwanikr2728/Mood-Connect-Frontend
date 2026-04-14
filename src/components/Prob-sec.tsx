import { Bot, ShieldAlert } from "lucide-react";
import type { ReactElement } from "react";

const InfoCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactElement;
}) => (
  <div
    className="group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 
  hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition duration-300 flex gap-4"
  >
    {/* Icon */}
    <div
      className="w-12 h-12 flex items-center justify-center rounded-xl 
    bg-linear-to-r from-blue-100 to-purple-100 shrink-0 
    group-hover:scale-110 transition"
    >
      {icon}
    </div>

    {/* Content */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function ProblemSection() {
  return (
    <div
      className="w-full py-24 px-6 md:px-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/src/assets/features-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 HERO STYLE FADE OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-white/50" />

      {/* 🔥 BACKGROUND GLOW (fills empty feel) */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="relative">
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          {/* Label */}
          <p className="text-blue-600 text-sm font-semibold mb-2">
            THE PROBLEM
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Problems with Existing Mental Health Apps
          </h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mb-6" />

          <p className="text-gray-600 text-lg">
            Most chatbots only respond to the latest message, ignoring emotional
            history. Open forums lack the moderation needed to provide a safe
            space for vulnerable users.
          </p>

          <p className="text-gray-400 text-sm mt-2">
            *This platform does not provide diagnosis or therapy.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <InfoCard
              title="Chatbots Lack Context"
              description="Most chatbots only respond to the latest message, ignoring emotional history."
              icon={<Bot size={22} strokeWidth={2} className="text-blue-600" />}
            />

            <InfoCard
              title="Unsafe Peer Interaction"
              description="Open forums lack moderation to provide a safe space for vulnerable users."
              icon={
                <ShieldAlert
                  size={22}
                  strokeWidth={2}
                  className="text-red-500"
                />
              }
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">
            <img
              src="/src/assets/prob-bg.png"
              alt="workflow"
              className="w-full max-w-md opacity-95 mix-blend-multiply hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-gray-400 text-sm mt-16 text-center">
          *This platform does not provide diagnosis or therapy.
        </p>
      </div>
    </div>
  );
}
