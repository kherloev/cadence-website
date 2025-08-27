import { SignupForm } from "./SignupForm";
import { DemoButton } from "./DemoButton";

export const Header = () => {
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
            <SignupForm buttonText="Start free trial" variant="header" />
          </div>
        </div>
      </div>
    </header>;
};