import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={cn("sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-payment-gradient rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-black">💳</span>
            </div>
            <span className="text-xl font-bold text-foreground">PaymentPro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-payment-gradient hover:opacity-90 transition-opacity"
            >
              📞 Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div className={cn("h-0.5 bg-foreground transition-all", 
                isMenuOpen ? "rotate-45 translate-y-1.5" : "")} />
              <div className={cn("h-0.5 bg-foreground transition-all", 
                isMenuOpen ? "opacity-0" : "")} />
              <div className={cn("h-0.5 bg-foreground transition-all", 
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : "")} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="default" 
                className="w-full bg-payment-gradient hover:opacity-90"
                onClick={() => setIsMenuOpen(false)}
              >
                📞 Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}