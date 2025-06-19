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

  const testDatabaseConnection = async () => {
    try {
      console.log("Testing Supabase connection...");
      const { data, error } = await supabase
        .from('waitlist_signups')
        .select('count')
        .limit(1);
      
      console.log("Connection test result:", { data, error });
      return { success: !error, error };
    } catch (err) {
      console.error("Connection test failed:", err);
      return { success: false, error: err };
    }
  };

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      console.log("=== WAITLIST SIGNUP DEBUG START ===");
      console.log("Email to insert:", email.toLowerCase().trim());
      console.log("Supabase client configured and ready");
      
      // Test connection first
      const connectionTest = await testDatabaseConnection();
      console.log("Database connection test:", connectionTest);
      
      if (!connectionTest.success) {
        throw new Error(`Database connection failed: ${connectionTest.error?.message}`);
      }

      // Prepare the data
      const insertData = { 
        email: email.toLowerCase().trim(),
        source: 'website'
      };
      console.log("Data to insert:", insertData);

      // Attempt the insert
      console.log("Attempting to insert into waitlist_signups...");
      const { data, error } = await supabase
        .from('waitlist_signups')
        .insert([insertData])
        .select(); // Add select to get the inserted data back

      console.log("Insert result - data:", data);
      console.log("Insert result - error:", error);
      console.log("Insert result - error code:", error?.code);
      console.log("Insert result - error message:", error?.message);
      console.log("Insert result - error details:", error?.details);

      if (error) {
        console.error("Supabase error occurred:", error);
        
        // Handle duplicate email error specifically
        if (error.code === '23505') {
          console.log("Duplicate email detected");
          toast({
            title: "Already on the list! 🎉",
            description: "You're already signed up for our waitlist. We'll be in touch soon!",
          });
        } else {
          console.error("Unexpected error:", error);
          throw error;
        }
      } else {
        console.log("Insert successful! Data inserted:", data);
        toast({
          title: "Welcome to Cadence! 🎉",
          description: "You're on the waitlist. We'll notify you when we launch!",
        });
      }
      
      setEmail("");
      console.log("=== WAITLIST SIGNUP DEBUG END ===");
      
    } catch (error) {
      console.error('=== WAITLIST SIGNUP ERROR ===');
      console.error('Error type:', typeof error);
      console.error('Error object:', error);
      console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
      console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      
      toast({
        title: "Oops! Something went wrong",
        description: `Please try again or contact us. Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
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
