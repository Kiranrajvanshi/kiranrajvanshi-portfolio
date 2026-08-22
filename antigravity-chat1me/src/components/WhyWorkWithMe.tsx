import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layers, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

const WHY_ICONS: Record<string, React.ElementType> = {
  CheckCircle2,
  Layers,
  Users,
  TrendingUp
};

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Why Work With Me
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A pragmatic engineering mindset centered on clarity, collaboration, and dependable delivery.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => {
            const Icon = WHY_ICONS[item.iconName] || CheckCircle2;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 relative group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan mb-5 group-hover:scale-110 group-hover:bg-accent-cyan/10 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithMe;
