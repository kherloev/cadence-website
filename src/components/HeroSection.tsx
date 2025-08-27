import { SignupForm } from "./SignupForm";
import { DemoButton } from "./DemoButton";
import { Badge } from "@/components/ui/badge";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="outline" className="mb-8 border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors">🚀 Career tracking for product managers</Badge>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-6 leading-tight">
            Never write another performance review{" "}
            <span className="bg-gradient-emerald bg-clip-text text-transparent">
              from scratch
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-sans">Track your PM growth systematically, then let AI draft professional performance reviews that showcase your advancement. Purpose-built for product managers who want data-backed career progression.</p>
          
          {/* CTA */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="flex flex-col gap-4 justify-center items-center mb-1">
              <SignupForm buttonText="Start Tracking Your Growth" variant="hero" />
            </div>
            <div className="mt-6 space-y-1">
              <p className="text-xs text-muted-foreground/80 font-sans leading-relaxed">
                New signups start with a 14-day free trial. No credit card needed.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/70 font-sans">
                <span>Not ready to signup?</span>
                <DemoButton variant="link" className="inline text-xs" />
                <span>first.</span>
              </div>
            </div>
          </div>
          
          {/* Demo Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <img src="https://i.imgur.com/M65ziN8.gif" alt="Cadence App Demo" className="w-full h-auto rounded-2xl shadow-elegant" loading="lazy" />
          </div>
        </div>
      </div>
    </section>;
};