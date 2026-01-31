import { Droplets, Wrench, Home, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "Complete waterproofing solutions for roofs, basements, terraces & bathrooms using premium materials.",
    features: ["Terrace Waterproofing", "Bathroom Waterproofing", "Basement Sealing"],
  },
  {
    icon: AlertTriangle,
    title: "Leakage Solutions",
    description: "Quick & permanent fixes for all types of water leakage problems in residential & commercial buildings.",
    features: ["Leak Detection", "Crack Repair", "Seepage Treatment"],
  },
  {
    icon: Wrench,
    title: "Repair Work",
    description: "Expert repair services for damaged structures, cracks, and deteriorating surfaces.",
    features: ["Structural Repairs", "Crack Filling", "Surface Treatment"],
  },
  {
    icon: Home,
    title: "Renovation",
    description: "Transform your space with our comprehensive renovation services for homes & offices.",
    features: ["Interior Renovation", "Exterior Work", "Complete Makeover"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From waterproofing to complete renovations, we provide end-to-end solutions with guaranteed quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card hover:shadow-card-hover transition-all duration-300 border-none shadow-card overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
