
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
              Career Development • Reimagined
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Manage your career like you manage your product</h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">Cadence transforms sporadic learning into strategic career advancement. Set your 3-year quest, define actions, track skill progress, and find cadence toward your next promotion.</p>

            <div className="mb-8">
              <WaitlistForm source="hero" placeholder="Enter your email to get early access" buttonText="Join waitlist" className="max-w-md" />
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                
                
              </div>
            </div>
          </div>

          {/* Right side - Modern Elevated Card */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 shadow-2xl">
              <img 
                src="/lovable-uploads/cadence-demo.gif" 
                alt="Cadence App Demo - Interactive career development interface" 
                className="w-full h-auto rounded-xl"
                onError={(e) => {
                  console.log('Image failed to load:', e);
                  console.log('Attempted path:', '/lovable-uploads/cadence-demo.gif');
                }}
                onLoad={() => {
                  console.log('Image loaded successfully');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
