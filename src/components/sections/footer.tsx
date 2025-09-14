import { useTranslation } from "react-i18next";
import TelegramIcon from "@/assets/telegram.svg";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 flex flex-col">
            <div className="flex-1" />
            <div className="flex gap-4">
              <a
                href="mailto:support@keyconnections.io"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span>📧</span> {t('app.footer.supportEmail')}
              </a>
              <a
                href="https://t.me/ak_keyconnections"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <img src={TelegramIcon} alt="Telegram" className="w-4 h-4" /> ak_keyconnections
              </a>
            </div>
          </div>
        </div>

        <div className="bg-slate-300/30 rounded-lg p-6 my-8">
          <h4 className="font-semibold text-foreground mb-3">
            ⚠️ {t('app.footer.disclaimer')}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>{t("app.name")}</strong> {t('app.footer.disclaimerDescription')}
          </p>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {t("app.name")}. {t('app.footer.allRightsReserved')}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              {t('app.footer.privacyPolicy')}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t('app.footer.termsOfService')}
            </a>
            <a
              href="/cookie-policy"
              className="hover:text-foreground transition-colors"
            >
              {t('app.footer.cookiePolicy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
