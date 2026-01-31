import { Phone, MessageCircle, ArrowRight, MapPin, Star, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-waterproofing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Waterproofing work in progress"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/85 to-slate-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-slate-900/40" />
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-24 pt-32">
        <div className="max-w-5xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-white/20 hover:bg-white/15 transition-colors animate-fade-up">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-white/95 text-sm font-semibold">5-Star Rated Service</span>
            </div>
            <div className="flex items-center gap-1 pl-3 border-l border-white/20">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          
          {/* Main Heading - Premium Typography */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 animate-fade-up text-balance" style={{ animationDelay: "0.1s" }}>
            <span className="block">Premium Construction</span>
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent mt-2">& Waterproofing Excellence</span>
          </h1>
          
          {/* Subheading - Enhanced */}
          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-3xl leading-relaxed animate-fade-up font-medium" style={{ animationDelay: "0.2s" }}>
            Transform your property with expert <span className="text-amber-400 font-bold">waterproofing solutions</span>, expert repairs, and complete renovations. 
            <span className="block mt-3 text-white/75 text-base font-normal">Delivered with precision, completed on time, guaranteed quality.</span>
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transition-all font-bold text-base"
            >
              <a href="tel:+919096528771" className="group">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              asChild
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-bold text-base transition-all"
            >
              <a href="https://wa.me/919096528771" target="_blank" rel="noopener noreferrer" className="group">
                <MessageCircle className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </a>
            </Button>
          </div>

          {/* Premium Trust Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 pt-10 border-t border-white/20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "500+", label: "Projects Completed", icon: "✓" },
              { value: "10+", label: "Years Excellence", icon: "⭐" },
              { value: "100%", label: "Client Satisfaction", icon: "💯" },
            ].map((stat) => (
              <div key={stat.label} className="text-center hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-display">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/80 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2 hover:border-amber-400 transition-colors">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
