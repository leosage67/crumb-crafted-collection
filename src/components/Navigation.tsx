import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold text-bakery-brown">
              Golden Crust
            </h1>
            <span className="text-sm text-bakery-gold font-script">Bakery</span>
          </div>

          {/* Order Now Button */}
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center justify-center space-x-8 pb-4">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Menu', id: 'menu' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' },
            { name: 'Order Now', id: 'contact' }
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