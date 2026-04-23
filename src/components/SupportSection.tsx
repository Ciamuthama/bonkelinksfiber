import { motion } from 'motion/react';
import React, { useState, FormEvent } from 'react';
import { Phone, Mail, CheckCircle2, Loader2, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { slideInLeftVariants, slideInRightVariants, staggerContainerVariants, staggerItemVariants, fadeInUpVariants } from '../lib/animations';

export const SupportSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const message = `Hello Bonkelinks! 👋%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Subject:* ${data.subject}%0A*Message:* ${data.message}`;
    
    // Using the phone number from the contact section: +254 791 198 551
    window.open(`https://wa.me/254791198551?text=${message}`, '_blank');
    
    setFormStatus('success');
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section className="min-h-screen overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-6 md:mb-8 leading-none">
              Let's <span className="text-accent underline decoration-accent/30">Talk.</span>
            </h2>
            <p className="text-slate-800 text-lg leading-relaxed mb-8 md:mb-12 max-w-md ">
              Whether it's technical troubleshooting or a new connection request, our team is standing by to keep you online 24/7.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <motion.a 
                variants={staggerItemVariants}
                href="tel:0791198551" 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group p-6 rounded-xl bg-primary border border-black/10 hover:bg-primary/80 transition-all"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Call Support (24/7)</p>
                  <p className="text-lg md:text-2xl font-semibold text-white tracking-wider">+254 718 176 143</p>
                  <p className="text-lg md:text-2xl font-semibold text-white tracking-wider">+254 791 198 551</p>
                </div>
                <ChevronRight className="hidden sm:block w-6 h-6 text-white ml-auto opacity-0 group-hover:opacity-100 transition-all" />
              </motion.a>
              
              <motion.div 
                variants={staggerItemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-xl bg-accent border border-white/10"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <div className="overflow-hidden w-full">
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Email Our Team</p>
                  <p className="text-lg md:text-2xl font-semibold text-white tracking-wider break-all md:break-normal">support@bonkelinksfiber.co.ke</p>
                </div>
              </motion.div>

              <motion.div 
                variants={staggerItemVariants}
                className="p-6 rounded-xl bg-primary border border-white/10 space-y-4"
              >
                <div>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">Headquarters</p>
                  <p className="text-white font-semibold leading-relaxed">Cannon Plaza, Along Outering Road, Nairobi, Kenya</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Working Hours</p>
                  <p className="text-slate-300 text-sm ">Monday - Saturday: 8:00 am to 5:00 pm</p>
                  <p className="text-slate-300 text-sm ">Support: 24/7</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRightVariants}
            className="p-8 md:p-12 bg-primary border border-primary/10 rounded-2xl backdrop-blur-md shadow-2xl"
            >
            <h3 className="text-2xl font-semibold text-white mb-8 underline decoration-accent/30 underline-offset-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                <input name="name" required type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm text-white focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                <input name="email" required type="email" placeholder="bonkelinks16@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm text-white focus:outline-none focus:border-accent transition-colors" />
              </div>
              </div>
              <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
              <input name="subject" required type="text" placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm text-white focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
              <textarea name="message" required rows={4} placeholder="Detailed description..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-sm text-white focus:outline-none focus:border-accent resize-none transition-colors"></textarea>
              </div>
              
              {formStatus === 'success' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-accent/20 border border-accent/40 rounded-lg text-accent text-sm font-bold flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5" />
                Message sent successfully! We'll get back to you soon.
              </motion.div>
              )}

              {formStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-lg text-red-500 text-sm font-bold">
                Something went wrong. Please try again or call us directly.
              </div>
              )}

              <button 
                disabled={formStatus === 'submitting'}
                className={cn(
                  "w-full bg-accent text-primary font-bold uppercase text-xs tracking-[0.2em] py-5 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_8px_30px_rgba(14,249,219,0.3)] flex items-center justify-center gap-3",
                  formStatus === 'submitting' && "opacity-70 cursor-not-allowed"
                )}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : 'Get Connected Today'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
