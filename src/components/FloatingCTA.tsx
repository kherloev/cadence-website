import { SignupForm } from "./SignupForm";
import { X } from "lucide-react";
import { useState } from "react";
export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      
    </div>;
};