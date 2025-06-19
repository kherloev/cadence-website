
import { useState } from "react";
import { ArrowRight, Target, TrendingUp, Trophy, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Cadence! 🎉",
      description: "You're on the waitlist. We'll notify you when we launch!",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: Target,
      title: "Structured Career Development",
      description: "Move beyond random learning. Get a clear framework to advance from your current position to your 3-year career vision.",
      gradient: "from-blue-50 to-indigo-100",
      border: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Smart Skill Tracking",
      description: "Categorize skills as Liabilities, Median, or Superpowers. Focus your limited time on what matters most for your advancement.",
      gradient: "from-amber-50 to-orange-100",
      border: "border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: Trophy,
      title: "Gamified Progress",
      description: "Stay motivated with streaks, weekly activity tracking, and visual progress charts. Make career development as engaging as fitness tracking.",
      gradient: "from-green-50 to-emerald-100",
      border: "border-emerald-200",
      iconColor: "text-emerald-600"
    },
    {
      icon: CheckCircle,
      title: "Goal-Driven Growth",
      description: "Connect weekly reflections directly to quarterly goals and long-term vision. Ensure every development activity moves you forward.",
      gradient: "from-purple-50 to-violet-100",
      border: "border-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  const stats = [
    { value: "80%", label: "Weekly Engagement Rate", description: "Users who complete 3+ reflections weekly" },
    { value: "3-Year", label: "Career Vision", description: "Strategic planning horizon" },
    { value: "10+", label: "Skill Categories", description: "Track across all competencies" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Cadence</span>
          </div>
          <Button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            Join Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
            Career Development • Reimagined
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Career Strava</span> for Mid-Career Professionals
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform random learning into strategic career advancement. Track skills, set goals, and maintain momentum toward your 3-year vision with gamified professional development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <form onSubmit={handleWaitlistSignup} className="flex gap-2 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>Early access launching soon</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Join 500+ professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Mid-Career Professionals Choose Cadence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Move beyond random learning and skill-building. Get the structured approach you need to reach your career destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className={`group relative p-8 transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer bg-gradient-to-br ${benefit.gradient} border-2 ${benefit.border}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-white/80 ${benefit.iconColor}`}>
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Your Career Development, Systematized
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">1</div>
              <h3 className="text-xl font-semibold text-gray-900">Set Your Vision</h3>
              <p className="text-gray-600">Define your 3-year career destination and map out the skills needed to get there.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">2</div>
              <h3 className="text-xl font-semibold text-gray-900">Track & Reflect</h3>
              <p className="text-gray-600">Log weekly reflections, rate your skills, and connect activities to quarterly goals.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">3</div>
              <h3 className="text-xl font-semibold text-gray-900">Achieve Growth</h3>
              <p className="text-gray-600">Visualize progress, maintain streaks, and systematically advance your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take Control of Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the waitlist to be among the first to experience structured career development.
          </p>
          
          <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-center sm:text-left"
              required
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 w-full sm:w-auto"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="font-semibold text-gray-900">Cadence</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 Cadence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
