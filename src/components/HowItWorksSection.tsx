
export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Set Your Vision",
      description: "Define your 3-year career destination and map out the skills needed to get there."
    },
    {
      number: 2,
      title: "Track & Reflect",
      description: "Log weekly reflections, rate your skills, and connect activities to quarterly goals."
    },
    {
      number: 3,
      title: "Achieve Growth",
      description: "Visualize progress, maintain streaks, and systematically advance your career."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-gray-900/20 to-gray-900/60">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          Your Career Development, Systematized
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          A structured approach that transforms ambition into achievement
        </p>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative group"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Step connector (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-emerald-500/50 to-transparent"></div>
                )}
                
                <div className="space-y-6">
                  {/* Number circle with enhanced styling */}
                  <div className="relative mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-500 group-hover:scale-110">
                      {step.number}
                    </div>
                    {/* Subtle outer ring */}
                    <div className="absolute inset-0 w-16 h-16 bg-emerald-500/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="space-y-4 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-serif font-semibold text-gray-50 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 max-w-sm mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
