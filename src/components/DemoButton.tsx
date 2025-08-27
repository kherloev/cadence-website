import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoButtonProps {
  className?: string;
  variant?: "default" | "hero" | "header" | "link";
}

export const DemoButton = ({
  className = "",
  variant = "default"
}: DemoButtonProps) => {
  const handleDemoClick = () => {
    // Verify the external URL is safe before redirecting
    const allowedDomain = "hellocadence.com";
    const targetUrl = "https://app.hellocadence.com/auth?demo=true";
    
    try {
      const url = new URL(targetUrl);
      if (url.hostname.endsWith(allowedDomain)) {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      } else {
        console.warn("Blocked redirect to untrusted domain:", url.hostname);
      }
    } catch (error) {
      console.error("Invalid URL:", error);
    }
  };

  const getLinkStyles = () => {
    switch (variant) {
      case "hero":
        return "font-bold text-lg text-primary hover:text-primary/80 underline underline-offset-4";
      case "link":
        return "font-medium text-xs text-primary hover:text-primary/80 underline underline-offset-4";
      default:
        return "font-semibold text-primary hover:text-primary/80 underline underline-offset-4";
    }
  };

  const showIcon = variant === "hero";

  // Render as Button for header variant
  if (variant === "header") {
    return (
      <Button 
        variant="ghost" 
        size="sm"
        onClick={handleDemoClick}
        className={`font-semibold text-sm px-6 py-2 ${className}`}
      >
        Try the demo
      </Button>
    );
  }

  // Render as hyperlink for other variants
  return (
    <div className={`${className}`}>
      <a 
        onClick={handleDemoClick}
        className={`cursor-pointer transition-colors ${getLinkStyles()}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleDemoClick();
          }
        }}
      >
        {showIcon && <Play className="w-5 h-5 mr-2 inline" />}
        Try the demo
      </a>
    </div>
  );
};