export const DemoSection = () => {
  return <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            See Cadence in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            Beautiful, intuitive design that makes career development feel like using your favorite product tools
          </p>
        </div>
        
        {/* Demo Video/Screenshots Placeholder */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Dashboard */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(var(--primary),0.3)]">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Dashboard image */}
              <div className="relative aspect-[16/10] p-6">
                <img 
                  src="/lovable-uploads/1b917d6e-db65-493a-b8a2-de8c0be1d6f0.png" 
                  alt="Dashboard Preview - Quest interface showing career progression tracking"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              
              {/* Subtle overlay with label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-200">Live Dashboard</span>
                </div>
              </div>
            </div>
            
            {/* Floating accent indicators */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-accent rounded-full animate-pulse delay-700 shadow-lg shadow-accent/50"></div>
          </div>
          
          {/* Skills Tracking */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-card via-muted/50 to-card border border-border rounded-2xl shadow-elegant p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-mono font-semibold mb-2">Skill Tracking</h3>
                <p className="text-sm text-muted-foreground font-sans">
                  Visualize your superpowers and growth areas
                </p>
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-warning rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
        
        {/* Feature Callouts */}
        
      </div>
    </section>;
};