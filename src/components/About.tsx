import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Clock, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every recipe passed down through generations, crafted with passion and care."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in traditional baking and innovative pastries."
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Our bakers start at 4 AM to ensure everything is fresh when you arrive."
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "A family business serving the community with authentic flavors since 2025."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-brown mb-4">
            About Leo's Bakery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2025, Leo's Bakery has been the heart of our community, 
            bringing families together through the love of freshly baked goods and traditional recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Text */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-serif font-bold text-bakery-brown mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                Founded in 2025 by Leo Rodriguez, Leo's Bakery began as a small 
                neighborhood bakery with a simple mission: to bring authentic European baking 
                traditions to our local community in Westminster.
              </p>
              <p>
                From day one, we've been combining time-honored 
                techniques with carefully selected ingredients to create the pastries, breads, 
                and desserts that make us a beloved local institution.
              </p>
              <p>
                Every morning before dawn, our passionate bakers begin their work, ensuring 
                that when you walk through our doors, you're greeted by the warmth of our 
                ovens and the irresistible aroma of fresh-baked goodness.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="text-center hover-lift bg-card border-0 shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-bakery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-bakery-brown" />
                    </div>
                    <h4 className="text-lg font-serif font-bold text-bakery-brown mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center bg-bakery-cream p-12 rounded-2xl animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-script text-bakery-brown mb-4 italic">
            "Baking is not just our profession, it's our passion. Every loaf tells a story, 
            every pastry carries love."
          </blockquote>
          <p className="text-lg font-semibold text-bakery-gold">
            - Leo Rodriguez, Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;