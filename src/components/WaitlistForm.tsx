
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Check } from "lucide-react";

interface WaitlistFormProps {
  source: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export const WaitlistForm = ({ 
  source, 
  placeholder = "Enter your email", 
  buttonText = "Join Waitlist",
  className = ""
}: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("waitlist_signups")
        .insert({
          email: email.trim().toLowerCase(),
          name: name.trim() || null,
          source: source,
        });

      if (error) {
        console.error("Waitlist signup error:", error);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
        return;
      }

      setIsSuccess(true);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Cadence launches.",
      });

      // Reset form after a delay
      setTimeout(() => {
        setEmail("");
        setName("");
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`flex items-center space-x-2 text-green-400 ${className}`}>
        <Check className="w-5 h-5" />
        <span className="font-medium">You're on the waitlist!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-green-500"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !email.trim()}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </div>
      
      <Input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-green-500"
        disabled={isLoading}
      />
    </form>
  );
};
