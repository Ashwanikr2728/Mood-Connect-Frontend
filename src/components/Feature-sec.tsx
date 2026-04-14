import type { ReactElement } from "react";
import {
  Heart,
  BarChart,
  Users,
  Target,
  AlertTriangle,
  Shield,
} from "lucide-react";

// 🔥 Reusable Feature Card
const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactElement;
}) => {
  return (
    <div
      className="group bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-gray-200 
    hover:shadow-xl hover:-translate-y-1 transition duration-300 flex gap-4"
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
};

export default function FeaturesSection() {
  const features = [
    {
      title: "Emotion Continuity",
      description: "Personalized conversations with emotional context.",
      icon: <Heart size={22} strokeWidth={3} className="text-pink-500" />,
    },
    {
      title: "Mood Pattern Analysis",
      description: "Auto read mood tracking and trend analysis.",
      icon: <BarChart size={22} strokeWidth={3} className="text-teal-600" />,
    },
    {
      title: "Guided Peer Support",
      description: "Safeguarded peer connection for users.",
      icon: <Users size={22} strokeWidth={3} className="text-indigo-600" />,
    },
    {
      title: "Responsible Matching",
      description: "Thoughtful user matching based on stability.",
      icon: <Target size={22} strokeWidth={3} className="text-purple-600" />,
    },
    {
      title: "Risk Detection & Redirection",
      description: "Identifies and redirects at-risk users.",
      icon: (
        <AlertTriangle size={22} strokeWidth={3} className="text-red-500" />
      ),
    },
    {
      title: "Ethical AI Constraints",
      description: "Clear limits on AI to ensure responsible use.",
      icon: <Shield size={22} strokeWidth={3} className="text-blue-600" />,
    },
  ];

  return (
    <div
      id="features"
      className="w-full py-24 px-6 md:px-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/src/assets/features-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ PERFECT OVERLAY (image visible + text readable) */}
      <div className="absolute inset-0 bg-linear-to-b from-white/30 via-white/10 to-white/40" />

      <div className="relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Key Features
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Designed for safe, intelligent and human-centered support
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
