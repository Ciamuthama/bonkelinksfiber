import { motion, AnimatePresence } from 'motion/react';
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Headphones, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { StatCounter } from './StatCounter';
import { PricingSection } from './PricingSection';
import { CoverageSection } from './CoverageSection';
import { TestimonialsSection } from './TestimonialsSection';

const carouselSlides = [
  {
    id: 1,
    title: "Lightning-Fast Speeds",
    subtitle: "No buffering. No lag.",
    description: "Whether you're streaming movies, attending meetings, or running your business — Bonkelinks keeps you moving at full speed.",
    highlights: ["HD & 4K Streaming", "Fast Downloads", "Smooth Video Calls"],
    icon: Zap,
    color: "from-accent/20 to-accent/5",
    image:"/speed.jpg"

  },
  {
    id: 2,
    title: "Internet from as Low as KES 10",
    subtitle: "Affordability",
    description: "With Bonkelinks hotspot access, you don't need a monthly plan to get online. Whether you need quick access for browsing, messaging, or checking emails, you can connect instantly starting from just 10 shillings.\n\nPerfect for students, travelers, and anyone who needs affordable, flexible internet on the go.",
    icon: CheckCircle2,
    color: "from-blue-500/20 to-blue-500/5",
    image:"/image.png"

  },
  {
    id: 3,
    title: "Internet You Can Rely On",
    subtitle: "Always connected, always dependable",
    description: "Downtime costs time and money — that's why we prioritize stability. With 99.9% uptime, Bonkelinks ensures your connection stays active when you need it most. Our technical team monitors the network around the clock so you don't have to worry.",
    highlights: ["Stable and secure connection", "Proactive maintenance", "Quick issue resolution"],
    icon: Globe,
    color: "from-green-500/20 to-green-500/5",
    image:"/uptime.png"
  },
  {
    id: 4,
    title: "Connecting You Across Kenya One Estate at A time",
    subtitle: "6+ expansion hubs across Kenya",
    description: "From busy cities to growing towns, Bonkelinks is expanding fast to bring reliable internet closer to you. No matter where you are, we're working to keep you connected.",
    highlights: ["Expanding network reach", "Coverage in key regions", "Easy installation process"],
    icon: Headphones,
    color: "from-purple-500/20 to-purple-500/5",
    image:"/coverage.png"
  }
];

export const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 10000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  return (
    <>
      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden flex items-center pt-18 md:pt-28 lg:pt-18 min-h-[100svh] md:min-h-[920px] lg:min-h-screen">
        {/* Carousel Slides Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={cn(
              "absolute inset-0 bg-gradient-to-br",
              carouselSlides[currentSlide].color
            )}
          />
        </AnimatePresence>

        {/* Image Placeholder */}
        <div className="absolute inset-0 bg-primary/50">
          <div className="relative h-full w-full overflow-hidden bg-linear-to-b from-primary/50 via-primary/30 to-primary/50">
            {carouselSlides.map((slide, idx) => (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-in-out will-change-[opacity]",
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                )}
                aria-hidden={idx !== currentSlide}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-center [transform:translateZ(0)]"
                  draggable={false}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-primary/40 pointer-events-none z-[1]"></div>
        
        <div className="relative z-[3] mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8">
          <div className="flex min-h-[calc(100svh-6rem)] flex-col items-center justify-center pb-28 pt-8 sm:pb-32 md:min-h-[760px] md:pb-36 md:pt-10 lg:min-h-[calc(100vh-8rem)] lg:pb-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={`slide-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl text-center"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-5 flex justify-center md:mb-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 sm:h-16 sm:w-16">
                    {React.createElement(carouselSlides[currentSlide].icon, {
                      className: "h-7 w-7 text-white sm:h-8 sm:w-8"
                    })}
                  </div>
                </motion.div>

                {/* Badge */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-[9px] font-bold tracking-[0.22em] text-white uppercase shadow-[0_0_20px_rgba(14,249,219,0.4)] sm:px-4 sm:text-[10px] md:mb-6"
                >
                  {carouselSlides[currentSlide].subtitle}
                </motion.span>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mb-4 text-4xl leading-[0.95] font-bold  text-white sm:text-5xl md:mb-6 md:text-6xl lg:mb-8 lg:text-6xl"
                >
                  {carouselSlides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mx-auto mb-6 max-w-[35rem] text-sm   text-slate-200 sm:max-w-xl sm:text-base md:mb-8 md:max-w-2xl md:text-lg lg:mb-10 lg:text-base"
                >
                  {carouselSlides[currentSlide].description}
                </motion.p>

                {/* Mini Highlights */}
                {carouselSlides[currentSlide].highlights && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.6 }}
                    className="mx-auto mb-8 flex flex-wrap justify-center gap-3 md:gap-4 md:mb-10"
                  >
                    {carouselSlides[currentSlide].highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-full odd:bg-white even:bg-primary px-4 py-2 text-xs font-semibold odd:text-primary even:text-white border border-white/20 backdrop-blur-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </motion.div>
                )}

                {/* CTA Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mx-auto mb-8 max-w-lg rounded-2xl border border-white/10 bg-white/8 p-4 shadow-2xl backdrop-blur-md sm:p-5 md:mb-10 md:p-6"
                >
                  <div className="mb-2 flex items-center gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent shadow-[0_0_15px_rgba(14,249,219,0.5)]">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-left text-sm font-bold text-white sm:text-base">Quick Connection Guide</h4>
                  </div>
                  <p className="text-sm leading-relaxed  text-slate-300">
                    Open WiFi & scan for <span className="text-accent font-bold">Bonkelinks Hotspot</span> to get connected instantly.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
                >
                  <button 
                    onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-accent px-6 py-4 text-center text-[11px] font-bold tracking-[0.18em] text-primary uppercase transition-all hover:brightness-110 shadow-[0_8px_30px_rgba(14,249,219,0.3)] sm:w-auto sm:px-8 sm:text-xs"
                  >
                    Connect Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => document.getElementById('coverage-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full rounded-md border border-white/20 px-6 py-4 text-center text-[11px] font-bold tracking-[0.18em] text-white uppercase backdrop-blur-sm transition-all hover:bg-white/5 sm:w-auto sm:px-8 sm:text-xs"
                  >
                    Check Coverage
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-4 md:bottom-12">
          <button
            onClick={() => {
              prevSlide();
              if (autoplayRef.current) clearInterval(autoplayRef.current);
              autoplayRef.current = setInterval(nextSlide, 10000);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 md:h-12 md:w-12"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-white md:h-6 md:w-6" />
          </button>
          <button
            onClick={() => {
              nextSlide();
              if (autoplayRef.current) clearInterval(autoplayRef.current);
              autoplayRef.current = setInterval(nextSlide, 10000);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30 md:h-12 md:w-12"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-white md:h-6 md:w-6" />
          </button>
        </div>
       
      </section>

      {/* Main Stats */}
      <section className="py-16 md:py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { val: "15k+", label: "Active Nodes", icon: Globe },
              { val: "99.9", label: "Percent Uptime", icon: CheckCircle2 },
              { val: "24/7", label: "Tech Support", icon: Headphones },
              { val: "1Gbps", label: "Max Speed", icon: Zap }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <StatCounter value={stat.val} />
                <p className="text-accent text-[10px] font-bold uppercase tracking-[0.25em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <CoverageSection />
      <TestimonialsSection />
    </>
  );
};
