export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Can't wait for this to exist! I'm already imagining how much easier performance reviews will be when I don't have to scramble for achievements.",
      author: "Alex (Future User)",
      role: "Hopefully Soon-to-be Principal PM",
      avatar: "🤞"
    },
    {
      quote: "Finally, someone building a career tool that won't feel like homework! Sign me up for the beta - my spreadsheet tracking system is... tragic.",
      author: "Jamie (Wishful Thinker)",
      role: "Senior PM Who Dreams of Organization",
      avatar: "📊"
    },
    {
      quote: "I've been doing this job for 10 years and still can't explain what 'VP-level' means. Please hurry up and build this thing!",
      author: "Morgan (Career Questioner)",
      role: "VP Product (Still Figuring It Out)",
      avatar: "🤔"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Future testimonials* 
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            What product managers will probably say about Cadence once it exists
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-sans italic">
            *These are completely made up. The product is still in development! 🚧
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border rounded-2xl p-6 shadow-elegant">
              <div className="mb-6">
                <p className="text-lg font-sans italic text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-emerald rounded-full flex items-center justify-center">
                  <span className="text-xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-mono font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground font-sans">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fictional Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card border rounded-full opacity-60">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-mono font-semibold">?.?/5</span>
              <span className="text-sm text-muted-foreground font-sans">future rating</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="font-mono font-semibold">0</span>
              <span className="text-sm text-muted-foreground font-sans">actual users</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤷</span>
              <span className="font-mono font-semibold">TBD%</span>
              <span className="text-sm text-muted-foreground font-sans">will get promoted</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-sans italic">
            (We'll update these with real numbers once we have them!)
          </p>
        </div>
      </div>
    </section>
  );
};