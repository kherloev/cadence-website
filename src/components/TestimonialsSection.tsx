export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The AI performance review feature alone is worth it. It captured all my growth over the quarter in a way I never could have articulated myself.",
      author: "Alex Rodriguez",
      role: "Principal PM at StartupCo",
      avatar: "👨‍💼"
    },
    {
      quote: "Finally, a career tool that doesn't feel like homework. The gamification keeps me motivated to actually stick with reflection and skill tracking.",
      author: "Jamie Liu",
      role: "Senior PM at DesignTech",
      avatar: "👩‍💻"
    },
    {
      quote: "Cadence helped me see patterns in my career that I was blind to. The quest framework gave me clarity on what VP-level actually looks like.",
      author: "Morgan Taylor",
      role: "VP Product at ScaleCorp",
      avatar: "🧑‍💼"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Loved by product leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
            See what product managers are saying about their Cadence experience
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
        
        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card border rounded-full">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-mono font-semibold">4.9/5</span>
              <span className="text-sm text-muted-foreground font-sans">rating</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="font-mono font-semibold">500+</span>
              <span className="text-sm text-muted-foreground font-sans">early users</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-mono font-semibold">92%</span>
              <span className="text-sm text-muted-foreground font-sans">get promoted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};