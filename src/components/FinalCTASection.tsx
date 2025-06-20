
import { WaitlistForm } from "./WaitlistForm";

export const FinalCTASection = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Ready to Take Control of Your Career?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of professionals who are transforming their career development from random to strategic.
        </p>
        
        <div className="mb-6">
          <WaitlistForm 
            source="final-cta"
            placeholder="Your email address"
            buttonText="Join waitlist"
            className="max-w-lg mx-auto"
          />
        </div>
        
        <p className="text-sm text-gray-400">
          Be the first to know when Cadence launches. No spam, ever.
        </p>
      </div>
    </section>
  );
};
