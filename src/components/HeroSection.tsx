
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "./WaitlistForm";

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Content */}
          <div className="lg:col-span-5">
            <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 text-emerald-300 border-emerald-500/30 hover:from-emerald-500/30 hover:to-emerald-600/30 transition-all duration-300">
              Career Development • Reimagined
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Manage your career like you manage your product
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Cadence transforms sporadic learning into strategic career advancement. Set your 3-year quest, define actions, track skill progress, and find cadence toward your next promotion.
            </p>

            <div className="mb-8">
              <WaitlistForm 
                source="hero" 
                placeholder="Enter your email to get early access" 
                buttonText="Join waitlist" 
                className="max-w-md" 
              />
            </div>
          </div>

          {/* Right side - Premium GIF Container */}
          <div className="lg:col-span-7 relative">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-3xl"></div>
            
            {/* Glassmorphic container */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-3xl blur-sm"></div>
              
              {/* Main container */}
              <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-2 shadow-2xl">
                {/* Inner container with subtle gradient border */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-600/30">
                  <img 
                    src="https://i.imgur.com/xbIixmZ.gif" 
                    alt="Cadence App Demo - Interactive career development interface showing quest planning and skill tracking features" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Subtitle for the demo */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 font-medium">
                Interactive Demo • Real-time Career Tracking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
