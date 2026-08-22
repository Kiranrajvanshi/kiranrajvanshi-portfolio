import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Bot, Layers, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Hero3DCanvas from './canvas/Hero3DCanvas';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [imgSrc, setImgSrc] = useState('/assets/profile.jpg');
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize coordinates -1 to 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden ambient-bg bg-grid-pattern"
    >
      {/* 3D WebGL Background Scene */}
      <Hero3DCanvas mousePosition={mousePos} isMobile={isMobile} />

      {/* Atmospheric Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent-violet/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span>{PERSONAL_INFO.heroLabel}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-6">
              Building Digital <br className="hidden sm:inline" />
              <span className="text-gradient-cyan">Experiences</span> With <br className="hidden sm:inline" />
              <span className="text-gradient-violet">Code &amp; Creativity.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {PERSONAL_INFO.heroSubheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm text-slate-950 bg-gradient-to-r from-accent-cyan via-white to-accent-cyan hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm text-white glass-panel hover:bg-white/10 hover:border-accent-violet/50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Let's Connect</span>
                <Sparkles className="w-4 h-4 text-accent-violet group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Tech Badges Mini-Row */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent-cyan" />
                <span>Web &amp; WordPress</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-violet" />
                <span>Android &amp; Flutter</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-accent-emerald" />
                <span>AI &amp; Automation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Holographic Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[360px] sm:max-w-[390px] aspect-[4/5] rounded-3xl p-[2px] bg-gradient-to-b from-accent-cyan/40 via-accent-violet/30 to-transparent shadow-[0_0_50px_rgba(0,240,255,0.15)] group"
              style={{
                transform: !isMobile ? `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)` : 'none',
                transition: 'transform 0.15s ease-out',
              }}
            >
              {/* Card Outer Glass Shell */}
              <div className="w-full h-full rounded-[22px] bg-background-secondary/90 backdrop-blur-xl border border-white/10 overflow-hidden relative flex flex-col justify-end p-6">
                
                {/* Background Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-accent-cyan/10 opacity-70" />
                
                {/* Profile Portrait Image / Holographic Display */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={imgSrc}
                    onError={() => setImgSrc('/assets/profile.svg')}
                    alt="Kiran Rajvanshi - Web, App & AI Developer"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                  />
                  {/* Subtle Scanline / Cyber overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge Top Right */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="glass-panel px-3 py-1.5 rounded-full border border-accent-emerald/40 flex items-center gap-2 shadow-lg backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
                    </span>
                    <span className="text-[11px] font-medium text-emerald-300">Open to Work</span>
                  </div>
                </div>

                {/* Floating Hologram Chip Top Left */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="glass-panel px-3 py-1 rounded-lg border border-accent-cyan/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-accent-cyan" />
                    <span className="text-[10px] font-mono text-accent-cyan uppercase">KR • Dev</span>
                  </div>
                </div>

                {/* Bottom Overlay Info Banner */}
                <div className="relative z-20 glass-panel-glow p-4 rounded-2xl border border-white/15 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-base font-display font-bold text-white tracking-wide">
                      {PERSONAL_INFO.name}
                    </h2>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-violet/20 text-accent-violet border border-accent-violet/30">
                      Full-Cycle
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-1 mb-2 font-mono">
                    Web • WordPress • App • AI Automation
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Real-world client solutions</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
