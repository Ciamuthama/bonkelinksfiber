import { motion } from 'motion/react';
import React from 'react';
import { DollarSign, Zap, MessageCircle, Wifi, Globe, Building2 } from 'lucide-react';
import { slideInLeftVariants, slideInRightVariants, staggerContainerVariants, staggerItemVariants, fadeInUpVariants } from '../lib/animations';

export const AboutSection = () => {
  return (
    <section className="min-h-screen bg-surface">
      <div className="relative h-[60vh] bg-primary overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Digital Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7 }}
             className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none"
          >
            Bonkelinks: <br />
            <span className="text-accent">Beyond Bandwidth</span>
          </motion.h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* About Bonkelinks Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeftVariants}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">About Bonkelinks</h2>
          <p className="text-xl lg:text-3xl font-semibold text-accent mb-8">Connecting People. Empowering Possibilities.</p>
          <div className="space-y-6">
            <p className="lg:text-lg text-secondary leading-relaxed ">
              At Bonkelinks, we believe internet access should be fast, reliable, and affordable. We are committed to connecting homes, businesses, and communities, especially in marginalized areas, with quality internet solutions designed to keep people productive, informed, and connected.
            </p>
            <p className="lg:text-lg text-secondary leading-relaxed ">
              From everyday browsing and streaming to powering businesses and remote work, our mission is simple: deliver dependable connectivity that people can trust.
            </p>
          </div>
        </motion.div>

        {/* Who We Are Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRightVariants}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-8 underline decoration-accent/30 underline-offset-8">Who We Are</h3>
          <div className="space-y-6">
            <p className="lg:text-lg text-secondary leading-relaxed ">
              Bonkelinks is a growing Internet Service Provider, that stemmed from a visionary to the business it is today. We are focused on providing customer-centered connectivity solutions. We combine strong network performance, responsive support, and affordable service options to meet the needs of both individuals and businesses.
            </p>
            <p className="lg:text-lg text-secondary leading-relaxed ">
              Whether through dedicated internet packages or hotspot access, we make staying online easier and more accessible.
            </p>
          </div>
        </motion.div>

        {/* What We Stand For Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeftVariants}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-12 underline decoration-accent/30 underline-offset-8">What We Stand For</h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainerVariants}
          >
            {[
              { 
                title: 'Speed That Keeps You Moving', 
                desc: 'We deliver high-performance internet designed for modern digital needs — from work and learning to entertainment.',
                icon: Zap 
              },
              { 
                title: 'Reliability You Can Count On', 
                desc: 'With 99.9% uptime, we prioritize network stability so our customers stay connected when it matters most.',
                icon: Wifi 
              },
              { 
                title: 'Affordable Access for Everyone', 
                desc: 'We believe quality internet should not be out of reach. That\'s why we offer flexible solutions for different budgets.',
                icon: DollarSign 
              },
              { 
                title: 'Expanding Coverage', 
                desc: 'We are continuously growing our reach to connect more people across Kenya and beyond.',
                icon: Globe 
              },
            ].map((item) => (
              <motion.div key={item.title} variants={staggerItemVariants} className="flex gap-6 group">
                <div className="lg:w-16 lg:h-16 w-10 h-10 bg-surface-container rounded-2xl flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  <item.icon className="lg:w-8 lg:h-8 w-4 h-4 text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary lg:text-xl text-lg mb-2">{item.title}</h4>
                  <p className="text-secondary lg:text-base text-sm leading-relaxed ">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Our Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6 underline decoration-accent/30 underline-offset-8">Our Mission</h3>
            <p className="lg:text-lg text-secondary leading-relaxed ">
              To provide reliable, affordable, and accessible internet solutions that empower individuals, businesses, and communities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRightVariants}
          >
            <h3 className="lg:text-3xl text-2xl font-bold text-primary mb-6 underline decoration-accent/30 underline-offset-8">Our Vision</h3>
            <p className="lg:text-lg text-secondary leading-relaxed ">
              To be a trusted connectivity partner and a leading provider of innovative internet solutions across Kenya and beyond.
            </p>
          </motion.div>
        </div>

        {/* Why Customers Choose Bonkelinks Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeftVariants}
          className="mb-20"
        >
          <h3 className="lg:text-3xl text-2xl font-bold text-primary mb-8 underline decoration-accent/30 underline-offset-8">Why Customers Choose Bonkelinks</h3>
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainerVariants}
          >
            {[
              'Fast and dependable internet services',
              'Affordable packages and hotspot options',
              'Responsive customer support',
              'Quick installation and setup',
              'Solutions for both homes and businesses',
            ].map((reason, index) => (
              <motion.div 
                key={index}
                variants={staggerItemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="lg:w-8 lg:h-8 w-6 h-6 bg-accent rounded-full flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <span className="text-primary font-bold text-sm">✓</span>
                </div>
                <p className="lg:text-lg text-secondary leading-relaxed ">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* More Than an ISP Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRightVariants}
          className="mb-20 bg-surface-container rounded-2xl p-8 md:p-12"
        >
          <h3 className="lg:text-3xl text-2xl font-bold text-primary mb-8 underline decoration-accent/30 underline-offset-8">More Than an ISP</h3>
          <div className="space-y-6">
            <p className="lg:text-lg text-secondary leading-relaxed ">
              At Bonkelinks, we see ourselves as more than a service provider — we are a partner in helping people work smarter, learn better, and stay connected to what matters most.
            </p>
            <p className="lg:text-lg text-secondary leading-relaxed ">
              As technology evolves, we remain focused on building stronger networks, improving customer experience, and expanding access for more communities.
            </p>
          </div>
        </motion.div>

        {/* Join the Network CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeftVariants}
          className="text-center"
        >
          <h3 className="lg:text-3xl md:text-2xl text-2xl font-bold text-primary mb-6">Join the Bonkelinks Network</h3>
          <p className="lg:text-lg text-secondary leading-relaxed  mb-10 max-w-2xl mx-auto">
            Whether you need home internet, business connectivity, or affordable hotspot access, Bonkelinks is ready to connect you. Experience internet built for speed, reliability, and value.
          </p>
          
          <a href='tel:+254791198551'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-primary font-bold lg:text-lg rounded-xl hover:shadow-lg transition-shadow duration-300 "
            >
            Get Connected Today
          </motion.button>
            </a>
        </motion.div>
      </div>
    </section>
  );
};
