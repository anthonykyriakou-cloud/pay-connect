import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";
import ScrollIntoView from "react-scroll-into-view";
import KeyLogo from "./logo";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#book-consultation", label: "Contact" },
  ];

  const onBookConsultation = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1">
            <div className="flex-shrink-0 h-8 w-auto flex items-center justify-center overflow-hidden mt-2">
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="h-full w-auto max-w-[120px] object-contain object-center" 
              />
            </div>
            <span className="text-md font-bold text-foreground">
              Key<span className="text-[#DAA520]">Connections</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
            </div>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <ScrollIntoView selector="#book-consultation">
              <Button size="sm" variant="payment" className="font-semibold" onClick={onBookConsultation}>
                {t('app.navigation.bookConsultation')}
              </Button>
            </ScrollIntoView>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div
                className={cn(
                  "h-0.5 bg-foreground transition-all",
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                )}
              />
              <div
                className={cn(
                  "h-0.5 bg-foreground transition-all",
                  isMenuOpen ? "opacity-0" : ""
                )}
              />
              <div
                className={cn(
                  "h-0.5 bg-foreground transition-all",
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                )}
              />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
              </div>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <ScrollIntoView selector="#book-consultation">
                <Button
                  size="sm"
                  variant="payment"
                  className="w-full font-semibold"
                  onClick={onBookConsultation}
                >
                  {t("app.navigation.bookConsultation")}
                </Button>
              </ScrollIntoView>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
