import { Button } from "@/components/ui/button";

interface SignupFormProps {
  buttonText?: string;
  className?: string;
}

export const SignupForm = ({
  buttonText = "Get Started",
  className = ""
}: SignupFormProps) => {
  const handleSignupClick = () => {
    window.open("https://app.hellocadence.com/auth", "_blank");
  };

  return (
    <div className={`${className}`}>
      <Button 
        onClick={handleSignupClick}
        className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8"
      >
        {buttonText}
      </Button>
    </div>
  );
};
