import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    telegramWhatsapp: "",
    url: "",
    license: "",
    targetCountries: "",
    monthlyVolume: "",
    yearsOperation: "",
    servicesInterested: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: t("app.contactForm.submitting"),
      description: t("app.contactForm.submittingDescription"),
    });

    try {
      const messageContent = `
        Contact Name: ${formData.contactName}
        Contact Email: ${formData.contactEmail}
        Telegram/WhatsApp: ${formData.telegramWhatsapp || 'Not provided'}
        Website URL: ${formData.url || 'Not provided'}
        License Information: ${formData.license || 'Not provided'}
        Target Countries: ${formData.targetCountries || 'Not specified'}
        Monthly Volume: ${formData.monthlyVolume || 'Not specified'}
        Years of Operation: ${formData.yearsOperation || 'Not specified'}
        Services Interested In: ${formData.servicesInterested || 'Not specified'}
      `.trim();

      const response = await fetch('https://keyconnections-api-310845305865.us-central1.run.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.contactName,
          email: formData.contactEmail,
          message: messageContent
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: t("app.contactForm.success"),
          description: t("app.contactForm.successDescription"),
          variant: "default",
        });

        setFormData({
          contactName: "",
          contactEmail: "",
          telegramWhatsapp: "",
          url: "",
          license: "",
          targetCountries: "",
          monthlyVolume: "",
          yearsOperation: "",
          servicesInterested: "",
        });
      } else {
        throw new Error(result.error || 'Failed to submit inquiry');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t("app.contactForm.error"),
        description: t("app.contactForm.errorDescription"),
        variant: "destructive",
      });
    }
  };

  const onChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="book-consultation" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant border-0">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl">
                {t("app.contactForm.title")}
              </CardTitle>
              <CardDescription className="text-lg">
                {t("app.contactForm.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">{t("app.contactForm.contactName")} *</Label>
                    <Input
                      id="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) =>
                        onChange("contactName", e.target.value)
                      }
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">{t("app.contactForm.contactEmail")} *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      required
                      value={formData.contactEmail}
                      onChange={(e) =>
                        onChange("contactEmail", e.target.value)
                      }
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telegramWhatsapp">Telegram/WhatsApp</Label>
                    <Input
                      id="telegramWhatsapp"
                      value={formData.telegramWhatsapp}
                      onChange={(e) =>
                        onChange("telegramWhatsapp", e.target.value)
                      }
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="url">{t("app.contactForm.websiteUrl")} *</Label>
                    <Input
                      id="url"
                      type="url"
                      required
                      value={formData.url}
                      onChange={(e) => onChange("url", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="license">{t("app.contactForm.licenseInformation")} *</Label>
                  <Input
                    id="license"
                    required
                    value={formData.license}
                    onChange={(e) => onChange("license", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetCountries">{t("app.contactForm.targetCountries")}</Label>
                  <Input
                    id="targetCountries"
                    placeholder="e.g., USA, UK, Germany"
                    value={formData.targetCountries}
                    onChange={(e) =>
                      onChange("targetCountries", e.target.value)
                    }
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyVolume">{t("app.contactForm.monthlyVolume")} *</Label>
                    <Select
                    required
                      onValueChange={(value) =>
                        onChange("monthlyVolume", value)
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t("app.contactForm.selectMonthlyVolume")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-50k">
                          $10,000 - $50,000
                        </SelectItem>
                        <SelectItem value="50k-100k">
                          $50,000 - $100,000
                        </SelectItem>
                        <SelectItem value="100k-500k">
                          $100,000 - $500,000
                        </SelectItem>
                        <SelectItem value="500k-1m">
                          $500,000 - $1,000,000
                        </SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsOperation">{t("app.contactForm.yearsOfOperation")}</Label>
                    <Select
                      onValueChange={(value) =>
                        onChange("yearsOperation", value)
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={t("app.contactForm.selectYears")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">
                          {t("app.contactForm.startup")}
                        </SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="over-10">Over 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicesInterested">
                    {t("app.contactForm.servicesInterested")}
                  </Label>
                  <Textarea
                    id="servicesInterested"
                    placeholder={t("app.contactForm.servicesInterestedPlaceholder")}
                    value={formData.servicesInterested}
                    onChange={(e) =>
                      onChange("servicesInterested", e.target.value)
                    }
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-elegant hover:shadow-lg transition-all duration-300"
                >
                  {t("app.contactForm.submitInquiry")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
