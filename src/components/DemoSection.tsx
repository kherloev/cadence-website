export const DemoSection = () => {
  return (
    <section className="py-20 px-4">
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
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-card via-muted/50 to-card border border-border rounded-2xl shadow-elegant p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-mono font-semibold mb-2">Dashboard Preview</h3>
                <p className="text-sm text-muted-foreground font-sans">
                  Your personal career command center
                </p>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
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
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl mb-4">✨</div>
            <h4 className="font-mono font-semibold mb-2">Glass-morphism UI</h4>
            <p className="text-sm text-muted-foreground font-sans">Modern, clean design that feels premium</p>
          </div>
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl mb-4">🌙</div>
            <h4 className="font-mono font-semibold mb-2">Dark Mode</h4>
            <p className="text-sm text-muted-foreground font-sans">Seamless theme switching for any environment</p>
          </div>
          <div className="text-center p-6 bg-card border rounded-xl">
            <div className="text-3xl mb-4">📱</div>
            <h4 className="font-mono font-semibold mb-2">Mobile First</h4>
            <p className="text-sm text-muted-foreground font-sans">Perfect experience on all devices</p>
          </div>
        </div>
      </div>
    </section>
  );
};