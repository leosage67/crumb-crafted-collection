import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  // Add scroll listener for navigation
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-bakery-brown text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif font-bold mb-2 text-bakery-gold">
            Golden Crust Bakery
          </h3>
          <p className="text-sm opacity-80 mb-4">
            Serving fresh baked goods with love since 1985
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>© 2024 Golden Crust Bakery</span>
            <span>|</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;