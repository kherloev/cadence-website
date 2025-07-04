
import { WaitlistForm } from "./WaitlistForm";

export const FinalCTASection = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
        
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent leading-tight">
            Ready to Take Control of Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Don't let luck decide your career. Sustain your cadence and develop the skills you need to succeed.
          </p>
          
          <div className="mb-8">
            <WaitlistForm 
              source="final-cta" 
              placeholder="Your email address" 
              buttonText="Join waitlist" 
              className="max-w-lg mx-auto" 
            />
          </div>
          
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Be the first to know when Cadence launches. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};
