
export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <span className="text-black font-bold text-xs">C</span>
            </div>
            <span className="font-semibold">Cadence</span>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Cadence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
