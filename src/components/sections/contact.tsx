import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">📞</span>
            <span className="text-payment-success font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Optimize Your Payments?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your payment challenges and find the perfect solution for your business 💪
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                ✉️ Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your payment processing needs..."
                    rows={4}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-payment-gradient hover:opacity-90 transition-all"
                >
                  🚀 Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Calendly */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  📱 Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@paymentpro.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendly Integration */}
            <Card className="bg-card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  📅 Book a Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Schedule a free 30-minute consultation to discuss your payment processing needs.
                </p>
                
                {/* Calendly Embed Placeholder */}
                <div className="bg-muted rounded-lg p-8 text-center border border-border">
                  <div className="space-y-4">
                    <span className="text-4xl">📅</span>
                    <h3 className="text-lg font-semibold text-foreground">Schedule Your Free Consultation</h3>
                    <p className="text-muted-foreground text-sm">
                      Click below to access the calendar and book your preferred time slot
                    </p>
                    <Button 
                      className="bg-payment-gradient hover:opacity-90"
                      onClick={() => window.open('https://calendly.com', '_blank')}
                    >
                      🗓️ Open Calendar
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 text-xs text-muted-foreground">
                  💡 Tip: Have your current payment processor statements ready for a more productive discussion
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-card-gradient border-border">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-payment-success">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-payment-success">100+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-payment-success">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-payment-success">99%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}