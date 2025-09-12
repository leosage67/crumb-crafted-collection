import heroImage from "@/assets/hero-bakery.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Leo's Bakery Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bakery-brown/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
          Leo's Bakery
        </h1>
        <p className="text-3xl md:text-4xl font-script text-bakery-gold mb-6">
          Artisan Bakery
        </p>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Freshly baked pastries, artisan breads, and delightful treats crafted with love since 2025
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-bakery-gold hover:bg-bakery-warm text-bakery-brown font-semibold text-lg px-8 py-3"
            onClick={() => scrollToSection('menu')}
          >
            View Our Menu
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white bg-transparent hover:bg-white hover:text-bakery-brown font-semibold text-lg px-8 py-3"
            onClick={() => scrollToSection('about')}
          >
            Our Story
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce-soft">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;