import {
  ShieldPlus,
  Lock,
  AlertTriangle,
  Bot,
  ShieldAlertIcon,
} from "lucide-react";

// 🔥 Reusable Card
const InfoCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className="group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 
    flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition duration-300"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl 
      bg-linear-to-r from-blue-100 to-purple-100 shrink-0 
      group-hover:scale-110 transition"
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function SafetySection() {
  return (
    <div
      id="safety"
      className="w-full py-24 px-6 md:px-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/safe-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 HERO STYLE FADE (image visible, not hidden) */}
      <div className="absolute inset-0 bg-linear-to-r from-white/85 via-white/60 to-white/40" />

      {/* 🔥 Background glow (fills empty feel) */}
      <div className="absolute top-16 left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-10 w-52 h-52 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="relative">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-semibold mb-2">
            SAFETY & ETHICS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ethical Principles & Safety Measures
          </h2>

          <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />

          <p className="text-gray-600 text-lg">
            A non-clinical support system designed with clear boundaries and
            user safety in mind.
          </p>
        </div>

        {/* Center Icon */}
        <div className="flex justify-center mb-12">
          <div className="p-6 rounded-full bg-white/70 backdrop-blur-md shadow-md border border-gray-200">
            <ShieldAlertIcon size={80} className="text-red-500" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard
            title="No Diagnosis or Therapy"
            description="No medical diagnosis or therapy is provided."
            icon={
              <ShieldPlus size={22} strokeWidth={2} className="text-gray-600" />
            }
          />

          <InfoCard
            title="Safe & Private Environment"
            description="No open  forums or unmoderated discussions."
            icon={<Lock size={22} strokeWidth={2} className="text-green-600" />}
          />

          <InfoCard
            title="Crisis Support Redirection"
            description="Crisis situations are detected and redirected to external support."
            icon={
              <AlertTriangle
                size={22}
                strokeWidth={2}
                className="text-red-500"
              />
            }
          />

          <InfoCard
            title="Human Oversight"
            description="AI assistance complements—not replaces—human professionals."
            icon={<Bot size={22} strokeWidth={2} className="text-blue-600" />}
          />
        </div>
      </div>
    </div>
  );
}
