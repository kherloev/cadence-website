import { SignupForm } from "./SignupForm";

export const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-black text-lg font-mono italic font-bold">C</span>
          </div>
          <span className="text-xl font-mono font-bold italic tracking-tighter">CADENCE</span>
        </div>
        
        <div className="hidden sm:block">
          <SignupForm 
            buttonText="Get Started" 
            variant="header"
          />
        </div>
      </div>
    </header>
  );
};