import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const ProfessionalFeaturesSection = () => {
  const professionalFeatures = [{
    category: "Enterprise-Grade Analytics",
    features: [{
      title: "Career Trajectory Modeling",
      description: "Visualize your career path with data-driven projections and milestone tracking",
      icon: "📈"
    }, {
      title: "Skills Gap Analysis",
      description: "Identify critical skill gaps for your next role with competitive benchmarking",
      icon: "🎯"
    }, {
      title: "Progress Attribution",
      description: "Connect specific activities to measurable career outcomes and advancement",
      icon: "📊"
    }]
  }, {
    category: "AI-Powered Professional Tools",
    features: [{
      title: "Performance Review Generation",
      description: "Generate comprehensive self-evaluations based on tracked achievements and growth",
      icon: "🤖"
    }, {
      title: "1:1 Conversation Prep",
      description: "AI-drafted talking points for manager conversations and career discussions",
      icon: "💬"
    }, {
      title: "Promotion Case Builder",
      description: "Compile evidence for promotion discussions with data-backed narratives",
      icon: "🚀"
    }]
  }, {
    category: "Professional Data Management",
    features: [{
      title: "Secure Data Ownership",
      description: "Enterprise-grade encryption with full data export capabilities",
      icon: "🔒"
    }, {
      title: "Portfolio Integration",
      description: "Export achievements and metrics for LinkedIn, resumes, and portfolios",
      icon: "📋"
    }, {
      title: "Compliance Ready",
      description: "GDPR compliant with professional data handling standards",
      icon: "✅"
    }]
  }];
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5">
            Professional-Grade Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Enterprise features for{" "}
            <span className="bg-gradient-emerald bg-clip-text text-transparent">
              serious professionals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            Advanced capabilities designed for product managers who demand 
            professional-grade career development tools
          </p>
        </div>

        <div className="space-y-16">
          {professionalFeatures.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{feature.icon}</span>
                        <CardTitle className="font-mono text-lg">{feature.title}</CardTitle>
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
          ))}
        </div>
      </div>
    </section>;
};