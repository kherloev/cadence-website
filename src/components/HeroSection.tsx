import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";
export const HeroSection = () => {
  return <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
              Career Development • Reimagined
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Manage your career like you manage your product</h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">Cadence transforms sporadic learning into strategic career advancement. Set your 3-year quest, define actions, track skill progress, and keep sustained cadence toward your next promotion.</p>

            <div className="mb-8">
              <WaitlistForm source="hero" placeholder="Enter your email to get early access" buttonText="Join waitlist" className="max-w-md" />
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                
                
              </div>
            </div>
          </div>

          {/* Right side - Floating Screenshot */}
          <div className="relative">
            {/* Floating screenshot with subtle effects */}
            <div className="relative group">
              <img src="/lovable-uploads/b86ce357-d2b6-41f5-b327-f4248d657ea9.png" alt="Cadence App - Reflection Interface showing Sarah Chen's weekly victory tracking" className="w-full h-auto rounded-xl shadow-2xl transform rotate-1 transition-transform duration-300 hover:rotate-0 hover:scale-105" />
              
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-xl pointer-events-none"></div>
              
              {/* Background glow */}
              <div className="absolute inset-0 bg-green-500/15 rounded-xl blur-2xl -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};