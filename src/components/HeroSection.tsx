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
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Stop letting your career development happen by accident
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cadence transforms random learning into strategic career advancement. Set your 3-year quest, define actions, track skill progress, and maintain momentum toward your next promotion.
            </p>

            <div className="mb-8">
              <WaitlistForm source="hero" placeholder="Enter your email to get early access" buttonText="Get Early Access" className="max-w-md" />
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                
                
              </div>
            </div>
          </div>

          {/* Right side - App Screenshot */}
          <div className="relative">
            {/* Device frame to make it look like a real app */}
            <div className="relative bg-gray-800 rounded-2xl p-3 shadow-2xl border border-gray-700">
              {/* Browser-like header */}
              <div className="flex items-center space-x-2 mb-3 px-3 py-2 bg-gray-900 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400">
                  cadence.app
                </div>
              </div>
              
              {/* Actual screenshot */}
              <div className="relative overflow-hidden rounded-lg">
                <img src="/lovable-uploads/b86ce357-d2b6-41f5-b327-f4248d657ea9.png" alt="Cadence App - Reflection Interface showing Sarah Chen's weekly victory tracking" className="w-full h-auto rounded-lg shadow-lg" />
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
            
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-3xl -z-10 scale-110"></div>
          </div>
        </div>
      </div>
    </section>;
};