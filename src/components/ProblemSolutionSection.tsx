export const ProblemSolutionSection = () => {
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">Performance 
review panic</h2>
            <div className="space-y-4 text-muted-foreground font-sans">
              <p className="text-lg">It's review season. You're staring at a blank document, trying to remember what you accomplished 6 months ago. Your promotion depends on articulating growth you can barely recall.</p>
              <p className="text-lg">Sound familiar? </p>
            </div>
          </div>
          
          {/* Solution */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
              <span className="bg-gradient-emerald bg-clip-text text-transparent">
                AI reviews from tracked progress
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans">
              <p className="text-lg">Track and plan your growth systematically. When review time comes, AI drafts professional performance reviews highlighting your advancement and impact. No more scrambling. No more forgotten wins.</p>
              <p className="text-lg">Data-backed career progression. Putting you at the head of the pack.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};