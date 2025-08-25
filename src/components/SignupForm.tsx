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

  const getButtonStyles = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold px-12 py-4 text-lg rounded-xl shadow-lg";
      case "prominent":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold px-10 py-3 text-base rounded-lg shadow-md";
      case "header":
        return "bg-green-500 text-black font-semibold px-6 py-2 text-sm rounded-lg";
      default:
        return "bg-green-500 text-black font-semibold px-8 py-2 rounded-lg";
    }
  };

  const showIcon = variant === "hero" || variant === "prominent";

  return (
    <div className={`${className}`}>
      <Button 
        onClick={handleSignupClick}
        className={getButtonStyles()}
      >
        {/* Sparkles icon removed to stop blinking */}
        {buttonText}
        {showIcon && <ArrowRight className="w-5 h-5 ml-2" />}
      </Button>
    </div>
  );
};
