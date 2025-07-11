
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { WhyPurposeBuiltSection } from "@/components/WhyPurposeBuiltSection";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { BuiltForPMsSection } from "@/components/BuiltForPMsSection";
import { DemoSection } from "@/components/DemoSection";
import { UserStorySection } from "@/components/UserStorySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <WhyPurposeBuiltSection />
      <FeatureHighlights />
      
      <BuiltForPMsSection />
      <DemoSection />
      <UserStorySection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
