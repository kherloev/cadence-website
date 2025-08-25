import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface DemoButtonProps {
  className?: string;
  variant?: "default" | "hero" | "header" | "link" | "secondary";
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

  const getButtonVariant = () => {
    switch (variant) {
      case "hero":
        return "premium";
      case "secondary":
        return "premium";
      case "header":
        return "premium";
      case "link":
        return "link";
      default:
        return "premium";
    }
  };

  const getButtonSize = () => {
    switch (variant) {
      case "hero":
        return "xl";
      case "secondary":
        return "lg";
      default:
        return "default";
    }
  };

  const showIcon = variant === "hero" || variant === "secondary";

  return (
    <div className={`${className}`}>
      <Button 
        onClick={handleDemoClick}
        variant={getButtonVariant()}
        size={getButtonSize()}
      >
        {showIcon && <Play className="w-5 h-5 mr-2" />}
        Try Demo
      </Button>
    </div>
  );
};