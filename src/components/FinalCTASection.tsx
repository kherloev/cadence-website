
import { WaitlistForm } from "./WaitlistForm";

export const FinalCTASection = () => {
  return (
    <section id="waitlist" className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take Control of Your Career?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join the waitlist to be among the first to experience structured career development.
        </p>
        
        <WaitlistForm variant="final" />
        
        <p className="text-sm text-gray-400 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
