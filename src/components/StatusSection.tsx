import { motion } from "motion/react";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from "../lib/animations";

export const StatusSection = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <motion.header 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl font-bold text-primary tracking-tighter mb-4">
            Network Status
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(14,249,219,0.8)]" />
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              All Systems Operational
            </span>
          </div>
        </motion.header>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20"
        >
          {[
            {
              label: "Network Latency",
              value: "18ms",
              desc: "Average response time",
            },
            {
              label: "Uptime (30d)",
              value: "99.98%",
              desc: "Sustained availability",
            },
            {
              label: "Packet Loss",
              value: "0.01%",
              desc: "Minimal data drops",
            },
          ].map((metric) => (
            <div
          
        
              key={metric.label}
              className="p-6 md:p-8 bg-surface-container rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-accent/40 group"
            >
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 group-hover:text-accent transition-colors">
                {metric.label}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-secondary ">
                {metric.desc}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-primary underline decoration-accent/30 underline-offset-8">
              Active Incidents
            </h3>
            <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center py-16">
              <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
              <p className="font-bold text-primary">
                No active incidents reported.
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Our nodes are healthy across all Nairobi and Kisumu clusters.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-bold text-primary underline decoration-accent/30 underline-offset-8">
              Planned Maintenance
            </h3>
            <div className="space-y-4 ">
              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center py-16">
              <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
                <p className="font-bold text-primary">
                  No planned maintenance scheduled.
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  We perform regular maintenance during off-peak hours to minimize disruption.
                </p>
              </div>
            </div>
               
          </div>
        </motion.div>
      </div>
    </section>
  );
};
