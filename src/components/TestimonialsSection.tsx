import { motion } from 'motion/react';
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { staggerContainerVariants, staggerItemVariants, fadeInUpVariants } from '../lib/animations';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Bonkelinks transformed how I work from Dandora. The connection is rock solid and perfect for my freelance graphic design business.",
      author: "Kevin Omari",
      location: "Dandora Phase 4",
      image: "https://picsum.photos/seed/kevin/200/200"
    },
    {
      quote: "The hotspot speed in Umoja is incredible. I can actually stream educational content for my students without any buffering.",
      author: "Mercy Wanjiku",
      location: "Umoja Estate",
      image: "https://picsum.photos/seed/mercy/200/200"
    },
    {
      quote: "Found the signal coverage in Ahero to be surprisingly strong. Highly recommend for anyone needing consistent internet in Kisumu.",
      author: "Peter Otieno",
      location: "Ahero Hub",
      image: "https://picsum.photos/seed/peter/200/200"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-primary mb-4 md:mb-6">User Experiences</h2>
          <p className="text-secondary text-lg uppercase tracking-[0.3em] ">Stories from the Network</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={staggerItemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-2 w-8 h-8 text-slate-100 -z-10 group-hover:text-accent/10 transition-colors" />
                  <p className="text-slate-600  leading-relaxed italic">"{t.quote}"</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary tracking-tight">{t.author}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
