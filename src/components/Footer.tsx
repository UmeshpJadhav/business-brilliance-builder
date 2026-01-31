import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center">
                <span className="font-bold text-lg">SV</span>
              </div>
              <div>
                <div className="font-display font-bold leading-tight">Shree Vighnaharta</div>
                <div className="text-xs text-white/60">Construction</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner for waterproofing, repairs, renovations & leakage solutions in Navi Mumbai.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Waterproofing Solutions</li>
              <li>Leakage Repair</li>
              <li>Renovation Work</li>
              <li>Structural Repairs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+919876543210" className="hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <a href="https://wa.me/919876543210" className="hover:text-secondary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-secondary" />
                <a href="https://instagram.com/shree_vighnaharta.construction" className="hover:text-secondary transition-colors">
                  @shree_vighnaharta.construction
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Shree Vighnaharta Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
