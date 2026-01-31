import { Phone, MessageCircle, ArrowRight, MapPin, Star } from "lucide-react";
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
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 pt-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20 animate-fade-up">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-sm font-medium">Mumbai's Trusted Waterproofing Experts</span>
            <div className="flex items-center gap-1 ml-2 pl-2 border-l border-white/20">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
              ))}
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="block">श्री विघ्नहर्ता</span>
            <span className="relative inline-block mt-2">
              <span className="text-gradient">Construction</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 10" stroke="hsl(35 95% 55%)" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/85 mb-10 max-w-2xl leading-relaxed animate-fade-up font-medium" style={{ animationDelay: "0.2s" }}>
            Expert <span className="text-secondary">waterproofing</span> solutions, repairs, renovations & leakage fixes. 
            <span className="block mt-1 text-white/70 text-lg">Quality work delivered on time, every time.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-accent-gradient text-primary-foreground hover:opacity-90 transition-all font-bold text-lg px-8 py-6 h-auto group shadow-lg shadow-secondary/30"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-bold text-lg px-8 py-6 h-auto backdrop-blur-sm"
              asChild
            >
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Projects Done" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-secondary font-display">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
