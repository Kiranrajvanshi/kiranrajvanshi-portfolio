import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Globe, Smartphone, Bot, Check, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background-secondary/50 border-t border-white/5">
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono tracking-widest uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT KIRAN</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {PERSONAL_INFO.aboutHeading}
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Story and Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((p, idx) => (
                <p key={idx} className="font-light">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center shrink-0 text-accent-cyan">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Client Web Solutions</h3>
                  <p className="text-xs text-slate-400 mt-0.5">WordPress themes, custom CPTs, and responsive landing pages.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-violet/10 border border-accent-violet/30 flex items-center justify-center shrink-0 text-accent-violet">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Mobile Applications</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Java Android &amp; Flutter apps with clean XML/UI design.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-emerald/10 border border-accent-emerald/30 flex items-center justify-center shrink-0 text-accent-emerald">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">AI Automation</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Gemini API, Playwright, Chrome CDP &amp; developer agents.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center shrink-0 text-accent-blue">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Pragmatic Execution</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Reliable code delivered on time without bloated overhead.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Dev Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel-glow rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-background-secondary/90">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-background/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-accent-cyan" />
                  <span>kiran@rajvanshi:~</span>
                </div>
                <div className="text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">
                  READY
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs space-y-4 text-slate-300">
                <div className="space-y-1">
                  <span className="text-accent-violet">❯</span> <span className="text-slate-400">cat profile.config.json</span>
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 space-y-1 text-[11px] leading-relaxed">
                    <p><span className="text-accent-cyan">"name"</span>: <span className="text-emerald-300">"Kiran Rajvanshi"</span>,</p>
                    <p><span className="text-accent-cyan">"roles"</span>: [<span className="text-amber-300">"Web"</span>, <span className="text-amber-300">"WordPress"</span>, <span className="text-amber-300">"App"</span>, <span className="text-amber-300">"AI"</span>],</p>
                    <p><span className="text-accent-cyan">"mindset"</span>: <span className="text-emerald-300">"Build things that actually work"</span>,</p>
                    <p><span className="text-accent-cyan">"status"</span>: <span className="text-emerald-300">"Available for client &amp; dev projects"</span></p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-accent-cyan">❯</span> <span>stack --capabilities</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-accent-emerald" />
                      <span>Custom WP Plugins</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-accent-emerald" />
                      <span>Playwright Automation</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-accent-emerald" />
                      <span>Gemini API Integration</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-accent-emerald" />
                      <span>Android Java / XML</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-accent-cyan">
                  <span className="animate-pulse">❯</span>
                  <span className="typing-cursor">Ready to collaborate on high-impact projects_</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
