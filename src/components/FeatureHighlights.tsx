import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FeatureHighlights = () => {
  const features = [
    {
      icon: "📝",
      title: "Structured Reflection",
      description: "Smart prompts and guided journaling for weekly growth. Turn scattered thoughts into actionable insights.",
      color: "bg-primary/5 border-primary/20"
    },
    {
      icon: "🎯",
      title: "Skill Management",
      description: "Add, rate, and focus on custom skills. Visualize your Liabilities, Median skills, and Superpowers over time.",
      color: "bg-warning/5 border-warning/20"
    },
    {
      icon: "🗺️",
      title: "Quest Planning",
      description: "Set ambitious 3-year career quests and break them into achievable, trackable steps.",
      color: "bg-primary-glow/5 border-primary-glow/20"
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description: "Beautiful charts, streaks, and stats that keep you motivated and show real growth.",
      color: "bg-accent/5 border-accent/20"
    },
    {
      icon: "📈",
      title: "Weekly Momentum",
      description: "Stay accountable with weekly check-ins and momentum tracking that keeps you consistent on your career journey.",
      color: "bg-warning/5 border-warning/20"
    },
    {
      icon: "🤖",
      title: "AI Performance Reviews",
      description: "Let AI draft your performance reviews, 1:1s, and career conversations based on your tracked progress.",
      color: "bg-primary/5 border-primary/20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Everything you need to 
            <span className="bg-gradient-emerald bg-clip-text text-transparent"> level up</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Comprehensive career development tools designed for ambitious product managers and professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.color} backdrop-blur-glass hover:shadow-elegant transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="font-mono text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-sans text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};