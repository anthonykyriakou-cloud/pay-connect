import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-xl text-muted-foreground">
            How Key Connections uses cookies to improve your experience
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          {/* What Are Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🍪 What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
              <p className="text-muted-foreground">
                Key Connections uses cookies responsibly and in compliance with applicable privacy laws, 
                including GDPR where applicable.
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">📋 Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">🔒 Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    These cookies are necessary for the website to function properly. They cannot be disabled 
                    and don't store personal information.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Security and authentication</li>
                    <li>• Basic website functionality</li>
                    <li>• Load balancing</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">📊 Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    These help us understand how visitors use our website so we can improve it.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Google Analytics</li>
                    <li>• Page views and user behavior</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">⚙️ Functional Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    These remember your preferences to provide a personalized experience.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Language preferences</li>
                    <li>• Contact form data</li>
                    <li>• User interface settings</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">📱 Social Media Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    These enable social media features and may track you across sites.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Social sharing buttons</li>
                    <li>• Embedded content</li>
                    <li>• Third-party integrations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specific Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🔍 Specific Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-semibold">Cookie Name</th>
                      <th className="text-left py-2 font-semibold">Purpose</th>
                      <th className="text-left py-2 font-semibold">Duration</th>
                      <th className="text-left py-2 font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">_ga</td>
                      <td className="py-2">Google Analytics - distinguishes users</td>
                      <td className="py-2">2 years</td>
                      <td className="py-2">Analytics</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">_gid</td>
                      <td className="py-2">Google Analytics - distinguishes users</td>
                      <td className="py-2">24 hours</td>
                      <td className="py-2">Analytics</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">language</td>
                      <td className="py-2">Stores your language preference</td>
                      <td className="py-2">1 year</td>
                      <td className="py-2">Functional</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono text-xs">session_id</td>
                      <td className="py-2">Maintains your session</td>
                      <td className="py-2">Session</td>
                      <td className="py-2">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">⚙️ Managing Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Browser Settings</h3>
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>• View which cookies are stored</li>
                  <li>• Delete existing cookies</li>
                  <li>• Block cookies from specific sites</li>
                  <li>• Block third-party cookies</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Our Cookie Banner</h3>
                <p className="text-muted-foreground">
                  When you first visit our site, you'll see a cookie banner where you can:
                </p>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>• Accept all cookies</li>
                  <li>• Reject non-essential cookies</li>
                  <li>• Customize your preferences</li>
                </ul>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">⚠️ Important Note</h4>
                <p className="text-sm text-muted-foreground">
                  Disabling certain cookies may affect the functionality of our website. 
                  Essential cookies cannot be disabled as they are necessary for the site to work properly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legal Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">⚖️ Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Under applicable privacy laws, you have the right to:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• <strong>Access:</strong> Know what cookies we use and why</li>
                <li>• <strong>Control:</strong> Manage your cookie preferences</li>
                <li>• <strong>Withdraw:</strong> Change your consent at any time</li>
                <li>• <strong>Delete:</strong> Request deletion of your data</li>
                <li>• <strong>Portability:</strong> Receive your data in a portable format</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">📞 Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have questions about our use of cookies or this policy, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> privacy@keyconnections.com
                </p>
                <p className="text-muted-foreground">
                  <strong>Subject:</strong> Cookie Policy Inquiry
                </p>
              </div>
              <Button variant="outline" className="mt-4">
                📧 Contact Our Privacy Team
              </Button>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🔄 Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
