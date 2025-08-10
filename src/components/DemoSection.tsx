import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
export const DemoSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const demoImages = [
    {
      src: "/lovable-uploads/1b917d6e-db65-493a-b8a2-de8c0be1d6f0.png",
      alt: "Dashboard Preview - Quest interface showing career progression tracking",
      label: "Live Dashboard",
      badge: "Quest",
      color: "emerald"
    },
    {
      src: "/lovable-uploads/abdf5e71-3cd0-4cc0-ab95-a4773c2e6fb8.png",
      alt: "Skills Tracking - Radar chart showing skill development across multiple categories",
      label: "Skills Analysis",
      badge: "Skills",
      color: "blue"
    },
    {
      src: "/lovable-uploads/e722f560-e6c2-40c5-8767-50dc15730e19.png",
      alt: "Actions Management - Track promised actions and skill development progress",
      label: "Action Tracking",
      badge: "Actions",
      color: "orange"
    }
  ];

  const reviewTemplates = [
    {
      src: "/placeholder.svg",
      alt: "360 Feedback Preparation - Comprehensive peer feedback questions tailored to product management competencies",
      label: "360 Feedback Prep",
      badge: "360°",
      color: "blue"
    },
    {
      src: "/placeholder.svg", 
      alt: "Manager Discussion Preparation - Strategic talking points that highlight your measurable impact and skill progression",
      label: "Manager Discussion",
      badge: "1:1",
      color: "emerald"
    },
    {
      src: "/placeholder.svg",
      alt: "Self Performance Review - Data-driven self-assessment with concrete examples from your tracked activities", 
      label: "Self Performance Review",
      badge: "Self",
      color: "purple"
    }
  ];
  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        dot: "bg-emerald-400",
        badge: "bg-emerald-500/90"
      },
      blue: {
        dot: "bg-blue-400",
        badge: "bg-blue-500/90"
      },
      orange: {
        dot: "bg-orange-400",
        badge: "bg-orange-500/90"
      },
      purple: {
        dot: "bg-purple-400",
        badge: "bg-purple-500/90"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };
  const ImageCard = ({
    image,
    index
  }: {
    image: typeof demoImages[0];
    index: number;
  }) => {
    const colors = getColorClasses(image.color);
    return <Dialog>
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
                <img src={image.src} alt={image.alt} className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105" />
              </div>
              
              {/* Subtle overlay with label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 ${colors.dot} rounded-full animate-pulse`}></div>
                  <span className="text-sm font-medium text-slate-200">{image.label}</span>
                </div>
              </div>
            </div>
            
            {/* Corner badge */}
            <div className={`absolute top-4 right-4 ${colors.badge} backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium shadow-lg`}>
              {image.badge}
            </div>
          </div>
        </DialogTrigger>
        
        <DialogContent className="max-w-5xl w-full h-[80vh] p-0">
          <div className="relative w-full h-full bg-background rounded-lg overflow-hidden">
            <img src={image.src} alt={image.alt} className="w-full h-full object-contain" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-1">{image.label}</h3>
                <p className="text-muted-foreground text-sm">{image.alt}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>;
  };
  return <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            See Cadence in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">Purposeful design making career tracking less of a chore and  </p>
          
        </div>
        
        {/* Demo Screenshots Grid - 3 columns */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {demoImages.map((image, index) => (
            <ImageCard key={index} image={image} index={index} />
          ))}
        </div>

        {/* Review Templates Row */}
        <div className="mb-8">
          <h3 className="text-2xl font-mono font-bold text-center mb-8">
            Professional Review Templates
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {reviewTemplates.map((template, index) => (
              <ImageCard key={`template-${index}`} image={template} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>;
};