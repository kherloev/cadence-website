import { Target, BarChart3, Trophy, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
const benefits = [{
  icon: Target,
  title: "Track Your Career Journey",
  description: "Set your 3-year vision and systematically work toward it with structured reflection and goal-setting."
}, {
  icon: BarChart3,
  title: "Skill Development Framework",
  description: "Categorize and track skills as Liabilities, Median, or Superpowers to focus your development efforts."
}, {
  icon: Trophy,
  title: "Gamified Progress",
  description: "Stay motivated with streaks, weekly activity tracking, and visual progress indicators."
}, {
  icon: CheckCircle,
  title: "Goal-Driven Growth",
  description: "Connect weekly reflections to quarterly goals and long-term career objectives."
}];
export const BenefitsSection = () => {
  return <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Why Mid-Career Professionals Choose Cadence
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Move beyond random learning. Get the structured approach you need to reach your career destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => <Card key={index} className="group p-6 bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all hover:shadow-lg cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                  <benefit.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-gray-50">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};