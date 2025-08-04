import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import DOMPurify from 'dompurify';

interface WaitlistFormProps {
  className?: string;
}

export const WaitlistForm = ({ className = "" }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Email is required",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (email.length > 254) {
      toast({
        title: "Error",
        description: "Email address too long",
        variant: "destructive",
      });
      return;
    }

    if (name.length > 100) {
      toast({
        title: "Error",
        description: "Name too long (max 100 characters)",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Sanitize inputs
      const sanitizedEmail = DOMPurify.sanitize(email.trim().toLowerCase());
      const sanitizedName = DOMPurify.sanitize(name.trim());

      const { error } = await supabase
        .from('waitlist_signups')
        .insert([
          {
            email: sanitizedEmail,
            name: sanitizedName || null,
            source: 'website'
          }
        ]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already Signed Up",
            description: "This email is already on our waitlist!",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll be in touch soon!",
        });
        setEmail('');
        setName('');
      }
    } catch (error) {
      console.error('Error signing up for waitlist:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={254}
          disabled={loading}
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          disabled={loading}
          className="w-full"
        />
      </div>
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold"
      >
        {loading ? 'Joining...' : 'Join Waitlist'}
      </Button>
    </form>
  );
};