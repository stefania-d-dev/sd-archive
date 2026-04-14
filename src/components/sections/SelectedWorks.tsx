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
    <section id="lavori" className="bg-[#030014] py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header con Filtri */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">Selected Archive</span>
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter uppercase italic">
              Portfolio.
            </h2>
          </div>

          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
            {(['all', 'code', 'design'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all ${
                  filter === type 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Galleria Bento Grid Asimmetrica */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => {
              // Logica per l'ampiezza delle card: 
              // 1°, 4°, 7° progetto occupano 4 colonne (più grandi)
              // Gli altri ne occupano 2 (più piccoli)
              const isLarge = index % 3 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative ${isLarge ? 'md:col-span-4' : 'md:col-span-2'}`}
                >
                  <Link to={`/project/${project.id}`}>
                    <div className={`relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-blue-500/30 ${isLarge ? 'aspect-16/10' : 'aspect-4/5 md:aspect-square'}`}>
                      
                      {/* Immagine con Overlay */}
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                      />
                      
                      {/* Overlay Gradiente più profondo */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-80" />
                      
                      {/* Contenuto sulla Card */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                            <LightningIcon size={12} weight="fill" className="text-blue-400" />
                            <span className="text-[9px] font-mono text-white uppercase tracking-tighter">{project.performance}</span>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                            <ArrowUpRightIcon size={24} weight="light" className="text-white" />
                          </div>
                        </div>

                        <div>
                          <span className="text-blue-400 font-mono text-[9px] uppercase tracking-[0.3em] block mb-2">
                            {project.type}
                          </span>
                          <h3 className={`text-white font-bold uppercase tracking-tighter leading-none transition-all ${isLarge ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
                            {project.title.replace(/_/g, ' ')}
                          </h3>
                        </div>
                      </div>
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