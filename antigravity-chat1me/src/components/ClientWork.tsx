import React from 'react';
import { motion } from 'framer-motion';
import { Building, Layers, CheckCircle2, Server, Globe2, Sparkles } from 'lucide-react';
import { CLIENT_WORK_ITEMS } from '../data/portfolioData';

export const ClientWork: React.FC = () => {
  return (
    <section id="client-work" className="py-24 relative overflow-hidden bg-background-secondary/40 border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-xs font-mono tracking-widest uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>COMMERCIAL DELIVERABLES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Real-World Work
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Client websites, business portals, custom WordPress implementations, and infrastructure hosting landing pages.
          </p>
        </div>

        {/* Client Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_WORK_ITEMS.map((item, idx) => {
            const isHosting = item.id === 'client-4';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Top Category Pill & Client Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-1 rounded-full border border-accent-cyan/20 uppercase">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mt-2 group-hover:text-accent-cyan transition-colors">
                        {item.client}
                      </h3>
                      <p className="text-xs text-accent-violet font-mono mt-0.5">
                        {item.role}
                      </p>
                    </div>
                    
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-all shrink-0">
                      {isHosting ? <Server className="w-5 h-5" /> : <Building className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Key Highlights &amp; Deliverables:
                    </span>
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ClientWork;
