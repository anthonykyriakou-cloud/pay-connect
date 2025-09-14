import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CreditCard,
  Landmark,
  HandCoins,
  TrendingUp,
  Scale,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import visa from "@/assets/visa.svg";
import mastercard from "@/assets/mastercard.svg";
import sepa from "@/assets/sepa.svg";
import swift from "@/assets/swift.svg";
import upi from "@/assets/upi.svg";
import Bitcoin from "@/assets/bitcoin.svg";
import usdt from "@/assets/usdt.svg";
import euro from "@/assets/euro.svg";
import dollar from "@/assets/dollar.svg";
import sterling from "@/assets/sterling.svg";
import skrill from "@/assets/skrill.svg";
import blik from "@/assets/blik.svg";
import openbanking from "@/assets/open-banking.svg";

export function Services() {
  const { t } = useTranslation();
  const services = [
    {
      icon: CreditCard,
      title: t("app.services.cardProcessingAcquiring"),
      description: t("app.services.cardProcessingAcquiringDescription"),
      methods: [visa, mastercard],
    },
    {
      icon: Landmark,
      title: t("app.services.bankingSolutions"),
      description: t("app.services.bankingSolutionsDescription"),
      bulletPoints: t("app.services.bankingSolutionsBulletPoints", {
        returnObjects: true,
      }),
      methods: [swift, sepa],
    },
    {
      icon: HandCoins,
      title: t("app.services.alternativePaymentMethods"),
      description: t("app.services.alternativePaymentMethodsDescription"),
      methods: [upi, openbanking, skrill, blik],
    },
    {
      icon: TrendingUp,
      title: t("app.services.onAndOffRampServices"),
      description: t("app.services.onAndOffRampServicesDescription"),
      bulletPoints: t("app.services.onAndOffRampServicesBulletPoints", {
        returnObjects: true,
      }),
      methods: [euro, dollar, sterling, usdt, Bitcoin],
    },
    {
      icon: Scale,
      title: t("app.services.licensing"),
      description: t("app.services.licensingDescription"),
    },
    // {
    //   icon: Zap,
    //   title: "Fraud Prevention",
    //   description: "Advanced fraud detection and prevention systems to minimize chargebacks and protect your revenue."
    // }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("app.services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("app.services.description_1")} <br /> <br />
            {t("app.services.description_2")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                {service.bulletPoints &&
                  Array.isArray(service.bulletPoints) && (
                    <ul className="space-y-2 mb-6 my-2">
                      {service.bulletPoints.map((bulletPoint, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-payment-success rounded-full"></span>
                          <span className="text-muted-foreground">
                            {bulletPoint}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                <div className="flex-1"></div>

                {service.methods && (
                  <div className="flex gap-4">
                    {service.methods.map((method, methodIndex) => (
                      <img
                        key={methodIndex}
                        src={method}
                        alt={method}
                        className={
                          index === 0
                            ? "w-12 h-12"
                            : index === 3
                            ? "w-12 h-12"
                            : "w-16 h-16"
                        }
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
