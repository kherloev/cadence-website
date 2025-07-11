import { Target, TrendingUp, Users, Zap } from "lucide-react";
export const BenefitsSection = () => {
  const benefits = [{
    icon: Target,
    title: "Strategic Direction",
    description: "Transform random skill-building into purposeful career advancement with clear 3-year vision mapping."
  }, {
    icon: TrendingUp,
    title: "Measurable Progress",
    description: "Track skill development with precision through weekly reflections and quarterly milestone reviews."
  }, {
    icon: Users,
    title: "Consistency & Accountability",
    description: "Maintain momentum with streak tracking and structured check-ins that keep you on course."
  }, {
    icon: Zap,
    title: "Accelerated Growth",
    description: "Achieve promotion-ready skills faster through systematic learning and strategic skill prioritization."
  }];
  return <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">Why those who go further choose Cadence</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">Move beyond random learning. Get the structured approach you need to reach your career destination.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <div key={benefit.title} className="group relative bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/50 hover:-translate-y-1" style={{
            animationDelay: `${index * 150}ms`,
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}>
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-gray-50 mb-4 leading-tight group-hover:text-white transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>;
        })}
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
    </section>;
};