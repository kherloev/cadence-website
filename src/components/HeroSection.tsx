import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "./WaitlistForm";
export const HeroSection = () => {
  return <section className="container mx-auto px-4 py-12 md:py-20">
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
              <WaitlistForm source="hero" placeholder="Enter your email to get early access" buttonText="Join waitlist" className="max-w-md" />
            </div>
          </div>

          {/* Right side - Pure Minimalist GIF Container */}
          <div className="lg:col-span-7 relative">
            {/* Simple container with just the GIF and subtle shadow */}
            <div className="relative max-w-2xl mx-auto">
              <img src="https://i.imgur.com/xbIixmZ.gif" alt="Cadence App Demo - Interactive career development interface showing quest planning and skill tracking features" className="w-full h-auto rounded-2xl shadow-2xl shadow-black/40" loading="lazy" />
            </div>

            {/* Subtitle for the demo */}
            <div className="text-center mt-8">
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};