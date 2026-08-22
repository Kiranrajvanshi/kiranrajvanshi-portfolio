import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Code, Palette, Smartphone, Bot, Sparkles, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  LayoutTemplate,
  Code,
  Palette,
  Smartphone,
  Bot
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background-secondary/40 border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS &amp; CAPABILITIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            What I Can Build
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            High-utility services tailored for businesses, founders, and teams seeking reliable implementation.
          </p>
        </div>

        {/* Services Grid (3 + 2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = SERVICE_ICONS[service.iconName] || Code;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/15 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    {service.highlight && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold text-accent-cyan group-hover:text-white transition-colors"
                  >
                    <span>Discuss Project</span>
                    <span className="ml-1 text-base leading-none">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
