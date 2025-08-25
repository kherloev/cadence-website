import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface SignupFormProps {
  buttonText?: string;
  className?: string;
  variant?: "default" | "hero" | "prominent" | "header";
}

export const SignupForm = ({
  buttonText = "Get Started",
  className = "",
  variant = "default"
}: SignupFormProps) => {
  const handleSignupClick = () => {
    // Verify the external URL is safe before redirecting
    const allowedDomain = "hellocadence.com";
    const targetUrl = "https://app.hellocadence.com/auth";
    
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
        return "hero";
      case "prominent":
        return "hero";
      case "header":
        return "default";
      default:
        return "default";
    }
  };

  const getButtonSize = () => {
    switch (variant) {
      case "hero":
        return "xl";
      case "prominent":
        return "lg";
      default:
        return "default";
    }
  };

  const showIcon = variant === "hero" || variant === "prominent";

  return (
    <div className={`${className}`}>
      <Button 
        onClick={handleSignupClick}
        variant={getButtonVariant()}
        size={getButtonSize()}
      >
        {/* Sparkles icon removed to stop blinking */}
        {buttonText}
        {showIcon && <ArrowRight className="w-5 h-5 ml-2" />}
      </Button>
    </div>
  );
};
