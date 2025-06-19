
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-bold">Cadence</span>
        </div>
        <Button 
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-green-500 hover:bg-green-600 text-black"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};
