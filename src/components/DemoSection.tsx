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
                <img src="/lovable-uploads/1b917d6e-db65-493a-b8a2-de8c0be1d6f0.png" alt="Dashboard Preview - Quest interface showing career progression tracking" className="w-full h-full object-contain rounded-xl" />
              </div>
              
              {/* Subtle overlay with label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-200">Live Dashboard</span>
                </div>
              </div>
            </div>
            
            {/* Corner badge */}
            <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium shadow-lg">Quest</div>
          </div>
          
          {/* Skills Tracking */}
          <div className="relative group">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(var(--primary),0.3)]">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Skills chart image */}
              <div className="relative aspect-[16/10] p-6">
                <img src="/lovable-uploads/abdf5e71-3cd0-4cc0-ab95-a4773c2e6fb8.png" alt="Skills Tracking - Radar chart showing skill development across multiple categories" className="w-full h-full object-contain rounded-xl" />
              </div>
              
              {/* Subtle overlay with label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-200">Skills Analysis</span>
                </div>
              </div>
            </div>
            
            {/* Corner badge */}
            <div className="absolute top-4 right-4 bg-blue-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium shadow-lg">Skills</div>
          </div>
        </div>

        {/* Second Row - Actions & Assistant */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Actions Tracking */}
          <div className="relative group">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(var(--primary),0.3)]">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Actions image */}
              <div className="relative aspect-[16/10] p-6">
                <img src="/lovable-uploads/e722f560-e6c2-40c5-8767-50dc15730e19.png" alt="Actions Management - Track promised actions and skill development progress" className="w-full h-full object-contain rounded-xl" />
              </div>
              
              {/* Subtle overlay with label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-200">Action Tracking</span>
                </div>
              </div>
            </div>
            
            {/* Corner badge */}
            <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium shadow-lg">
              Goals
            </div>
          </div>
          
          {/* AI Assistant */}
          <div className="relative group">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(var(--primary),0.3)]">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Assistant image */}
              <div className="relative aspect-[16/10] p-6">
                <img src="/lovable-uploads/98b6c97a-a0bc-4a45-b14b-960c207cf26f.png" alt="AI Assistant - Generate performance reviews and career development content" className="w-full h-full object-contain rounded-xl" />
              </div>
              
              {/* Subtle overlay with label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-200">AI Assistant</span>
                </div>
              </div>
            </div>
            
            {/* Corner badge */}
            <div className="absolute top-4 right-4 bg-purple-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium shadow-lg">
              AI
            </div>
          </div>
        </div>
        
        {/* Feature Callouts */}
        
      </div>
    </section>;
};