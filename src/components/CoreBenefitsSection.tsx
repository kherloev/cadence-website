import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const CoreBenefitsSection = () => {
  const benefits = [
    {
      icon: "📝",
      title: "Systematic Tracking",
      description: "PM-specific reflection prompts that capture your growth, wins, and skill development with weekly structured check-ins.",
      color: "bg-primary/5 border-primary/20"
    },
    {
      icon: "🤖",
      title: "AI Review Generation", 
      description: "Professional performance reviews auto-generated from your tracked progress. Never scramble for achievements again.",
      color: "bg-primary-glow/5 border-primary-glow/20"
    },
    {
      icon: "🎯",
      title: "Career Roadmapping",
      description: "3-year strategic planning with milestone tracking. Apply product thinking to your advancement with clear goals.",
      color: "bg-accent/5 border-accent/20"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            <span className="bg-gradient-emerald bg-clip-text text-transparent">Track → Generate → Advance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            The only career system designed specifically for product managers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`${benefit.color} backdrop-blur-glass hover:shadow-elegant transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                  <CardTitle className="font-mono text-xl">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-sans text-base leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};