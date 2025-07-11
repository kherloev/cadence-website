import { SignupForm } from "./SignupForm";
import { X } from "lucide-react";
import { useState } from "react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg max-w-sm">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="text-center">
          <h3 className="font-semibold mb-2">Ready to accelerate your PM career?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Join thousands of PMs already using Cadence
          </p>
          <SignupForm 
            buttonText="Start Free" 
            variant="prominent"
          />
        </div>
      </div>
    </div>
  );
};