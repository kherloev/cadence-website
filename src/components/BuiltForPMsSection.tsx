import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const BuiltForPMsSection = () => {
  const pmWorkflows = [{
    phase: "Weekly Reflection",
    description: "PM-specific prompts that mirror product review cycles",
    details: ["Product success metrics → Career impact metrics", "Feature retrospectives → Skill development reviews", "Stakeholder feedback → 360-degree career input", "Sprint learnings → Professional growth insights"],
    features: [
      { title: "Progress Attribution", description: "Connect specific activities to measurable career outcomes", icon: "📊" },
      { title: "Skills Gap Analysis", description: "Identify critical skill gaps with competitive benchmarking", icon: "🎯" },
      { title: "Secure Data Ownership", description: "Enterprise-grade encryption with full data export capabilities", icon: "🔒" }
    ],
    icon: "🔄"
  }, {
    phase: "Quarterly Planning", 
    description: "Strategic career planning using familiar PM frameworks",
    details: ["OKRs for personal development goals", "Career roadmap with milestone dependencies", "Skill backlog prioritization and grooming", "Stakeholder alignment for advancement"],
    features: [
      { title: "Career Trajectory Modeling", description: "Visualize your career path with data-driven projections", icon: "📈" },
      { title: "1:1 Conversation Prep", description: "AI-drafted talking points for manager conversations", icon: "💬" },
      { title: "Portfolio Integration", description: "Export achievements for LinkedIn, resumes, and portfolios", icon: "📋" }
    ],
    icon: "📋"
  }, {
    phase: "Performance Cycles",
    description: "AI-powered review generation from tracked progress", 
    details: ["Automatic achievement compilation", "Impact quantification and metrics", "Growth narrative generation", "Future goal setting with data backing"],
    features: [
      { title: "Performance Review Generation", description: "Generate comprehensive self-evaluations from tracked achievements", icon: "🤖" },
      { title: "Promotion Case Builder", description: "Compile evidence for promotion discussions with data-backed narratives", icon: "🚀" },
      { title: "Compliance Ready", description: "GDPR compliant with professional data handling standards", icon: "✅" }
    ],
    icon: "🎯"
  }];
  const pmSkills = ["Product Strategy", "User Research", "Data Analysis", "Technical Acumen", "Stakeholder Management", "Go-to-Market", "Product Design", "Leadership", "Metrics & Analytics", "Market Understanding", "Prioritization", "Communication"];
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5">
            Built for Product Managers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Familiar workflows,{" "}
            <span className="bg-gradient-emerald bg-clip-text text-transparent">
              career-focused outcomes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            Apply the same systematic approach you use for product development 
            to your career advancement. Finally, tools that speak your language.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pmWorkflows.map((workflow, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{workflow.icon}</span>
                  <CardTitle className="font-mono text-xl">{workflow.phase}</CardTitle>
                </div>
                <CardDescription className="font-sans text-base mb-6">
                  {workflow.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {workflow.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-mono text-sm font-semibold mb-3 text-primary">Professional Features</h4>
                  <div className="space-y-3">
                    {workflow.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <span className="text-lg">{feature.icon}</span>
                        <div>
                          <div className="font-medium text-sm">{feature.title}</div>
                          <div className="text-xs text-muted-foreground">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>;
};