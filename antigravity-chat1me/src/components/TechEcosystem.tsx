import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Sparkles } from 'lucide-react';
import { TECH_NODES } from '../data/portfolioData';
import TechEcosystem3D from './canvas/TechEcosystem3D';

export const TechEcosystem: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredNodes = TECH_NODES.filter(
    (node) => activeFilter === 'all' || node.category === activeFilter
  );

  return (
    <section className="py-20 relative overflow-hidden bg-background-secondary/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-mono tracking-widest uppercase mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>INTERACTIVE TECH GRAPH</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Connected Technology Ecosystem
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Rotate the 3D orbital space or select a technology node below to explore tools and frameworks.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['all', 'web', 'cms', 'app', 'ai'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase transition-all ${
                  activeFilter === cat
                    ? 'bg-accent-cyan text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat === 'all' ? 'All Tech' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Canvas on desktop/tablet */}
        <div className="hidden md:block mb-8">
          <TechEcosystem3D selectedTech={selectedTech} onSelectTech={setSelectedTech} />
        </div>

        {/* Interactive Tags Grid (Mobile primary & Desktop quick-select) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2.5">
          {filteredNodes.map((tech) => {
            const isSelected = selectedTech === tech.name;
            return (
              <motion.button
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTech(isSelected ? null : tech.name)}
                className={`p-3 rounded-xl text-xs font-mono text-center transition-all border ${
                  isSelected
                    ? 'bg-accent-cyan/20 border-accent-cyan text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'glass-panel border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-1.5"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="truncate block">{tech.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Info Toast */}
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-xl glass-panel-glow border border-accent-cyan/40 max-w-md mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 text-accent-cyan text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED: {selectedTech}</span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Actively integrated in real-world projects and client deployments.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default TechEcosystem;
