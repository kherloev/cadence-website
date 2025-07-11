export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Onboard & Set Your Quest",
      description: "Define your 3-year career goal and break it into actionable milestones. Our onboarding wizard helps you get started in minutes.",
      icon: "🎯"
    },
    {
      number: "02", 
      title: "Reflect & Track Weekly",
      description: "Use guided prompts to reflect on your growth, log achievements, and rate your skills. Building career momentum becomes a weekly habit.",
      icon: "📝"
    },
    {
      number: "03",
      title: "Achieve & Celebrate",
      description: "Watch your progress unfold with beautiful analytics, earn badges for consistency, and get AI-drafted reviews for performance conversations.",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Three simple steps to transform your career development from random to systematic
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-emerald rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <span className="text-xl font-mono font-bold text-background">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>
                
                {/* Content */}
                <h3 className="text-xl font-mono font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card border rounded-xl">
              <h4 className="font-mono font-semibold mb-2">⚡ Quick Setup</h4>
              <p className="text-sm text-muted-foreground font-sans">Get started in under 10 minutes with our guided onboarding</p>
            </div>
            <div className="p-6 bg-card border rounded-xl">
              <h4 className="font-mono font-semibold mb-2">🔒 Private & Secure</h4>
              <p className="text-sm text-muted-foreground font-sans">Your career data stays private, with full export capabilities</p>
            </div>
            <div className="p-6 bg-card border rounded-xl">
              <h4 className="font-mono font-semibold mb-2">📈 Always Improving</h4>
              <p className="text-sm text-muted-foreground font-sans">Regular updates and new features based on user feedback</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};