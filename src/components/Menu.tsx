import { Card, CardContent } from "@/components/ui/card";
import croissantsImage from "@/assets/croissants.jpg";
import macaronsImage from "@/assets/macarons.jpg";
import cupcakesImage from "@/assets/cupcakes.jpg";
import artisanBreadImage from "@/assets/artisan-bread.jpg";
import fruitTartsImage from "@/assets/fruit-tarts.jpg";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Butter Croissants",
      price: "$3.50",
      description: "Flaky, buttery pastries baked fresh every morning",
      image: croissantsImage,
      category: "Pastries"
    },
    {
      id: 2,
      name: "French Macarons",
      price: "$2.25 each",
      description: "Delicate almond cookies with silky smooth ganache",
      image: macaronsImage,
      category: "Desserts"
    },
    {
      id: 3,
      name: "Chocolate Cupcakes",
      price: "$4.75",
      description: "Rich chocolate cake topped with cream frosting",
      image: cupcakesImage,
      category: "Cakes"
    },
    {
      id: 4,
      name: "Artisan Sourdough",
      price: "$8.95",
      description: "Traditional sourdough with a perfect golden crust",
      image: artisanBreadImage,
      category: "Breads"
    },
    {
      id: 5,
      name: "Fresh Fruit Tarts",
      price: "$5.25",
      description: "Seasonal fruits on vanilla custard in pastry shells",
      image: fruitTartsImage,
      category: "Desserts"
    },
    {
      id: 6,
      name: "Almond Croissants",
      price: "$4.25",
      description: "Croissants filled with almond cream and topped with sliced almonds",
      image: croissantsImage,
      category: "Pastries"
    }
  ];

  const categories = ["All", "Pastries", "Desserts", "Cakes", "Breads"];

  return (
    <section id="menu" className="py-20 bg-bakery-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-brown mb-4">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with the finest ingredients and baked fresh daily
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="hover-lift bg-card border-0 shadow-soft overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-bakery-gold text-bakery-brown px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-bakery-brown">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-bakery-gold">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;