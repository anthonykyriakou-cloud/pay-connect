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
        
        <div className="flex gap-8 max-w-4xl mx-auto">     
          <div className="flex-1"></div>    
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Calendar className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl">Google Calendar</CardTitle>
              <CardDescription className="text-base">
                {t('app.calendarBooking.googleCalendarDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <Button 
                variant="outline" 
                className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://calendar.app.google/aihGS9A1Ahr4CEdg9', '_blank')}
              >
                Book via Google Calendar
              </Button>
            </CardContent>
          </Card>
          <div className="flex-1"></div>    
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            {t('app.calendarBooking.cantFindSuitableTime')} <a href="https://t.me/ak_keyconnections" className="text-primary hover:underline">{t('app.calendarBooking.contactUsOnTelegram')}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendarIntegration;