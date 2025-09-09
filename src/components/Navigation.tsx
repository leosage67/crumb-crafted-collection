import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold text-bakery-brown">
              Golden Crust
            </h1>
            <span className="text-sm text-bakery-gold font-script">Bakery</span>
          </div>

          {/* Order Now Button */}
          <Button 
            size="lg"
            className="bg-bakery-gold hover:bg-bakery-warm text-bakery-brown font-semibold animate-bounce-soft"
            onClick={() => scrollToSection('contact')}
          >
            Order Now
          </Button>
        </div>
        
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 pb-4">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Menu', id: 'menu' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-bakery-gold transition-colors duration-200 font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;