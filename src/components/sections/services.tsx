import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import paymentMethodsImage from "@/assets/payment-methods.jpg";

export function Services() {
  const services = [
    {
      icon: "🏦",
      title: "Merchant Account Setup",
      description: "Complete setup and optimization of merchant accounts across multiple payment processors. Get the best rates and terms for your business type.",
      features: ["Multi-processor comparison", "Rate negotiation", "Quick approval process", "Ongoing support"]
    },
    {
      icon: "💳",
      title: "Payment Gateway Integration", 
      description: "Seamless integration of payment gateways with your existing systems. Ensure secure, fast, and reliable payment processing.",
      features: ["API integration", "Security compliance", "Multi-currency support", "Real-time monitoring"]
    },
    {
      icon: "🔒",
      title: "Compliance & Security",
      description: "Navigate PCI DSS compliance and security requirements. Protect your business and customers with industry-leading security measures.",
      features: ["PCI DSS guidance", "Security audits", "Risk assessment", "Fraud prevention"]
    },
    {
      icon: "📊",
      title: "Payment Analytics",
      description: "Comprehensive reporting and analytics to optimize your payment performance. Track metrics, identify trends, and reduce costs.",
      features: ["Performance tracking", "Cost analysis", "Success rate optimization", "Custom dashboards"]
    },
    {
      icon: "🌐",
      title: "International Payments",
      description: "Expand globally with multi-currency payment solutions. Handle international transactions with confidence and compliance.",
      features: ["Multi-currency processing", "Foreign exchange optimization", "Local payment methods", "Regulatory compliance"]
    },
    {
      icon: "⚡",
      title: "Payment Optimization",
      description: "Improve payment success rates and reduce processing costs. Ongoing optimization ensures peak performance.",
      features: ["Success rate improvement", "Cost reduction strategies", "Performance monitoring", "Continuous optimization"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎯</span>
            <span className="text-payment-success font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Payment Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From setup to optimization, we provide end-to-end payment services that grow with your business 🚀
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card-gradient border-border hover:shadow-professional transition-all duration-300 group">
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-payment-success rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Service Banner */}
        <div className="bg-card-gradient rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                🎉 Special: Complete Payment Audit
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive review of your current payment setup with personalized recommendations. 
                Identify cost savings and improvement opportunities worth thousands annually.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-payment-success rounded-full"></span>
                  <span className="text-muted-foreground">Current system analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-payment-success rounded-full"></span>
                  <span className="text-muted-foreground">Cost optimization recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-payment-success rounded-full"></span>
                  <span className="text-muted-foreground">Security & compliance review</span>
                </li>
              </ul>
              <Button className="bg-payment-gradient hover:opacity-90 transition-all">
                📞 Book Free Audit
              </Button>
            </div>
            <div className="relative">
              <img 
                src={paymentMethodsImage} 
                alt="Payment methods and processing"
                className="rounded-xl shadow-professional"
              />
              <div className="absolute inset-0 bg-payment-gradient opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}