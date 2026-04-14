import FeaturesSection from "./Feature-sec";
import Footer from "./Footer";
import HeroSection from "./Hero-sec";
import ProblemSection from "./Prob-sec";
import SafetySection from "./Safety-sec";

export default function Home() {
  return (
    <div className="bg-green-200">
      <HeroSection />
      <FeaturesSection />
      <ProblemSection />
      <SafetySection />
      <Footer />
    </div>
  );
}
