import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FeatureHighlights = () => {
  const features = [
    {
      icon: "📝",
      title: "Strategic Reflection",
      description: "PM-specific prompts that mirror product review cycles. Transform scattered thoughts into career intelligence.",
      color: "bg-primary/5 border-primary/20"
    },
    {
      icon: "🎯",
      title: "PM Skill Framework",
      description: "Pre-loaded competency model for product managers. Track progression from Liability to Superpower across core skills.",
      color: "bg-warning/5 border-warning/20"
    },
    {
      icon: "🗺️",
      title: "Career Roadmapping",
      description: "Strategic 3-year career planning with milestone dependencies. Apply product thinking to your advancement.",
      color: "bg-primary-glow/5 border-primary-glow/20"
    },
    {
      icon: "📊",
      title: "Professional Analytics",
      description: "Enterprise-grade insights into skill development, achievement patterns, and career trajectory modeling.",
      color: "bg-accent/5 border-accent/20"
    },
    {
      icon: "📈",
      title: "Performance Integration",
      description: "Systematic progress tracking aligned with performance cycles. Build promotion cases with data-backed evidence.",
      color: "bg-warning/5 border-warning/20"
    },
    {
      icon: "🤖",
      title: "AI Review Generation",
      description: "Professional-grade performance reviews auto-generated from tracked achievements and skill development data.",
      color: "bg-primary/5 border-primary/20"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            <span className="bg-gradient-emerald bg-clip-text text-transparent">Professional features for systematic advancement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Purpose-built infrastructure designed exclusively for product management career development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.color} backdrop-blur-glass hover:shadow-elegant transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <CardTitle className="font-mono text-xl">{feature.title}</CardTitle>
                </div>
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