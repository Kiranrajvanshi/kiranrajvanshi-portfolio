import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = () => {
    // FormSubmit handles the POST directly; no client-side interception.
    setSending(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background-secondary/70 border-t border-white/5">
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent-violet/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-4"><Sparkles className="w-3.5 h-3.5" /><span>START A CONVERSATION</span></div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">Have Something <br className="hidden sm:inline" /><span className="text-gradient-cyan">Worth Building?</span></h2>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">Let's turn the idea into something useful, functional, and beautifully built.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-6">
              <div><span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">Direct Email</span><div className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-white/5 border border-white/10"><div className="flex items-center gap-2.5 overflow-hidden"><Mail className="w-4 h-4 text-accent-cyan shrink-0" /><span className="text-xs sm:text-sm font-mono text-white truncate">{PERSONAL_INFO.socials.email}</span></div><button onClick={handleCopyEmail} type="button" className="p-2 rounded-lg bg-white/5 hover:bg-accent-cyan/20 text-slate-300 hover:text-accent-cyan transition-all shrink-0" title="Copy email to clipboard" aria-label="Copy email">{copied ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4" />}</button></div></div>
              <div><span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">Connect &amp; Follow</span><div className="grid grid-cols-2 gap-3"><a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3.5 rounded-xl glass-panel hover:bg-white/10 hover:border-accent-cyan/40 transition-all text-xs font-medium text-white"><Github className="w-4 h-4 text-slate-300" /><span>GitHub</span></a><a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3.5 rounded-xl glass-panel hover:bg-white/10 hover:border-accent-cyan/40 transition-all text-xs font-medium text-white"><Linkedin className="w-4 h-4 text-accent-blue" /><span>LinkedIn</span></a></div></div>
              <div className="pt-4 border-t border-white/5 space-y-2 text-xs text-slate-400"><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" /><span>{PERSONAL_INFO.status}</span></div><div>{PERSONAL_INFO.location}</div></div>
            </div>
            <a href="#projects" className="w-full py-3.5 px-6 rounded-2xl glass-panel hover:bg-white/10 flex items-center justify-between text-xs font-semibold text-white group"><span>Explore My Featured Projects</span><ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" /></a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-7">
            <div className="glass-panel-glow p-8 rounded-3xl border border-white/15 shadow-2xl relative bg-background-secondary/90">
              {submitted ? (
                <div className="py-12 text-center space-y-4"><div className="w-16 h-16 rounded-full bg-accent-emerald/20 border border-accent-emerald/40 flex items-center justify-center mx-auto text-accent-emerald"><Check className="w-8 h-8" /></div><h3 className="text-2xl font-display font-bold text-white">Message Sent!</h3><p className="text-slate-300 text-sm max-w-sm mx-auto">Thanks for reaching out. Your message has been sent to my email.</p></div>
              ) : (
                <form onSubmit={handleSubmit} name="contact" action="https://formsubmit.co/410dcda9b23480c7e90b3fde8ffebc3b" method="POST" className="space-y-4">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://kiranrajvanshi-portfolio.vercel.app/#contact" />
                  <input type="hidden" name="_subject" value={`Portfolio Contact: ${formState.subject}`} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">Your Name</label><input type="text" name="name" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} placeholder="Alex Parker" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan placeholder:text-slate-600 transition-colors" /></div>
                    <div><label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">Your Email</label><input type="email" name="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} placeholder="alex@company.com" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan placeholder:text-slate-600 transition-colors" /></div>
                  </div>
                  <div><label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">Subject / Project Scope</label><input type="text" name="subject" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} placeholder="WordPress customization / Web App / AI Workflow" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan placeholder:text-slate-600 transition-colors" /></div>
                  <div><label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">Message</label><textarea name="message" rows={4} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} placeholder="Tell me a bit about the requirements, goals, or timeline..." className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan placeholder:text-slate-600 transition-colors resize-none" /></div>
                  <button type="submit" disabled={sending} className="w-full py-4 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-accent-cyan via-white to-accent-cyan hover:opacity-95 active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-wait"><span>{sending ? 'Sending...' : 'Send Message'}</span><Send className="w-4 h-4" /></button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
