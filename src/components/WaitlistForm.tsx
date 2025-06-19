
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  variant?: "hero" | "final";
  className?: string;
}

export const WaitlistForm = ({ variant = "hero", className = "" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Cadence! 🎉",
      description: "You're on the waitlist. We'll notify you when we launch!",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  const formClasses = variant === "final" 
    ? "flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
    : "flex gap-2 max-w-md mb-8";

  const inputClasses = variant === "final"
    ? "flex-1 text-center sm:text-left bg-gray-900 border-gray-700 text-white"
    : "flex-1 bg-gray-900 border-gray-700 text-white";

  const buttonClasses = variant === "final"
    ? "bg-green-500 hover:bg-green-600 text-black w-full sm:w-auto"
    : "bg-green-500 hover:bg-green-600 text-black";

  return (
    <form onSubmit={handleWaitlistSignup} className={`${formClasses} ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClasses}
        required
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        size={variant === "final" ? "lg" : "default"}
        className={buttonClasses}
      >
        {isSubmitting ? "Joining..." : variant === "final" ? "Join Waitlist" : "Join"}
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </form>
  );
};
