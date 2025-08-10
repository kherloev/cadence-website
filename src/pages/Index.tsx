
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { AlternativesSection } from "@/components/AlternativesSection";
import { CoreBenefitsSection } from "@/components/CoreBenefitsSection";
import { DemoSection } from "@/components/DemoSection";
import { UserStorySection } from "@/components/UserStorySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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
      <CoreBenefitsSection />
      <AlternativesSection />
      <DemoSection />
      <UserStorySection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
