import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-payment-advisor.jpg";
import handShakingImage from "@/assets/hand-shaking.png";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional payment solutions consultant"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-payment-gradient rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-payment-success rounded-full opacity-30 animate-bounce" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {t('app.hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              {t('app.hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="payment"
                size="lg" 
                className="text-lg px-8 py-6 shadow-trust-glow font-semibold"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-secondary/50 text-lg px-8 py-6 transition-all duration-300"
              >
                View Services
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-payment-gradient rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-payment-success rounded-full opacity-20"></div>
              
              <div className="relative z-10 bg-green-200/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-green-500/5">
                <img 
                  src={handShakingImage} 
                  alt="Professional handshake"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
                />
              </div>
              
              <div className="absolute top-8 -left-2 w-4 h-4 bg-payment-success rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 -right-2 w-3 h-3 bg-payment-gradient rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}