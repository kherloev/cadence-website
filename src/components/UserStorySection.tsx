export const UserStorySection = () => {
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Meet Sarah, Senior Product Manager
          </h2>
          <p className="text-xl text-muted-foreground font-sans">How Cadence helped Sarah, a completely fictious by extremely representative product manager, build a clear path to Director of Product</p>
        </div>
        
        {/* User Story Placeholder */}
        <div className="bg-card border rounded-2xl shadow-elegant p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Avatar Placeholder */}
            <div className="md:col-span-1">
              <div className="w-32 h-32 bg-gradient-emerald rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <div className="text-center">
                <h3 className="font-mono font-semibold text-lg">Sarah Chen</h3>
                <p className="text-muted-foreground font-sans">Senior PM at TechCorp</p>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="md:col-span-2">
              <div className="space-y-4 text-muted-foreground font-sans">
                <p className="text-lg italic">"I was stuck in the middle management plateau. Great at execution, but unclear on what skills I needed for Director level."</p>
                <p>Using Cadence, Sarah mapped her 3-year quest to Director of Product, identified key skill gaps in strategy and stakeholder management, and tracked weekly progress with structured reflection.</p>
                <p className="font-semibold text-foreground">Result: Promoted to Director of Product in 18 months with AI-drafted performance reviews that highlighted her systematic growth.</p>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-primary">18</div>
                  <div className="text-sm text-muted-foreground">Months to promotion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Skills developed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Career confidence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};