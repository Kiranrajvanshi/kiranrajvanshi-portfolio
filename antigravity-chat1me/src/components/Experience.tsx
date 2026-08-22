import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono tracking-widest uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Internship &amp; Development Experience
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Structured development roles and practical software engineering internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-blue opacity-40 -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-accent-cyan flex items-center justify-center z-20 group-hover:scale-125 group-hover:border-accent-violet group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan group-hover:bg-accent-violet transition-colors" />
                  </div>

                  {/* Empty spacer on opposite side for desktop layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div
                      className={`glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-accent-cyan/40 transition-all duration-300 relative overflow-hidden ${
                        isEven ? 'sm:mr-6' : 'sm:ml-6'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-accent-cyan text-xs font-mono">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="font-semibold">{item.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                          <Calendar className="w-3 h-3 text-accent-violet" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                        {item.role}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                          >
                            <CheckCircle2 className="w-3 h-3 text-accent-cyan/70" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
