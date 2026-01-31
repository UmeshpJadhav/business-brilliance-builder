import { Clock, Shield, ThumbsUp, Award, Users, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and ensure every project is completed within the promised timeline.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Premium materials and skilled craftsmanship backed by our quality assurance warranty.",
  },
  {
    icon: ThumbsUp,
    title: "Customer First",
    description: "Your satisfaction is our priority. We work closely with you at every step.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Our team consists of trained and certified professionals with years of experience.",
  },
  {
    icon: Users,
    title: "Local Trust",
    description: "Serving Navi Mumbai with pride. Trusted by hundreds of happy customers.",
  },
  {
    icon: Hammer,
    title: "Complete Solutions",
    description: "From inspection to completion, we handle everything under one roof.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Trust Through
              <span className="text-secondary"> Quality Work</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Shree Vighnaharta Construction, we believe in delivering excellence. 
              Our commitment to quality, transparency, and customer satisfaction has made us 
              Navi Mumbai's preferred choice for waterproofing and construction services.
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <p className="text-foreground italic text-lg">
                "हम गुणवत्ता और समय पर काम करने में विश्वास करते हैं। आपका भरोसा, हमारी जिम्मेदारी।"
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                — Shree Vighnaharta Construction Team
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group p-5 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-colors duration-300">
                  <reason.icon className="h-6 w-6 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
