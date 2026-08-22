import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Smartphone,
  ShieldCheck,
  Bot,
  Layers,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Github,
  CheckCircle2,
  X
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'project-1':
        return <Smartphone className="w-5 h-5 text-accent-rose" />;
      case 'project-2':
        return <Smartphone className="w-5 h-5 text-amber-400" />;
      case 'project-3':
        return <ShieldCheck className="w-5 h-5 text-accent-emerald" />;
      case 'project-4':
        return <Bot className="w-5 h-5 text-accent-cyan" />;
      default:
        return <Code className="w-5 h-5 text-accent-cyan" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Engineering &amp; Concept Showcase
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A curated selection of mobile applications, backend WordPress systems, and experimental AI automation tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const isCert = project.id === 'project-3';
            const isAgent = project.id === 'project-4';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`glass-panel rounded-3xl p-8 border transition-all duration-300 relative flex flex-col justify-between group ${
                  isAgent
                    ? 'border-accent-cyan/40 shadow-[0_0_40px_rgba(0,240,255,0.12)]'
                    : isCert
                    ? 'border-accent-emerald/40 shadow-[0_0_40px_rgba(16,185,129,0.1)]'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                {/* Visual Top Bar */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {getProjectIcon(project.id)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-accent-cyan">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Special Highlight Badges */}
                    {isAgent && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 animate-pulse">
                        Active Experiment
                      </span>
                    )}
                    {isCert && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30">
                        High Technical Depth
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6 p-4 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide block mb-1">
                      Technical Highlights:
                    </span>
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tech Stack & Quick Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 text-slate-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 rounded-xl text-xs font-semibold text-white glass-panel hover:bg-white/10 hover:border-accent-cyan/40 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Inspect System Details</span>
                    <ChevronRight className="w-4 h-4 text-accent-cyan group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl glass-panel-glow bg-background-secondary p-8 rounded-3xl border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-accent-cyan uppercase px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-3xl font-display font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                  Architecture &amp; Features
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white glass-panel hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
