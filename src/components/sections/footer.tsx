export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-payment-gradient rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-black">💳</span>
              </div>
              <span className="text-xl font-bold text-foreground">PaymentPro</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your trusted partner for payment processing solutions. Simplifying payments, 
              maximizing success. 🚀
            </p>
            <div className="flex gap-4">
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">📧</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">📱</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">💼</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">🏠 Home</a></li>
              <li><a href="/services" className="hover:text-foreground transition-colors">🎯 Services</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">📞 Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">📋 Resources</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">🏦 Merchant Accounts</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">💳 Payment Gateways</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">🔒 Compliance</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">📊 Analytics</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PaymentPro. All rights reserved. 💪
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}