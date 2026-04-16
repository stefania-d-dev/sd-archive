'use client';

import { motion } from 'framer-motion';

const toolsTop = [
  "Figma", "React", "Next.js", "TypeScript", "AI Implementation", "SaaS Dashboarding", "B2B Strategy"
];

const toolsBottom = [
  "Tailwind CSS", "Framer Motion", "Problem Solving", "Hardware Troubleshooting", "WordPress Expert", "HTML5", "UI/UX Engineering"
];

export default function TechMarquee() {
  return (
    <div className="relative py-20 bg-[#030014] overflow-hidden flex flex-col gap-8 -rotate-1 scale-105 border-y border-white/5">
      {/* Gradienti laterali potenziati */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-[#030014] to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-[#030014] to-transparent z-20" />

      {/* Prima Corsia: Verso Sinistra - Testo Pieno */}
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "linear" 
          }}
        >
          {[...toolsTop, ...toolsTop].map((tool, index) => (
            <span 
              key={index} 
              className="text-white/10 text-4xl md:text-7xl font-black uppercase tracking-tighter hover:text-blue-500 transition-colors duration-500 flex items-center gap-12 cursor-default select-none"
            >
              {tool} 
              <span className="text-blue-500/40 text-3xl">/</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Seconda Corsia: Verso Destra - Testo Outline */}
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 items-center"
          animate={{ x: [-1000, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 35, // Velocità diversa per un effetto più organico
            ease: "linear" 
          }}
        >
          {[...toolsBottom, ...toolsBottom].map((tool, index) => (
            <span 
              key={index} 
              className="text-transparent font-black uppercase tracking-tighter text-4xl md:text-7xl flex items-center gap-12 cursor-default select-none transition-all duration-500 hover:text-white/20"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}
            >
              {tool} 
              <span className="text-white/5 text-2xl font-light">#</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Overlay di disturbo opzionale per il look Cyber */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>
  );
}