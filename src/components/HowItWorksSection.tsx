
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
    <section className="container mx-auto px-4 py-16 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Your Career Development, Systematized
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
