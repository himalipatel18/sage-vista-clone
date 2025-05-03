
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 mr-2"></div>
              <span className="text-xl font-bold text-slate-900">StaticHost</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">Testimonials</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">FAQ</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-slate-700">Sign in</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="#features" className="text-slate-600 hover:text-slate-900 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-slate-600 hover:text-slate-900 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <Button variant="outline" className="w-full text-slate-700 mt-2">Sign in</Button>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
