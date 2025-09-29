import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["11251 Reed Way, Broomfield, CO 80020."],
      action: "Get Directions",
      hasButton: true
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["720-281-8937"],
      hasButton: false
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["orders@leosbakery.com", "info@leosbakery.com"],
      action: "Send Email",
      hasButton: true
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 6:00 AM - 7:00 PM", "Sunday: 7:00 AM - 5:00 PM"],
      action: "View Calendar",
      hasButton: false
    }
  ];

  const handleOrder = () => {
    // In a real app, this would open an ordering system
    alert("Order system coming soon! Call us at 720-281-8937 to place your order.");
  };

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/dir/?api=1&destination=11251+Reed+Way,+Broomfield,+CO+80020", "_blank");
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:orders@leosbakery.com";
  };

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-brown mb-4">
            Visit Leo's Bakery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come experience the warmth of my bakery and taste the difference that passion and love makes
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card 
                key={info.title}
                className="text-center hover-lift bg-card border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-bakery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-bakery-brown" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-bakery-brown mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.hasButton && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-bakery-gold text-bakery-gold hover:bg-bakery-gold hover:text-bakery-brown"
                      onClick={info.title === "Visit Us" ? handleGetDirections : info.title === "Email Us" ? handleSendEmail : undefined}
                    >
                      {info.action}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Order Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-bakery-brown text-white border-0 shadow-warm animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Ready to Order?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Call ahead for pickup or visit us in-store to see my full selection of fresh baked goods
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-bakery-gold hover:bg-bakery-warm text-bakery-brown font-semibold"
                  onClick={handleOrder}
                >
                  Place Order
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-bakery-gold text-bakery-gold hover:bg-bakery-gold hover:text-bakery-brown"
                >
                  View Catering Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Map */}
        <div className="mt-16 animate-slide-up">
          <Card className="overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps?q=11251+Reed+Way,+Broomfield,+CO+80020&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Leo's Bakery Location"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;