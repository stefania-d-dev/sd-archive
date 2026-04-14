'use client';

import { useState } from 'react';
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
    title: "Strategy & Vision",
    label: "Il fondamento",
    icon: <TargetIcon size={20} weight="thin" className="text-blue-400" />,
    preview: "Analisi dei competitor, user persona e obiettivi di business per definire il 'perché'.",
    fullDetail: "Non inizio mai un progetto senza aver prima compreso a fondo il mercato di riferimento. La strategia include workshop con gli stakeholder, analisi dei flussi utente e la definizione di KPI chiari. L'obiettivo è trasformare un'idea astratta in una roadmap tecnica e creativa solida."
  },
  {
    id: "design",
    num: "02",
    title: "Editorial Design",
    label: "L'estetica",
    icon: <PencilCircleIcon size={20} weight="thin" className="text-purple-400" />,
    preview: "Sistemi tipografici e griglie editoriali che comunicano l'identità senza rumore visivo.",
    fullDetail: "Il design editoriale applicato al web permette di creare una gerarchia visiva che guida l'utente in modo naturale. Mi concentro sulla scelta dei font, sul bilanciamento degli spazi bianchi e sulla creazione di Design Systems scalabili."
  },
  {
    id: "development",
    num: "03",
    title: "Performance Tech",
    label: "La struttura",
    icon: <TerminalWindowIcon size={20} weight="thin" className="text-blue-500" />,
    preview: "Codice React/TypeScript ottimizzato. Core Web Vitals al massimo e architetture scalabili.",
    fullDetail: "Il codice è il motore dell'esperienza. Sviluppo interfacce fluide utilizzando React e TypeScript, garantendo che ogni animazione sia a 60fps e che il sito sia accessibile e SEO-friendly."
  },
  {
    id: "growth",
    num: "04",
    title: "Impact & Scale",
    label: "Il risultato",
    icon: <ChartBarIcon size={20} weight="thin" className="text-green-400" />,
    preview: "Misurazione dei risultati, SEO tecnica e supporto continuo per far crescere il prodotto.",
    fullDetail: "Un sito web non è mai 'finito'. Analizzo il comportamento degli utenti post-lancio per ottimizzare le conversioni e migliorare le performance."
  }
];

export default function Approach() {
  const [selectedPillar, setSelectedPillar] = useState<typeof pillars[0] | null>(null);

  return (
    <section id="approach" className="relative w-full py-32 px-6 bg-[#030014] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4 text-left">
            <span className="text-blue-500 text-[10px] font-mono uppercase tracking-[0.4em]">02. Approach</span>
            <h2 className="text-5xl md:text-7xl text-white font-medium tracking-tighter leading-none uppercase">
              Thinking <span className="text-white/20 italic font-light">&</span> Process
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-mono leading-relaxed border-l border-white/10 pl-6 uppercase tracking-wider">
            Un metodo rigoroso che bilancia visione creativa e precisione tecnica per risultati d'impatto.
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
              className="group relative p-8 rounded-4xl bg-white/2 border border-white/5 hover:bg-white/4 hover:border-blue-500/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-100"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-[#030014] border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <span className="text-5xl font-black text-white/2 group-hover:text-blue-500/10 transition-colors duration-500 font-mono">
                  {item.num}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-500/60 mb-2 block font-mono">
                    {item.label}
                  </span>
                  <h3 className="text-xl text-white font-bold tracking-tight uppercase">
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
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- DRAWER (Il Pannello Laterale) --- */}
      <AnimatePresence>
        {selectedPillar && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="fixed inset-0 bg-[#030014]/80 backdrop-blur-md z-200"
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full md:w-150 bg-[#050505] z-201 shadow-[-20px_0_80px_rgba(0,0,0,0.9)] border-l border-white/10 flex flex-col"
            >
              {/* Header Drawer */}
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    {selectedPillar.icon}
                  </div>
                  <span className="text-white/30 text-[10px] font-mono font-bold uppercase tracking-widest">
                    Pillar_{selectedPillar.num}
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedPillar(null)}
                  className="p-3 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all"
                >
                  <XIcon size={24} weight="thin" />
                </button>
              </div>

              {/* Contenuto Drawer */}
              <div className="flex-1 overflow-y-auto p-8 md:p-16 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-5xl md:text-7xl text-white font-bold tracking-tighter uppercase leading-none">
                    {selectedPillar.title}
                  </h3>
                  <div className="h-1 w-20 bg-blue-500" />
                </div>

                <div className="space-y-10">
                  <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed italic">
                    {selectedPillar.fullDetail}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6 pt-8">
                    {["Processo iterativo", "Attenzione maniacale al dettaglio", "Focus sull'esperienza utente"].map((task, i) => (
                      <div key={i} className="flex items-center gap-4 text-white/40">
                        <CheckCircleIcon size={18} weight="thin" className="text-blue-500" />
                        <span className="text-[11px] uppercase tracking-[0.2em] font-mono">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-20">
                  <div className="p-10 rounded-3xl bg-white/2 border border-white/5">
                    <p className="text-white/40 italic font-light leading-relaxed text-lg">
                      "Il mio compito non è solo progettare un'interfaccia, ma assicurarmi che ogni interazione rifletta i valori del brand."
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