import { SignupForm } from "./SignupForm";
export const FinalCTASection = () => {
  return <section id="about" className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
        
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-mono font-bold mb-6 text-foreground leading-tight">
            Never write another{" "}
            <span className="bg-gradient-emerald bg-clip-text text-transparent">
              performance review from scratch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-sans">
            Start tracking your PM growth today. Generate your first AI-powered performance review in minutes.
          </p>
          
          <div className="mb-8">
            <SignupForm buttonText="Generate My First AI Review" variant="prominent" className="max-w-lg mx-auto" />
          </div>
          
          
        </div>
      </div>
    </section>;
};