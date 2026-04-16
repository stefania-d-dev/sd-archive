'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../../lib/projects';
import { ArrowUpRightIcon, LightningIcon } from '@phosphor-icons/react';

export default function SelectedWorks() {
  const [filter, setFilter] = useState<'all' | 'code' | 'design'>('all');

  const filteredProjects = PROJECTS_DATA.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <section id="lavori" className="bg-[#030014] py-32 md:py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Background Glow decorativo per staccare dalle altre sezioni */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-blue-600/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header con Filtri */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-24 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">
              Selected Archive // 03
            </span>
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter uppercase italic">
              Portfolio<span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Filtri stile Tab OS */}
          <div className="flex bg-white/3 p-1.5 rounded-full border border-white/5 backdrop-blur-md self-start md:self-auto">
            {(['all', 'code', 'design'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 md:px-8 py-2 rounded-full text-[9px] md:text-[10px] font-mono uppercase tracking-widest transition-all duration-300 ${
                  filter === type 
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Galleria Bento Grid Asimmetrica */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => {
              // Logica ampiezza card asimmetrica
              const isLarge = index % 3 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative ${isLarge ? 'md:col-span-4' : 'md:col-span-2'}`}
                >
                  <Link to={`/project/${project.id}`}>
                    <div className={`relative overflow-hidden rounded-4xl md:rounded-[2.5rem] bg-white/3 border border-white/10 transition-all duration-700 group-hover:border-blue-500/50 ${isLarge ? 'aspect-16/10 md:aspect-video' : 'aspect-square'}`}>
                      
                      {/* Immagine con zoom morbido */}
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                      />
                      
                      {/* Vignettatura profonda per leggibilità */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#030014] via-[#030014]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                      
                      {/* Contenuto HUD sulla Card */}
                      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
                        <div className="flex justify-between items-start">
                          <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <LightningIcon size={12} weight="fill" className="text-blue-400" />
                            <span className="text-[8px] font-mono text-white/80 uppercase tracking-tighter">
                              {project.performance || "Optimized"}
                            </span>
                          </div>
                          
                          <div className="p-2 rounded-full bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                            <ArrowUpRightIcon size={20} weight="bold" />
                          </div>
                        </div>

                        <div className="space-y-2 md:space-y-4">
                          <div className="flex items-center gap-3">
                             <div className="h-px w-8 bg-blue-500/50" />
                             <span className="text-blue-400 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em]">
                               {project.type}
                             </span>
                          </div>
                          <h3 className={`text-white font-bold uppercase tracking-tighter leading-[0.9] transition-all group-hover:tracking-normal duration-500 ${isLarge ? 'text-4xl md:text-6xl' : 'text-xl md:text-3xl'}`}>
                            {project.title.replace(/_/g, ' ')}
                          </h3>
                        </div>
                      </div>

                      {/* Scanline Effect al passaggio del mouse */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-5 bg-size-[100%_2px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}