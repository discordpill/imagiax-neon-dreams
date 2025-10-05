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
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gradient animate-gradient-shift bg-[length:200%_auto]">
              Imagiax
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="neon"
              onClick={onContactClick}
              className="font-medium"
            >
              Contact Us
            </Button>
            <Button
              variant="hero"
              onClick={onSendMessageClick}
              className="font-medium"
            >
              Send Message
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <Button
              variant="neon"
              onClick={() => {
                onContactClick();
                setMobileMenuOpen(false);
              }}
              className="w-full font-medium"
            >
              Contact Us
            </Button>
            <Button
              variant="hero"
              onClick={() => {
                onSendMessageClick();
                setMobileMenuOpen(false);
              }}
              className="w-full font-medium"
            >
              Send Message
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
