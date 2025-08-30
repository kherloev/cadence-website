import { SignupForm } from "./SignupForm";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleLoginClick = () => {
    // Verify the external URL is safe before redirecting
    const allowedDomain = "hellocadence.com";
    const targetUrl = "https://app.hellocadence.com/auth/";
    
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

  return <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <a href="https://hellocadence.com" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black text-md font-mono italic font-bold" data-no-edit="true">C</span>
            </div>
            <span className="text-xl font-mono font-bold italic tracking-tighter" data-no-edit="true">CADENCE</span>
          </a>
          
          <div className="hidden sm:flex sm:items-center sm:gap-3">
            <Button 
              variant="outline" 
              onClick={handleLoginClick}
              className="text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            >
              Login
            </Button>
            <SignupForm buttonText="Start free trial" variant="header" />
          </div>
        </div>
      </div>
    </header>;
};