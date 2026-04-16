'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TargetIcon, 
  PencilCircleIcon, 
  TerminalWindowIcon, 
  ChartBarIcon, 
  ArrowUpRightIcon, 
  XIcon, 
  CheckCircleIcon 
} from '@phosphor-icons/react';

const pillars = [
  {
    id: "strategy",
    num: "01",
    title: "Strategy & B2B Vision",
    label: "Il fondamento",
    icon: <TargetIcon size={20} weight="thin" className="text-blue-400" />,
    preview: "Analisi dei competitor, obiettivi di business e roadmap per prodotti SaaS.",
    fullDetail: "Non inizio mai un progetto senza aver prima compreso i processi di vendita e le necessità del cliente B2B. La strategia include workshop con gli stakeholder, analisi dei flussi utente e la definizione di KPI chiari per trasformare l'idea in un prodotto scalabile."
  },
  {
    id: "design",
    num: "02",
    title: "Dashboard Design",
    label: "L'esperienza",
    icon: <PencilCircleIcon size={20} weight="thin" className="text-purple-400" />,
    preview: "Interfacce complesse rese semplici. Focus su usabilità e sistemi visivi coerenti.",
    fullDetail: "Il design per me è funzionalità. Mi specializzo nella creazione di Dashboard e interfacce SaaS dove la densità di informazioni deve convivere con una pulizia visiva assoluta, garantendo che l'utente finale non si senta mai sopraffatto."
  },
  {
    id: "development",
    num: "03",
    title: "Performance Engineering",
    label: "La struttura",
    icon: <TerminalWindowIcon size={20} weight="thin" className="text-blue-500" />,
    preview: "Codice React/TypeScript ottimizzato per la massima velocità e Type Safety.",
    fullDetail: "Costruisco ponti solidi tra design e codice. Sviluppo interfacce fluide in React/Next.js, ottimizzando i Core Web Vitals e garantendo che l'architettura frontend sia pronta per integrazioni AI e backend complessi."
  },
  {
    id: "growth",
    num: "04",
    title: "Impact & AI Growth",
    label: "L'evoluzione",
    icon: <ChartBarIcon size={20} weight="thin" className="text-green-400" />,
    preview: "Integrazione di sistemi AI e ottimizzazione continua basata sui dati reali.",
    fullDetail: "Un prodotto digitale deve evolversi. Analizzo i dati post-lancio e integro soluzioni di Intelligenza Artificiale per automatizzare i task e scalare l'impatto del business sul mercato."
  }
];

export default function Approach() {
  const [selectedPillar, setSelectedPillar] = useState<typeof pillars[0] | null>(null);

  // Blocca lo scroll della pagina quando il drawer è aperto
  useEffect(() => {
    if (selectedPillar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPillar]);

  return (
    <section id="approach" className="relative w-full py-32 px-6 bg-[#030014] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4 text-left">
            <span className="text-blue-500 text-[10px] font-mono uppercase tracking-[0.5em]">02. Approach</span>
            <h2 className="text-5xl md:text-7xl text-white font-bold tracking-tighter leading-none uppercase italic">
              Thinking <span className="text-white/20 not-italic font-light">&</span> Process
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-mono leading-relaxed border-l border-blue-500/50 pl-6 uppercase tracking-wider">
            Un metodo rigoroso che unisce strategia B2B, design engineering e intelligenza artificiale.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, index) => (
            <motion.div 
              key={item.id}
              onClick={() => setSelectedPillar(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/2 border border-white/5 hover:bg-white/4 hover:border-blue-500/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-100"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-[#030014] border border-white/5 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-5xl font-black text-white/3 group-hover:text-blue-500/10 transition-colors duration-500 font-mono">
                  {item.num}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-500/60 mb-2 block font-mono">
                    {item.label}
                  </span>
                  <h3 className="text-xl text-white font-bold tracking-tight uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-white/30 text-[13px] leading-relaxed font-light group-hover:text-white/60 transition-colors italic">
                  {item.preview}
                </p>

                <div className="pt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-blue-400 transition-colors font-mono">
                  Dettagli <ArrowUpRightIcon size={12} weight="bold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- DRAWER --- */}
      <AnimatePresence>
        {selectedPillar && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="fixed inset-0 bg-[#030014]/90 backdrop-blur-md z-100"
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full md:w-150 bg-[#050505] z-101 shadow-[-20px_0_80px_rgba(0,0,0,0.9)] border-l border-white/10 flex flex-col"
            >
              {/* Header Drawer */}
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#050505]/50 backdrop-blur-sm sticky top-0 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    {selectedPillar.icon}
                  </div>
                  <span className="text-white/30 text-[10px] font-mono font-bold uppercase tracking-widest italic">
                    Pillar_{selectedPillar.num}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedPillar(null)}
                  className="p-3 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all group"
                >
                  <XIcon size={24} weight="thin" className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              {/* Contenuto Drawer */}
              <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-5xl md:text-7xl text-white font-bold tracking-tighter uppercase leading-none italic">
                    {selectedPillar.title.split(' ')[0]} <br/>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white/40 to-white/5 not-italic">
                      {selectedPillar.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                  <div className="h-0.5 w-20 bg-blue-500" />
                </div>

                <div className="space-y-10">
                  <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                    {selectedPillar.fullDetail}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6 pt-8">
                    {["Processo iterativo SaaS", "Focus su conversioni B2B", "Integrazione AI-Ready"].map((task, i) => (
                      <div key={i} className="flex items-center gap-4 text-white/40 group">
                        <CheckCircleIcon size={18} weight="thin" className="text-blue-500" />
                        <span className="text-[11px] uppercase tracking-[0.2em] font-mono group-hover:text-blue-400 transition-colors">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-20 pb-10">
                  <div className="p-10 rounded-3xl bg-white/2 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                    <p className="text-white/40 italic font-light leading-relaxed text-lg relative z-10">
                      "Il mio obiettivo è tradurre la visione di business in un ecosistema digitale fluido, dove ogni riga di codice serve a scalare il prodotto."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}