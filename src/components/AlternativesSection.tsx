import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AlternativesSection = () => {
  const alternatives = [
    {
      tool: "Spreadsheets & Notes",
      problems: ["Critical achievements get buried in endless rows", "Scattered thoughts that never build into action", "No connection between daily work and career outcomes", "You forget key wins when promotion time comes"],
      icon: "📊"
    },
    {
      tool: "Company HR Tools", 
      problems: ["Stuck within rigid annual review cycles", "Generic development plans miss PM-specific challenges", "Important career conversations lost in email threads", "No visibility into what drives advancement decisions"],
      icon: "🏢"
    },
    {
      tool: "Generic Career Apps",
      problems: ["One-size-fits-all frameworks miss PM nuances", "No understanding of product management career paths", "Feature bloat with irrelevant functionality", "Built for general professionals, not PMs"],
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5">
            Instead of makeshift solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Why PMs struggle with{" "}
            <span className="bg-gradient-emerald bg-clip-text text-transparent">
              generic tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            You wouldn't manage your product roadmap in a spreadsheet. Why manage your career that way?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {alternatives.map((alt, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-destructive/20 hover:border-destructive/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{alt.icon}</span>
                  <CardTitle className="font-mono text-xl text-destructive">{alt.tool}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {alt.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-sans text-sm">
                      <span className="text-destructive text-xs mt-1">✗</span>
                      <span className="text-muted-foreground">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-background to-primary-glow/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-mono font-bold mb-8">
              Cadence: Built exclusively for PM career advancement
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-success text-lg">✓</span>
                  <div>
                    <p className="font-semibold font-mono">PM-Specific Workflows</p>
                    <p className="text-sm text-muted-foreground font-sans">Reflection prompts designed for product management career progression</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success text-lg">✓</span>
                  <div>
                    <p className="font-semibold font-mono">AI Performance Reviews</p>
                    <p className="text-sm text-muted-foreground font-sans">Generate professional reviews from your tracked progress automatically</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-success text-lg">✓</span>
                  <div>
                    <p className="font-semibold font-mono">Strategic Career Planning</p>
                    <p className="text-sm text-muted-foreground font-sans">3-year roadmaps with skill tracking and milestone dependencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success text-lg">✓</span>
                  <div>
                    <p className="font-semibold font-mono">Zero Setup Required</p>
                    <p className="text-sm text-muted-foreground font-sans">Start tracking immediately with proven PM frameworks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};