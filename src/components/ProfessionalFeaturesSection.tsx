import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProfessionalFeaturesSection = () => {
  const professionalFeatures = [
    {
      category: "Enterprise-Grade Analytics",
      features: [
        {
          title: "Career Trajectory Modeling",
          description: "Visualize your career path with data-driven projections and milestone tracking",
          icon: "📈"
        },
        {
          title: "Skills Gap Analysis", 
          description: "Identify critical skill gaps for your next role with competitive benchmarking",
          icon: "🎯"
        },
        {
          title: "Progress Attribution",
          description: "Connect specific activities to measurable career outcomes and advancement",
          icon: "📊"
        }
      ]
    },
    {
      category: "AI-Powered Professional Tools",
      features: [
        {
          title: "Performance Review Generation",
          description: "Generate comprehensive self-evaluations based on tracked achievements and growth",
          icon: "🤖"
        },
        {
          title: "1:1 Conversation Prep",
          description: "AI-drafted talking points for manager conversations and career discussions",
          icon: "💬"
        },
        {
          title: "Promotion Case Builder",
          description: "Compile evidence for promotion discussions with data-backed narratives",
          icon: "🚀"
        }
      ]
    },
    {
      category: "Professional Data Management",
      features: [
        {
          title: "Secure Data Ownership",
          description: "Enterprise-grade encryption with full data export capabilities",
          icon: "🔒"
        },
        {
          title: "Portfolio Integration",
          description: "Export achievements and metrics for LinkedIn, resumes, and portfolios",
          icon: "📋"
        },
        {
          title: "Compliance Ready",
          description: "GDPR compliant with professional data handling standards",
          icon: "✅"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5">
            Professional-Grade Infrastructure
          </Badge>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Enterprise-level features for{" "}
            <span className="bg-gradient-emerald bg-clip-text text-transparent">
              serious professionals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            Advanced capabilities that scale with your career ambitions. 
            Built for professionals who invest in systematic growth.
          </p>
        </div>

        <div className="space-y-12">
          {professionalFeatures.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-mono font-bold mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <CardTitle className="font-mono text-lg">{feature.title}</CardTitle>
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

        <div className="mt-16 bg-gradient-to-br from-primary/10 via-background to-primary-glow/10 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-mono font-bold mb-6">
              Professional Career Investment
            </h3>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
              Your career is your most valuable asset. Cadence provides the professional-grade 
              infrastructure to track, analyze, and accelerate your advancement with the same 
              rigor you apply to your product work.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-mono font-bold text-primary mb-2">10x</div>
                <p className="text-sm text-muted-foreground font-sans">More data than spreadsheets</p>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-primary mb-2">AI-First</div>
                <p className="text-sm text-muted-foreground font-sans">Performance review automation</p>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-primary mb-2">Zero</div>
                <p className="text-sm text-muted-foreground font-sans">Setup time required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};