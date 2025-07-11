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
    window.open("https://app.hellocadence.com/auth", "_blank");
  };

  const getButtonStyles = () => {
    switch (variant) {
      case "hero":
        return "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black font-bold px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300";
      case "prominent":
        return "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-bold px-10 py-3 text-base rounded-lg shadow-md hover:shadow-lg transform hover:scale-102 transition-all duration-200";
      case "header":
        return "bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 text-sm rounded-lg transition-colors duration-200";
      default:
        return "bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-2 rounded-lg transition-colors duration-200";
    }
  };

  const showIcon = variant === "hero" || variant === "prominent";

  return (
    <div className={`${className}`}>
      <Button 
        onClick={handleSignupClick}
        className={getButtonStyles()}
      >
        {variant === "hero" && <Sparkles className="w-5 h-5 mr-2" />}
        {buttonText}
        {showIcon && <ArrowRight className="w-5 h-5 ml-2" />}
      </Button>
    </div>
  );
};
