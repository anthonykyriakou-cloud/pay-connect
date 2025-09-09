import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-payment-advisor.jpg";
import handShakingImage from "@/assets/hero-handshake.png";
import { useTranslation } from "react-i18next";
import ScrollIntoView from "react-scroll-into-view";

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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {t("app.hero.title")}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              {t("app.hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="payment"
                size="lg"
                className="text-lg px-8 py-6 shadow-trust-glow font-semibold"
              >
                {t("app.hero.button.getStarted")}
              </Button>
              <ScrollIntoView selector="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary/50 hover:text-black text-lg px-8 py-6 transition-all duration-300 w-full"
                >
                  {t("app.hero.button.viewServices")}
                </Button>
              </ScrollIntoView>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">
                  Success Rate
                </div>
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
              <div className="relative animate-float">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={handShakingImage}
                    alt="Professional business handshake representing partnership in payment solutions"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
