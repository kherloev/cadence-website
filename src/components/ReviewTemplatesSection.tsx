import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

export const ReviewTemplatesSection = () => {
  const reviewTemplates = [
    {
      src: "/placeholder.svg",
      alt: "360 Feedback Preparation - Comprehensive peer feedback questions tailored to product management competencies",
      title: "360 Feedback Prep",
      description: "Comprehensive peer feedback questions tailored to product management competencies",
      badge: "360°",
      color: "blue"
    },
    {
      src: "/placeholder.svg", 
      alt: "Manager Discussion Preparation - Strategic talking points that highlight your measurable impact and skill progression",
      title: "Manager Discussion",
      description: "Strategic talking points that highlight your measurable impact and skill progression",
      badge: "1:1",
      color: "emerald"
    },
    {
      src: "/placeholder.svg",
      alt: "Self Performance Review - Data-driven self-assessment with concrete examples from your tracked activities", 
      title: "Self Performance Review",
      description: "Data-driven self-assessment with concrete examples from your tracked activities",
      badge: "Self",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        dot: "bg-blue-400",
        badge: "bg-blue-500/90"
      },
      emerald: {
        dot: "bg-emerald-400", 
        badge: "bg-emerald-500/90"
      },
      purple: {
        dot: "bg-purple-400",
        badge: "bg-purple-500/90"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  const TemplateCard = ({
    template,
    index
  }: {
    template: typeof reviewTemplates[0];
    index: number;
  }) => {
    const colors = getColorClasses(template.color);
    
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative group cursor-pointer">
            <div className="relative bg-[#161618] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(var(--primary),0.3)]">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Zoom icon overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Image */}
              <div className="relative aspect-[16/10] p-6">
                <img 
                  src={template.src} 
                  alt={template.alt} 
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Template info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-2 h-2 ${colors.dot} rounded-full animate-pulse`}></div>
                  <span className="text-sm font-medium text-slate-200">{template.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{template.description}</p>
              </div>
            </div>
            
            {/* Corner badge */}
            <div className={`absolute top-4 right-4 ${colors.badge} backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium shadow-lg`}>
              {template.badge}
            </div>
          </div>
        </DialogTrigger>
        
        <DialogContent className="max-w-5xl w-full h-[80vh] p-0">
          <div className="relative w-full h-full bg-background rounded-lg overflow-hidden">
            <img 
              src={template.src} 
              alt={template.alt} 
              className="w-full h-full object-contain" 
            />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-1">{template.title}</h3>
                <p className="text-muted-foreground text-sm">{template.description}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            Get Professional Review Templates, Not Blank Pages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
            Stop staring at empty documents. Cadence generates three types of comprehensive review templates based on your tracked growth data.
          </p>
        </div>
        
        {/* Review Templates Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {reviewTemplates.map((template, index) => (
            <TemplateCard key={index} template={template} index={index} />
          ))}
        </div>

        {/* Bridge to benefits */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            These aren't generic templates — they're personalized based on your actual tracked growth data.
          </p>
        </div>
      </div>
    </section>
  );
};