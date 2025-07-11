import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const WhyPurposeBuiltSection = () => {
  const alternatives = [{
    tool: "Spreadsheets",
    problems: ["Critical achievements get buried in endless rows", "No connection between daily work and career outcomes", "Impossible to identify patterns in your growth", "You forget key wins when promotion time comes"],
    icon: "📊"
  }, {
    tool: "Note apps",
    problems: ["Scattered thoughts that never build into action", "No structure for systematic career development", "Generic frameworks miss PM-specific challenges", "Your notes become a graveyard of good intentions"],
    icon: "📝"
  }, {
    tool: "Generic Apps",
    problems: ["Miss the nuances of product management careers", "Can't prepare you for high-stakes conversations", "No understanding of what actually drives PM advancement", "Leave you guessing what leadership really values"],
    icon: "📱"
  }];
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5">
            Purpose-Built for Product Managers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Why your career deserves more than{" "}
            <span className="bg-gradient-emerald bg-clip-text text-transparent">
              makeshift tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">You wouldn't manage your product roadmap in your mind. 
Your career deserves professional tools.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {alternatives.map((alt, index) => <Card key={index} className="bg-card/80 backdrop-blur-sm border-destructive/20 hover:border-destructive/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{alt.icon}</span>
                  <CardTitle className="font-mono text-xl text-destructive">{alt.tool}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {alt.problems.map((problem, idx) => <li key={idx} className="flex items-start gap-2 font-sans text-sm">
                      <span className="text-destructive text-xs mt-1">✗</span>
                      <span className="text-muted-foreground">{problem}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-background to-primary-glow/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-mono font-bold mb-6">
              Cadence: Built exclusively for career advancement
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-success text-lg">✓</span>
                  <div>
                    <p className="font-semibold font-mono">PM-Specific Workflows</p>
                    <p className="text-sm text-muted-foreground font-sans">Skills, quests, and reflections designed for product management career paths</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success text-lg">✓</span>
                  <div>
                    <p className="font-semibold font-mono">AI Performance Support</p>
                    <p className="text-sm text-muted-foreground font-sans">Automatically generate review drafts from your tracked progress</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-success text-lg">✓</span>
                  <div>
                    <p className="font-semibold font-mono">Professional Analytics</p>
                    <p className="text-sm text-muted-foreground font-sans">Insights from every entry helps inform your skill development and trajectory.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success text-lg">✓</span>
                  <div>
                    <p className="font-semibold font-mono">Zero Setup Required</p>
                    <p className="text-sm text-muted-foreground font-sans">Start tracking immediately with proven frameworks and guided prompts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};