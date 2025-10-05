import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
  onSendMessageClick: () => void;
}

export const Navbar = ({ onContactClick, onSendMessageClick }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-display font-semibold text-foreground">
              Imagiax
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={onContactClick}
            >
              Contact Us
            </Button>
            <Button
              onClick={onSendMessageClick}
            >
              Send Message
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => {
                onContactClick();
                setMobileMenuOpen(false);
              }}
              className="w-full justify-start"
            >
              Contact Us
            </Button>
            <Button
              onClick={() => {
                onSendMessageClick();
                setMobileMenuOpen(false);
              }}
              className="w-full"
            >
              Send Message
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
