
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
    
    try {
      console.log("Starting waitlist signup for:", email.toLowerCase().trim());
      console.log("Supabase client configured with URL:", supabase.supabaseUrl);
      
      const { data, error } = await supabase
        .from('waitlist_signups')
        .insert([{
          email: email.toLowerCase().trim(),
          source: 'website'
        }])
        .select();

      console.log("Supabase response:", { data, error });

      if (error) {
        console.error("Supabase error details:", {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
        
        // Handle specific error cases
        if (error.code === '23505') {
          toast({
            title: "Already on the list! 🎉",
            description: "You're already signed up for our waitlist. We'll be in touch soon!",
          });
        } else if (error.code === '42501') {
          console.error("RLS Policy Error - this should not happen with our current setup");
          toast({
            title: "Authentication Error",
            description: "There was an issue with the signup process. Please try again.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        console.log("Signup successful:", data);
        toast({
          title: "Welcome to Cadence! 🎉",
          description: "You're on the waitlist. We'll notify you when we launch!",
        });
        setEmail("");
      }
      
    } catch (error) {
      console.error('Waitlist signup error:', error);
      
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact us if the problem persists.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
