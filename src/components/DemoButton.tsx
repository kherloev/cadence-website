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

  const getButtonVariant = () => {
    switch (variant) {
      case "link":
        return "link";
      default:
        return "ghost";
    }
  };

  const getButtonStyles = () => {
    const baseHover = "hover:text-green-500 hover:bg-transparent";
    switch (variant) {
      case "hero":
        return `font-bold px-12 py-4 text-lg ${baseHover}`;
      case "header":
        return `font-semibold px-4 py-2 text-sm ${baseHover}`;
      case "link":
        return "font-medium p-0 hover:text-green-500";
      default:
        return `font-semibold px-6 py-2 ${baseHover}`;
    }
  };

  const showIcon = variant === "hero";

  return (
    <div className={`${className}`}>
      <Button 
        onClick={handleDemoClick}
        className={getButtonStyles()}
        variant={getButtonVariant()}
      >
        {showIcon && <Play className="w-5 h-5 mr-2" />}
        Try the demo
      </Button>
    </div>
  );
};