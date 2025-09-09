import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    servicesInterested: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = "Payment Solutions Inquiry";
    const body = `
Contact Name: ${formData.contactName}
Contact Email: ${formData.contactEmail}
Telegram/WhatsApp: ${formData.telegramWhatsapp}
URL: ${formData.url}
License: ${formData.license}
Target Countries: ${formData.targetCountries}
Monthly Volume: ${formData.monthlyVolume}
Years of Operation: ${formData.yearsOperation}
Services Interested In: ${formData.servicesInterested}
    `.trim();
    
    const mailtoLink = `mailto:contact@paymentsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Form Submitted",
      description: "Your email client will open with the pre-filled information.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="book-consultation" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant border-0">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl">{t('app.contactForm.title')}</CardTitle>
              <CardDescription className="text-lg">
                {t('app.contactForm.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => handleChange("contactName", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email *</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      required
                      value={formData.contactEmail}
                      onChange={(e) => handleChange("contactEmail", e.target.value)}
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
                      onChange={(e) => handleChange("telegramWhatsapp", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="url">Website URL</Label>
                    <Input
                      id="url"
                      type="url"
                      value={formData.url}
                      onChange={(e) => handleChange("url", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="license">License Information</Label>
                  <Input
                    id="license"
                    value={formData.license}
                    onChange={(e) => handleChange("license", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetCountries">Target Countries</Label>
                  <Input
                    id="targetCountries"
                    placeholder="e.g., USA, UK, Germany"
                    value={formData.targetCountries}
                    onChange={(e) => handleChange("targetCountries", e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyVolume">Monthly Volume</Label>
                    <Select onValueChange={(value) => handleChange("monthlyVolume", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select monthly volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsOperation">Years of Operation</Label>
                    <Select onValueChange={(value) => handleChange("yearsOperation", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">Startup (Less than 1 year)</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="over-10">Over 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicesInterested">Services You Are Interested In</Label>
                  <Textarea
                    id="servicesInterested"
                    placeholder="Please describe the payment solutions you need..."
                    value={formData.servicesInterested}
                    onChange={(e) => handleChange("servicesInterested", e.target.value)}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full shadow-elegant hover:shadow-lg transition-all duration-300"
                >
                  Submit Inquiry
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