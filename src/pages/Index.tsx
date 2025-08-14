import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { LanguageProvider } from "@/providers/languages/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
