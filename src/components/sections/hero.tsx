import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-payment-advisor.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional payment solutions consultant"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-payment-gradient rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-payment-success rounded-full opacity-30 animate-bounce" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">💼</span>
            <span className="text-payment-success font-semibold">Trusted Payment Solutions Advisor</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Simplify Your
            <span className="text-transparent bg-payment-gradient bg-clip-text"> Payment </span>
            Journey
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Expert guidance for businesses seeking reliable, secure, and efficient payment processing solutions. 
            Let's transform your payment challenges into competitive advantages. 💳✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="payment"
              size="lg" 
              className="text-lg px-8 py-6 shadow-trust-glow font-semibold"
            >
              🚀 Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-secondary/50 text-lg px-8 py-6 transition-all duration-300"
            >
              📋 View Services
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-payment-success rounded-full"></span>
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-payment-success rounded-full"></span>
              <span>100+ Successful Integrations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-payment-success rounded-full"></span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}