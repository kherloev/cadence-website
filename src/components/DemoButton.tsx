import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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

  const getButtonStyles = () => {
    switch (variant) {
      case "hero":
        return "border border-primary/20 bg-background/50 backdrop-blur-sm text-primary hover:bg-primary/10 font-semibold px-12 py-4 text-lg rounded-xl";
      case "header":
        return "border border-primary/20 bg-background/50 backdrop-blur-sm text-primary hover:bg-primary/10 font-medium px-4 py-2 text-sm rounded-lg";
      case "link":
        return "text-primary hover:text-primary/80 underline-offset-4 hover:underline font-medium bg-transparent border-none shadow-none p-0";
      default:
        return "border border-primary/20 bg-background/50 backdrop-blur-sm text-primary hover:bg-primary/10 font-medium px-6 py-2 rounded-lg";
    }
  };

  const showIcon = variant === "hero";

  return (
    <div className={`${className}`}>
      <Button 
        onClick={handleDemoClick}
        className={getButtonStyles()}
        variant="outline"
      >
        {showIcon && <Play className="w-5 h-5 mr-2" />}
        Try the demo
      </Button>
    </div>
  );
};