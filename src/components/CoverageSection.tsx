import { motion } from 'motion/react';
import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { staggerContainerVariants, staggerItemVariants, fadeInUpVariants } from '../lib/animations';

export const CoverageSection = ({ staggered = true }: { staggered?: boolean }) => {
  const coverageAreas = [
    { name: 'Dandora', status: 'Active', signal: 'Excellent', hub: 'Nairobi Cluster 01' },
    { name: 'Umoja', status: 'Active', signal: 'Strong', hub: 'Nairobi Cluster 02' },
    { name: 'Kariobangi', status: 'Active', signal: 'Excellent', hub: 'Nairobi Cluster 03' },
    { name: 'Outering Road', status: 'In Progress', signal: 'Good', hub: 'Nairobi Cluster 04' },
    { name: 'Awasi', status: 'Active', signal: 'Strong', hub: 'Kisumu Cluster 01' },
    { name: 'Ahero', status: 'Active', signal: 'Excellent', hub: 'Kisumu Cluster 02' }
  ];

  return (
    <section id="coverage-section" className="overflow-hidden mt-12 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl font-bold text-primary tracking-tighter mb-4">Live Network Coverage</h2>
          <p className="text-slate-700 text-lg uppercase tracking-[0.3em] ">Kenya Expansion Hubs</p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coverageAreas.map((area) => (
            <motion.div 
              key={area.name}
              variants={staggerItemVariants}
              className="bg-primary border border-white/10 p-8 rounded-xl backdrop-blur-md flex flex-col justify-between group hover:bg-surface-container transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:text-primary",
                    area.status === 'Active' ? "bg-accent text-primary" : "bg-white/10 text-white"
                  )}>
                    {area.status}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary">{area.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{area.hub}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500  tracking-tight group-hover:text-primary">Signal Stability</span>
                    <span className="text-accent font-bold">{area.signal}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full",
                        area.signal === 'Excellent' ? "w-[95%] bg-accent" : "w-[80%] bg-accent/60"
                      )} 
                    />
                  </div>
                </div>
              </div>

              <a 
                href="tel:0791198551"
                className="w-full py-3 bg-accent text-primary text-center font-bold text-xs uppercase tracking-widest rounded-lg hover:brightness-110 flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(14,249,219,0.2)]"
              >
                <Phone className="w-4 h-4" />
                Connect to Node
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
