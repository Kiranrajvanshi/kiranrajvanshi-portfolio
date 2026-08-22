import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, LayoutTemplate, Smartphone, Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICONS_MAP: Record<string, React.ElementType> = {
  Globe,
  LayoutTemplate,
  Smartphone,
  Cpu
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Specialized Skills &amp; Stack
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Practical hands-on capabilities across frontend interfaces, WordPress ecosystems, mobile apps, and automated workflows.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconComponent = ICONS_MAP[cat.iconName] || Globe;
            const isHovered = activeCategory === cat.category;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveCategory(cat.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`glass-panel rounded-2xl p-8 border transition-all duration-300 relative group overflow-hidden ${
                  isHovered
                    ? 'border-accent-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] -translate-y-1'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl group-hover:bg-accent-cyan/10 transition-colors pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 border border-white/15 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Tags List */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200 hover:border-accent-cyan/40 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all"
                    >
                      <CheckCircle2 className="w-3 h-3 text-accent-cyan/70" />
                      <span>{skill}</span>
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

export default Skills;
