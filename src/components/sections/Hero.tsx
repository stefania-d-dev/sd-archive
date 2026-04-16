'use client';

import { motion } from 'framer-motion';
import { CpuIcon, PaintBrushIcon, CodeIcon, CaretRightIcon } from '@phosphor-icons/react';
import chibiDevImg from './../../assets/stickers/ste_dev.webp';
import chibiDesignImg from './../../assets/stickers/ste_des.webp';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#030014] text-white flex flex-col border-b border-white/10 overflow-hidden">
      
      {/* Specs Bar - Responsive: 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-white/10 tracking-tighter uppercase text-[10px] font-mono z-30 bg-[#030014]/90 backdrop-blur-md">
        <div className="p-4 border-b sm:border-b-0 sm:border-r border-white/10 flex items-center gap-3 group transition-colors hover:bg-white/2">
          <CpuIcon size={14} weight="thin" className="text-blue-500 group-hover:animate-pulse" />
          <span className="opacity-40">System:</span> <span className="text-blue-100 font-medium">Senior Hybrid</span>
        </div>
        <div className="p-4 border-b sm:border-b-0 md:border-r border-white/10 flex items-center gap-3 group transition-colors hover:bg-white/2">
          <PaintBrushIcon size={14} weight="thin" className="text-blue-500 group-hover:rotate-12 transition-transform" />
          <span className="opacity-40">Focus:</span> <span className="text-blue-100 font-medium">UI Engineering</span>
        </div>
        <div className="p-4 border-b sm:border-b-0 sm:border-r border-white/10 flex items-center gap-3 group transition-colors hover:bg-white/2">
          <CodeIcon size={14} weight="thin" className="text-blue-500 group-hover:scale-110 transition-transform" />
          <span className="opacity-40">Stack:</span> <span className="text-blue-100 font-medium">React / TS</span>
        </div>
        <div className="p-4 text-right flex items-center justify-between sm:justify-end gap-3">
          <span className="sm:hidden opacity-40">Status:</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
            <span className="text-green-500/80">Available</span>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Typo Area */}
        <div className="lg:col-span-8 p-6 sm:p-10 md:p-24 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center relative">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[120px] pointer-events-none" />

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[9px] uppercase tracking-[0.3em] mb-6 md:mb-10 font-mono shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <CaretRightIcon size={8} weight="bold" /> Release_2026.v1
            </div>
            
            {/* H1 con Clamp per Responsive Tipografico */}
            <h1 className="text-[clamp(3.5rem,12vw,11rem)] font-bold leading-[0.85] sm:leading-[0.8] tracking-tighter uppercase select-none mix-blend-plus-lighter wrap-break-word">
              Digital<br />Crafting<span className="text-blue-500 animate-pulse">_</span>
            </h1>

            <div className="mt-8 md:mt-16 space-y-6 md:space-y-8 max-w-xl">
              <p className="text-2xl md:text-5xl italic font-light text-white/90 leading-tight tracking-tight border-l-2 border-blue-500 pl-6 md:pl-8">
                "Non è un bug, è una <span className="text-blue-400 font-normal">feature</span> mal progettata."
              </p>
              <p className="text-white/30 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] leading-relaxed max-w-sm">
                Risolvo problemi complessi attraverso il design e l&apos;ingegneria, costruendo ponti tra pixel e codice.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Modules Area */}
        <div className="lg:col-span-4 flex flex-col bg-[#050505] min-h-100 lg:min-h-full">
          {[
            { id: '01', label: 'Design', img: chibiDesignImg, color: 'rgba(59,130,246,0.15)', subtitle: 'VISUAL ARCHITECTURE' },
            { id: '02', label: 'Engineering', img: chibiDevImg, color: 'rgba(168,85,247,0.15)', subtitle: 'TECHNICAL LOGIC' }
          ].map((mod) => (
            <motion.div 
              key={mod.id} 
              whileHover="hover" 
              className="flex-1 border-b border-white/10 last:border-b-0 p-8 md:p-12 flex items-center justify-center relative group overflow-hidden cursor-crosshair transition-colors hover:bg-white/1"
            >
              <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-1">
                <span className="font-mono text-[8px] md:text-[9px] text-white/20 uppercase tracking-[0.4em]">Module_{mod.id}</span>
                <span className="font-mono text-[7px] md:text-[8px] text-blue-500/40 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">{mod.subtitle}</span>
              </div>

              <motion.img 
                variants={{ 
                  hover: { 
                    scale: 1.1, 
                    rotate: mod.id === '01' ? 8 : -8,
                  } 
                }}
                src={mod.img} 
                className="w-40 h-40 md:w-56 md:h-56 object-contain z-10 transition-all duration-500 grayscale group-hover:grayscale-0 drop-shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
              />
              
              <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent h-0.5 w-full -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none hidden md:block" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                   style={{ background: `radial-gradient(circle at center, ${mod.color} 0%, transparent 75%)` }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile to avoid overlap */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-3 pointer-events-none">
        <motion.span 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[8px] uppercase tracking-[0.6em] text-white/20 font-mono"
        >
          Scroll
        </motion.span>
        <div className="relative w-px h-16 bg-white/5 overflow-hidden">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent via-blue-500 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}