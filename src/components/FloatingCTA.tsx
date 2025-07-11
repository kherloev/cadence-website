import { SignupForm } from "./SignupForm";
import { X } from "lucide-react";
import { useState } from "react";
export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="flex items-center gap-3 bg-card/95 backdrop-blur-md border rounded-xl p-3 shadow-lg">
        <button
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={16} />
        </button>
        <SignupForm 
          buttonText="Join now" 
          variant="header"
        />
      </div>
    </div>;
};