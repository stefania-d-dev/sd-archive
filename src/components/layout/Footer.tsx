'use client';

import { motion } from 'framer-motion';
import { GithubLogoIcon, LinkedinLogoIcon, ArrowUpRightIcon, GlobeSimpleIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react';

export default function Footer() {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/stefania-deliso-developer/', icon: <LinkedinLogoIcon weight="thin" size={20} /> },
    { name: 'GitHub', url: 'https://github.com/darkmindy', icon: <GithubLogoIcon weight="thin" size={20} /> },
  ];

  return (
    <footer id="footer" className="relative bg-[#030014] pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/10 overflow-hidden scroll-mt-20">
      
      {/* Background Effect - Un bagliore che sale dal fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-75 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-12"
          >
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] uppercase text-white italic">
              Prossimo<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-200 not-italic">Step?</span>
            </h2>
            
            <div className="group relative inline-block w-full md:w-auto">
              <a 
                href="mailto:stefania.devgdi@gmail.com" 
                className="text-xl md:text-4xl text-white/90 font-medium flex items-center gap-4 md:gap-8 hover:text-white transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <EnvelopeSimpleIcon size={32} weight="thin" className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="break-all font-light tracking-tight border-b border-white/10 pb-2 group-hover:border-blue-500 transition-colors">
                  stefania.devgdi@gmail.com
                </span>
                <ArrowUpRightIcon size={24} weight="bold" className="text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Sidebar Connectivity */}
          <div className="lg:col-span-5">
            <div className="bg-white/2 border border-white/5 rounded-[2.5rem] p-8 md:p-10 space-y-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <GlobeSimpleIcon size={80} weight="thin" />
              </div>

              <div className="relative z-10">
                <p className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
                  <span className="w-8 h-px bg-blue-500/30" />
                  03_Network & Connectivity
                </p>
                
                <div className="space-y-3">
                  {socials.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/4 hover:border-blue-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-white/40 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300">
                          {social.icon}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-mono group-hover:text-white transition-colors">
                          {social.name}
                        </span>
                      </div>
                      <ArrowUpRightIcon size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-blue-500" />
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] pt-8 mt-4 border-t border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>Sicily / Remote / Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 md:mt-48 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
          <div className="flex items-center gap-4">
            <p>© 2026 Stefania Deliso</p>
            <span className="text-white/5">|</span>
            <p className="hover:text-blue-500/50 transition-colors cursor-help">Local Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {['React', 'TypeScript', 'Tailwind'].map(tech => (
              <span key={tech} className="flex items-center gap-2 tracking-[0.4em] group cursor-default">
                <div className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-[3] group-hover:shadow-[0_0_8px_#3b82f6] transition-all" /> 
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}