import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Video } from "lucide-react";
import { useTranslation } from "react-i18next";

const CalendarIntegration = () => {
  const { t } = useTranslation();

  return (
    <section id="book-consultation" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">{t('app.calendarBooking.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('app.calendarBooking.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Calendar className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">Calendly Integration</CardTitle>
              <CardDescription className="text-base">
                Schedule meetings directly through our Calendly integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>30-minute consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-primary" />
                  <span>Video call or phone</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Instant booking confirmation</span>
                </div>
              </div>
              <Button 
                className="w-full shadow-elegant hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://calendly.com/payment-solutions', '_blank')}
              >
                Book via Calendly
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Calendar className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">Google Calendar</CardTitle>
              <CardDescription className="text-base">
                Schedule directly through Google Calendar integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Flexible time slots</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-primary" />
                  <span>Meet or Zoom integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Calendar sync</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1F6zG2D8XKh8rn3dP4a2E5', '_blank')}
              >
                Book via Google Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Can't find a suitable time? <a href="mailto:contact@paymentsolutions.com" className="text-primary hover:underline">Contact us directly on Telegram</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendarIntegration;