export const Footer = () => {
  return <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-black text-md font-mono italic font-bold">C</span>
            </div>
            <span className="text-xl font-mono font-bold italic tracking-tighter">CADENCE</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Cadence. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};