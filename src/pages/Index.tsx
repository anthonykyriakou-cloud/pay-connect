import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import ContactForm from "@/components/sections/contact";
import CalendarIntegration from "@/components/sections/calendar-integration";
import { Footer } from "@/components/sections/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { LanguageProvider } from "@/providers/languages/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Services />
        <CalendarIntegration />
        <ContactForm />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;
