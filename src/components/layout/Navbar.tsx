'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { GithubLogoIcon, LinkedinLogoIcon, CpuIcon } from '@phosphor-icons/react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Appare dopo 100px per non coprire la Specs Bar della Hero
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#lavori' },
    { name: 'Contact', href: '#footer' }, 
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -20, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: -20, x: "-50%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-1/2 z-100 flex justify-center pointer-events-none w-[95%] max-w-fit"
        >
          <div className="pointer-events-auto flex items-center gap-4 md:gap-6 px-4 md:px-6 py-2.5 rounded-full bg-[#030014]/70 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)] relative overflow-hidden group">
            
            {/* Glossy Overlay: un riflesso interno che la rende premium */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

            {/* Brand / System Status */}
            <div className="flex items-center gap-2 pr-3 md:pr-4 border-r border-white/10 relative z-10">
              <CpuIcon size={14} weight="thin" className="text-blue-500 animate-pulse" />
              <span className="text-[9px] font-mono text-white/60 uppercase tracking-[0.2em] hidden sm:block">Stefania_D</span>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center gap-4 md:gap-8 relative z-10">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-blue-400 transition-colors font-semibold"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Social & Action */}
            <div className="flex items-center gap-3 pl-3 md:pl-4 border-l border-white/10 relative z-10">
              <a 
                href="https://github.com/darkmindy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-all hover:scale-110"
              >
                <GithubLogoIcon size={18} weight="thin" />
              </a>
              <a 
                href="https://www.linkedin.com/in/stefania-deliso-developer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-blue-500 transition-all hover:scale-110"
              >
                <LinkedinLogoIcon size={18} weight="thin" />
              </a>
              <div className="h-1 w-1 rounded-full bg-blue-500 ml-1 animate-ping" />
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}