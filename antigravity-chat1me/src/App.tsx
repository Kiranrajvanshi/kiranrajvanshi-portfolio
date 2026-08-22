import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechEcosystem from './components/TechEcosystem';
import Experience from './components/Experience';
import ClientWork from './components/ClientWork';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

export const App: React.FC = () => {
  return (
    <div className="relative bg-background text-slate-100 min-h-screen selection:bg-accent-cyan/30 selection:text-white">
      {/* Interactive Micro-Elements */}
      <CustomCursor />
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <About />
        <Skills />
        <TechEcosystem />
        <Experience />
        <ClientWork />
        <Projects />
        <Services />
        <WhyWorkWithMe />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
