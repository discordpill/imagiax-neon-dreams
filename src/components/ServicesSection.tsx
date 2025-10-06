import { Code, ShoppingCart, Utensils, Shirt, Database, Palette, Cpu, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Utensils,
    title: "Restaurant Websites",
    description: "Beautiful, responsive websites for restaurants with online menus, reservations, and ordering systems.",
    features: ["Online Ordering", "Reservation System", "Menu Management"]
  },
  {
    icon: Shirt,
    title: "Clothing Brand Sites",
    description: "Stunning e-commerce platforms for fashion brands with product showcases and seamless shopping experiences.",
    features: ["Product Catalogs", "Shopping Cart", "Payment Integration"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with inventory management, payment processing, and order tracking.",
    features: ["Inventory System", "Multi-Payment", "Order Tracking"]
  },
  {
    icon: Code,
    title: "Custom Web Apps",
    description: "Tailored web applications built with modern technologies to solve your unique business needs.",
    features: ["Custom Features", "Scalable", "Modern Tech"]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust backend systems with databases, APIs, and server-side logic for powerful applications.",
    features: ["RESTful APIs", "Database Design", "Authentication"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Eye-catching, user-friendly designs that create memorable experiences and drive engagement.",
    features: ["Responsive Design", "Brand Identity", "User Research"]
  },
  {
    icon: Cpu,
    title: "Full-Stack Development",
    description: "Complete end-to-end solutions from frontend to backend, database to deployment.",
    features: ["Frontend + Backend", "Database", "Deployment"]
  },
  {
    icon: Cloud,
    title: "Cloud & Hosting",
    description: "Reliable cloud hosting solutions with automatic scaling, backups, and 99.9% uptime.",
    features: ["Auto-Scaling", "Daily Backups", "24/7 Monitoring"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient neon-text">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive digital solutions that bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
