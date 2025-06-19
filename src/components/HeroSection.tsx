
import { Badge } from "@/components/ui/badge";
import { Star, Users, Trophy } from "lucide-react";
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Career Strava for Mid-Career Professionals
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform random learning into strategic career advancement. Track skills, set goals, and maintain momentum toward your 3-year vision.
            </p>

            <WaitlistForm />

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-green-400 text-green-400" />
                <span>Early access launching soon</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>Join 500+ professionals</span>
              </div>
            </div>
          </div>

          {/* Right side - App Screenshot */}
          <div className="relative">
            <div className="bg-gray-900 rounded-lg p-1 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Cadence App Interface" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
