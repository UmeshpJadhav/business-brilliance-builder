import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hero-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg">
            Contact us today for a free consultation and quote. We're here to solve your waterproofing problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Call Us</h3>
            <a href="tel:+919876543210" className="text-white/80 hover:text-secondary transition-colors">
              +91 98765 43210
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Location</h3>
            <p className="text-white/80">
              Mumbai, Maharashtra
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Working Hours</h3>
            <p className="text-white/80">
              Mon - Sat: 9AM - 7PM
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="gradient"
            size="lg"
            asChild
          >
            <a href="tel:+919876543210">
              <Phone className="mr-1" />
              Call Now: +91 98765 43210
            </a>
          </Button>
          
          <Button
            variant="whatsapp"
            size="lg"
            asChild
          >
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
