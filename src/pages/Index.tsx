
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { DemoSection } from "@/components/DemoSection";
import { UserStorySection } from "@/components/UserStorySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <FeatureHighlights />
      <DemoSection />
      <UserStorySection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
