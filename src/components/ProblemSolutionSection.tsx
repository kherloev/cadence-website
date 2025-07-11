export const ProblemSolutionSection = () => {
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">The plateau is real</h2>
            <div className="space-y-4 text-muted-foreground font-sans">
              <p className="text-lg">
                You've proven yourself as a product manager. You ship features, manage stakeholders, 
                and drive results. But growth feels... random.
              </p>
              <p>
                Sporadic learning. Unclear skill gaps. No systematic approach to advancement. 
                You're working hard but not seeing the career progress you want.
              </p>
            </div>
          </div>
          
          {/* Solution */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
              <span className="bg-gradient-emerald bg-clip-text text-transparent">
                Structure your growth
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans">
              <p className="text-lg">
                Cadence gives you a framework for continuous career development. 
                Track skills, plan quests, reflect weekly, and measure progress.
              </p>
              <p>
                Turn sporadic learning into strategic advancement. Get AI-drafted performance 
                reviews based on your real progress. Build the career you actually want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};