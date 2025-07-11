export const ProblemSolutionSection = () => {
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">Makeshift tools limit your potential</h2>
            <div className="space-y-4 text-muted-foreground font-sans">
              <p className="text-lg">You apply rigorous frameworks to product development, but your career advancement relies on scattered notes, spreadsheets, and a dash of hope.</p>
              <p>
                Spreadsheets can't capture growth nuance. Notion requires too much setup. 
                Performance reviews become guesswork. Your career deserves better infrastructure.
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
                Cadence provides enterprise-grade career infrastructure designed specifically 
                for product managers. Professional workflows, AI-powered insights, systematic tracking.
              </p>
              <p>
                Transform ad-hoc development into strategic advancement. Generate data-backed 
                performance reviews. Scale your career with the same rigor you apply to products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};