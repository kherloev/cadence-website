
import { Target, BarChart3, Trophy, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Track Your Career Journey",
    description: "Set your 3-year vision and systematically work toward it with structured reflection and goal-setting."
  },
  {
    icon: BarChart3,
    title: "Skill Development Framework", 
    description: "Categorize and track skills as Liabilities, Median, or Superpowers to focus your development efforts."
  },
  {
    icon: Trophy,
    title: "Gamified Progress",
    description: "Stay motivated with streaks, weekly activity tracking, and visual progress indicators."
  },
  {
    icon: CheckCircle,
    title: "Goal-Driven Growth",
    description: "Connect weekly reflections to quarterly goals and long-term career objectives."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Why those who go further choose Cadence
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Move beyond random learning. Get the structured approach you need to reach your career destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main card */}
              <div className="relative p-8 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-gray-700/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-emerald-500/10">
                <div className="flex items-start space-x-6">
                  {/* Icon container with gradient background */}
                  <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/20 group-hover:from-emerald-500/30 group-hover:to-emerald-600/30 group-hover:border-emerald-500/30 transition-all duration-500">
                    <benefit.icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold mb-4 text-gray-50 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
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
