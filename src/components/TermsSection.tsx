import React from 'react';

export const TermsSection = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <header className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter mb-6">Terms of <span className="text-accent underline decoration-accent/30">Service.</span></h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Last Updated: April 20, 2026</p>
        </header>

        <div className="prose prose-slate max-w-none space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary tracking-tight">1. Acceptance of Terms</h3>
            <p className="text-secondary leading-relaxed ">
              By accessing or using Bonkelinks services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services. We provide high-speed connectivity specifically designed for Nairobi's high-density corridors.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary tracking-tight">2. Service Provision</h3>
            <p className="text-secondary leading-relaxed ">
              Bonkelinks provides internet connectivity through Hotspot nodes and Home Fiber (where applicable). While we strive for 99.9% uptime, services are provided "as is" and "as available". We reserve the right to modify, suspend, or discontinue any part of the service at any time.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary tracking-tight">3. User Responsibilities</h3>
            <p className="text-secondary leading-relaxed ">
              Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree not to use the service for any illegal purposes or in a way that interferes with the performance of the network.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary tracking-tight">4. Payment and Subscriptions</h3>
            <p className="text-secondary leading-relaxed ">
              Access to our premium network is based on pre-paid packages (1 hour, 12 hours, 24 hours, Weekly, and Monthly). All payments are final and non-refundable unless otherwise specified by local consumer protection laws.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary tracking-tight">5. Limitation of Liability</h3>
            <p className="text-secondary leading-relaxed ">
              Bonkelinks shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </div>

          <div className="pt-12 border-t border-slate-100 italic text-slate-400 text-sm">
            Contact us at <span className="text-primary font-bold">bonkelinks16@gmail.com</span> for any questions regarding these terms.
          </div>
        </div>
      </div>
    </section>
  );
};
