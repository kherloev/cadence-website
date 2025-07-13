import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SignupForm } from "./SignupForm";
export const BuiltForPMsSection = () => {
  const pmWorkflows = [{
    phase: "Weekly Reflection",
    description: "PM-specific prompts that mirror product review cycles",
    details: ["Product success metrics → Career impact metrics", "Feature retrospectives → Skill development reviews", "Stakeholder feedback → 360-degree career input", "Sprint learnings → Professional growth insights"],
    icon: "🔄"
  }, {
    phase: "Quarterly Planning",
    description: "Strategic career planning using familiar PM frameworks",
    details: ["OKRs for personal development goals", "Career roadmap with milestone dependencies", "Skill backlog prioritization and grooming", "Stakeholder alignment for advancement"],
    icon: "📋"
  }, {
    phase: "Performance Cycles",
    description: "AI-powered review generation from tracked progress",
    details: ["Automatic achievement compilation", "Impact quantification and metrics", "Growth narrative generation", "Future goal setting with data backing"],
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
          {pmWorkflows.map((workflow, index) => <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{workflow.icon}</span>
                  <CardTitle className="font-mono text-xl">{workflow.phase}</CardTitle>
                </div>
                <CardDescription className="font-sans text-base">
                  {workflow.description}
                </CardDescription>
              </CardHeader>
            </Card>)}
        </div>

        {/* Mid-section CTA */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Stop managing your career like it's a side project
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Give your career the systematic attention it deserves. Start tracking, 
              planning, and advancing with the same rigor you bring to product development.
            </p>
            <SignupForm 
              buttonText="Begin Your Career System" 
              variant="prominent"
            />
          </div>
        </div>
        
      </div>
    </section>;
};