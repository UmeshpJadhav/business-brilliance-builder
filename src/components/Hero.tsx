import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-waterproofing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Waterproofing work in progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Navi Mumbai's Trusted Waterproofing Experts</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            श्री विघ्नहर्ता
            <span className="block text-secondary">Construction</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Expert waterproofing solutions, repairs, renovations & leakage fixes. 
            Quality work delivered on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-accent-gradient text-primary-foreground hover:opacity-90 transition-opacity font-semibold text-lg px-8 group"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8"
              asChild
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-3xl font-bold text-secondary">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
