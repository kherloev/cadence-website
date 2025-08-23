import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface DemoButtonProps {
  className?: string;
  variant?: "default" | "hero" | "header";
}

export const DemoButton = ({
  className = "",
  variant = "default"
}: DemoButtonProps) => {
  const handleDemoClick = () => {
    // Verify the external URL is safe before redirecting
    const allowedDomain = "hellocadence.com";
    const targetUrl = "https://app.hellocadence.com/demo";
    
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
        Try Demo
      </Button>
    </div>
  );
};