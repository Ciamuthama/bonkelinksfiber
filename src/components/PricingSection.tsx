import { motion } from "motion/react";
import React, { useState } from "react";
import {
  Clock,
  Timer,
  Activity,
  Calendar,
  ShieldCheck,
  Zap,
  Wifi,
  ArrowRight,
  Gauge,
  Gamepad2,
} from "lucide-react";
import { cn } from "../lib/utils";
import { staggerContainerVariants, staggerItemVariants, fadeInUpVariants, scaleInVariants } from "../lib/animations";

export const PricingSection = () => {
  const [pricingType, setPricingType] = useState<"hotspot" | "fiber">(
    "fiber",
  );

  const fiberPricing = [
    {
      speed: "6mbps",
      name: "Basic",
      description: "Ideal for light browsing",
      feature: "Affordable monthly rate",
      price:"1,499",
      icon: Wifi,
      popular: false,
    },
    {
      speed: "10mbps",
      name: "Standard",
      description: "Streaming + work ready",
      feature: "Best value",
      price:"1,999",
      icon: Activity,
      popular: true,
    },
    {
      speed: "15mbps",
      name: "Premium",
      description: "Best for gaming",
      feature: "High-performance connection",
      price:"2,999",
      icon: Gamepad2,
      popular: false,
    },
    {
      speed: "20mbps",
      name: "Deluxe",
      description: "High-speed for businesses",
      feature: "Business-grade reliability",
      price:"3,999",
      icon: Gauge,
      popular: false,
    },
    {
      speed: "40mbps",
      name: "Umeme",
      description: "Plan for large enterprises",
      feature: "Enterprise-level performance",
      price:"8,000",
      icon: Zap,
      popular: false,
    }
  ];

  const hotspotPricing = [
    {
      type: "quota",
      limit: "1 hour",
      price: "10",
      speed: "Max 4mbps",
      icon: Clock,
    },
    {
      type: "quota",
      limit: "6 hours",
      price: "20",
      speed: "Max 4mbps",
      icon: Clock,
    },
    {
      type: "quota",
      limit: "12 hours",
      price: "30",
      speed: "Max 4mbps",
      icon: Timer,
    },
    {
      type: "quota",
      limit: "24 hours",
      price: "40",
      speed: "Max 4mbps",
      icon: Activity,
    },
    {
      type: "duration",
      limit: "1 Week",
      price: "200",
      speed: "Max 4mbps",
      icon: Calendar,
    },
    {
      type: "duration",
      limit: "2 Weeks",
      price: "350",
      speed: "Max 4mbps",
      icon: ShieldCheck,
    },
    {
      type: "duration",
      limit: "1 month",
      price: "750",
      speed: "Max 5mbps",
      icon: Zap,
      popular: true,
    },
  ];

  return (
    <section id="pricing-section" className="py-16 md:py-24 bg-surface">
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary mb-4 md:mb-6">
              Hotspot & Fiber Access
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
              Precision-priced for the Kenyan market. Select your preferred
              connection method below.
            </p>
          </div>
          <div className="flex p-1 bg-surface-container rounded-lg">
            <button
              onClick={() => setPricingType("fiber")}
              className={cn(
                "px-6 py-2 rounded-md font-bold text-sm transition-all",
                pricingType === "fiber"
                  ? "bg-white shadow-sm text-primary"
                  : "text-secondary hover:text-primary",
              )}
            >
              Home Fiber
            </button>
            <button
              onClick={() => setPricingType("hotspot")}
              className={cn(
                "px-6 py-2 rounded-md font-bold text-sm transition-all",
                pricingType === "hotspot"
                  ? "bg-white shadow-sm text-primary"
                  : "text-secondary hover:text-primary",
              )}
            >
              Hotspot
            </button>
          </div>
        </motion.div>

        {pricingType === "fiber" ? (
          <motion.div
            key="fiber-pricing"
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Plans & Pricing Preview
              </h3>
              <p className="text-secondary ">Ultra-fast home fiber connectivity for every need</p>
            </motion.div>

            <motion.div 
              variants={staggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {fiberPricing.map((plan) => (
                <motion.div
                  key={plan.speed}
                  variants={staggerItemVariants}
                  className={cn(
                    "relative p-8 flex flex-col justify-between rounded-xl transition-all duration-500 group",
                    plan.popular
                      ? "bg-accent text-primary ring-2 ring-accent shadow-2xl transform scale-105"
                      : "bg-surface-container hover:bg-primary hover:text-white",
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-accent text-[10px] font-bold px-3 py-1 uppercase tracking-tighter rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <plan.icon
                      className={cn(
                        "w-12 h-12 mb-4",
                        plan.popular ? "text-primary" : "text-accent group-hover:text-accent",
                      )}
                    />
                    <p className="lg:text-4xl text-3xl font-bold mb-2">
                      {plan.speed}
                    </p>
                    <h3
                      className={cn(
                        "text-xl font-bold mb-2 transition-colors",
                        plan.popular
                          ? "text-primary"
                          : "text-primary group-hover:text-white",
                      )}
                    >
                      {plan.name} Plan
                    </h3>
                    <p
                      className={cn(
                        "text-sm font-semibold mb-3",
                        plan.popular
                          ? "text-primary/80"
                          : "text-secondary group-hover:text-white/80",
                      )}
                    >
                      {plan.description}
                    </p>
                    <p
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest",
                        plan.popular
                          ? "text-primary/70"
                          : "text-accent group-hover:text-accent",
                      )}
                    >
                      ✓ {plan.feature}
                    </p>
                  </div>
                  <p
                    className={cn(
                      "lg:text-5xl text-3xl font-bold mt-6 transition-colors",
                      plan.popular
                        ? "text-primary"
                        : "text-primary group-hover:text-white",
                    )}
                  >
                    {plan.price}
                    <span className="text-sm font-bold opacity-60">KES</span>
                  </p>

                  <a
                    href="tel:+254791198551"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={cn(
                        "w-full mt-8 py-4 font-bold text-xs uppercase tracking-widest transition-all rounded-md flex items-center justify-center gap-2 group",
                        plan.popular
                          ? "bg-primary text-accent hover:bg-white/10 shadow-lg"
                          : "border-2 border-primary group-hover:border-white/40 group-hover:text-white hover:bg-white/10",
                      )}
                    >
                      Choose Plan
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="hotspot-pricing"
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {hotspotPricing.map((plan) => (
              <motion.div
                key={plan.limit}
                variants={staggerItemVariants}
                className={cn(
                  "relative p-8 flex flex-col justify-between rounded-xl transition-all duration-500 group",
                  plan.popular
                    ? "bg-white border-b-4 border-accent shadow-xl ring-1 ring-black/5"
                    : "bg-surface-container-low hover:bg-primary",
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-8 -translate-y-1/2 bg-accent text-primary text-[10px] font-bold px-2 py-1 uppercase tracking-tighter rounded">
                    Best Value
                  </div>
                )}

                <div>
                  <plan.icon
                    className={cn(
                      "w-10 h-10 mb-6",
                      plan.popular
                        ? "text-accent"
                        : "text-accent group-hover:text-accent",
                    )}
                  />
                  <h3
                    className={cn(
                      "text-xl font-bold transition-colors",
                      plan.popular
                        ? "text-primary"
                        : "text-primary group-hover:text-white",
                    )}
                  >
                    {plan.limit}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm font-bold uppercase tracking-widest",
                      plan.popular
                        ? "text-accent"
                        : "text-accent group-hover:text-accent",
                    )}
                  >
                    {plan.speed}
                  </p>
                </div>

                <div className="mt-12">
                  <p
                    className={cn(
                      "lg:text-5xl text-3xl font-bold transition-colors",
                      plan.popular
                        ? "text-primary"
                        : "text-primary group-hover:text-white",
                    )}
                  >
                    {plan.price}{" "}
                    <span className="text-sm font-bold opacity-60">KES</span>
                  </p>
                  <a
                    href="tel:+254791198551"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={cn(
                        "w-full mt-6 py-3 font-bold text-xs uppercase tracking-widest transition-all rounded-md",
                        plan.popular
                          ? "bg-primary text-white hover:bg-accent hover:text-primary shadow-lg"
                          : "border border-primary/10 group-hover:border-white/20 group-hover:text-white hover:bg-white/10",
                      )}
                    >
                      Connect Now
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
