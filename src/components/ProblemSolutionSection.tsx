export const ProblemSolutionSection = () => {
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">Makeshift tools hold you back</h2>
            <div className="space-y-4 text-muted-foreground font-sans">
              <p className="text-lg">You apply rigorous frameworks to product development, but your career advancement relies on scattered notes, unfinished Notion templates, and a dash of hope.</p>
              
            </div>
          </div>
          
          {/* Solution */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
              <span className="bg-gradient-emerald bg-clip-text text-transparent">e</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans">
              
              <p className="text-lg">Transform ad-hoc courses,  into strategic advancement. Generate data-backed performance reviews. Scale your career with the same rigor you apply to products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};