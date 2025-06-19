
import { useState } from "react";
import { ArrowRight, Target, BarChart3, Trophy, Users, CheckCircle, Star } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold">Cadence</span>
          </div>
          <Button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-500 hover:bg-green-600 text-black"
          >
            Join Waitlist
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
                Career Development • Reimagined
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Career Strava for Mid-Career Professionals
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform random learning into strategic career advancement. Track skills, set goals, and maintain momentum toward your 3-year vision.
              </p>

              <form onSubmit={handleWaitlistSignup} className="flex gap-2 max-w-md mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-900 border-gray-700 text-white"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-green-500 hover:bg-green-600 text-black"
                >
                  {isSubmitting ? "Joining..." : "Join"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-green-400 text-green-400" />
                  <span>Early access launching soon</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Join 500+ professionals</span>
                </div>
              </div>
            </div>

            {/* Right side - App Screenshot */}
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-1 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Cadence App Interface" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Mid-Career Professionals Choose Cadence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Move beyond random learning. Get the structured approach you need to reach your career destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="group p-6 bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
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
      <section className="container mx-auto px-4 py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Your Career Development, Systematized
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto">1</div>
              <h3 className="text-xl font-semibold">Set Your Vision</h3>
              <p className="text-gray-300">Define your 3-year career destination and map out the skills needed to get there.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto">2</div>
              <h3 className="text-xl font-semibold">Track & Reflect</h3>
              <p className="text-gray-300">Log weekly reflections, rate your skills, and connect activities to quarterly goals.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto">3</div>
              <h3 className="text-xl font-semibold">Achieve Growth</h3>
              <p className="text-gray-300">Visualize progress, maintain streaks, and systematically advance your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the waitlist to be among the first to experience structured career development.
          </p>
          
          <form onSubmit={handleWaitlistSignup} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-center sm:text-left bg-gray-900 border-gray-700 text-white"
              required
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black w-full sm:w-auto"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                <span className="text-black font-bold text-xs">C</span>
              </div>
              <span className="font-semibold">Cadence</span>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Cadence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
