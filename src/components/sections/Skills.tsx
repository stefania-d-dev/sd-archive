'use client';

import { motion } from 'framer-motion';
import { 
  PaletteIcon, 
  CodeIcon, 
  RocketLaunchIcon, 
  ChartLineUpIcon 
} from '@phosphor-icons/react';

const expertiseItems = [
  {
    title: "Design & UX",
    subtitle: "SaaS & Dashboard Systems",
    desc: "Progetto interfacce B2B complesse e Dashboard intuitive. Trasformo requisiti di business in esperienze user-centric su Figma, con un focus maniacale sull'usabilità dei flussi SaaS.",
    icon: <PaletteIcon size={32} weight="thin" className="text-blue-400" />
  },
  {
    title: "Sviluppo",
    subtitle: "HTML, React & Performance",
    desc: "Sviluppo frontend pixel-perfect con React e TS. Dalla manutenzione hardware al codice, garantisco architetture solide, veloci e facili da scalare, ottimizzando ogni Core Web Vital.",
    icon: <CodeIcon size={32} weight="thin" className="text-purple-400" />
  },
  {
    title: "Strategia & AI",
    subtitle: "AI-Driven Business Growth",
    desc: "Integro l'Intelligenza Artificiale per ottimizzare i flussi di lavoro. Uso un approccio data-driven per massimizzare le conversioni e supportare le strategie di vendita nel mercato digitale.",
    icon: <RocketLaunchIcon size={32} weight="thin" className="text-blue-500" />
  },
  {
    title: "Business",
    subtitle: "B2B Sales & Product Cycle",
    desc: "Capisco le dinamiche di vendita e i processi aziendali. Gestisco l'intero ciclo del prodotto garantendo che ogni soluzione tecnica porti un valore reale agli obiettivi commerciali.",
    icon: <ChartLineUpIcon size={32} weight="thin" className="text-green-400" />
  },
];

export default function Expertise() {
  return (
    <section 
      id="expertise" 
      className="bg-[#030014] py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 mb-24"
        >
          <h2 className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">
            Core Expertise // 02
          </h2>
          <p className="text-white text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9] uppercase italic max-w-4xl">
            Visione creativa, <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white/40 to-white/5 not-italic">concretezza business.</span>
          </p>
          <p className="text-white/30 font-mono text-[11px] uppercase tracking-[0.2em] leading-relaxed max-w-md border-l border-blue-500 pl-6">
            Dal Problem Solving tecnico all&apos;integrazione di sistemi AI per prodotti SaaS ad alto impatto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertiseItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/2 border border-white/5 rounded-4xl p-10 flex flex-col 
                         hover:bg-white/4 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Icon Holder */}
              <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                {item.icon}
              </div>

              <div className="space-y-4">
                <h3 className="text-white text-2xl font-bold tracking-tight uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-blue-500/60 font-mono text-[9px] uppercase tracking-widest font-bold">
                  {item.subtitle}
                </p>
                <p className="text-white/30 font-light leading-relaxed text-sm group-hover:text-white/50 transition-colors italic">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner Trace */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 border-t border-r border-blue-500/40" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner finale - Citazione di chiusura */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-16 bg-white/2 border border-white/5 rounded-5xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-transparent pointer-events-none" />
          <p className="text-white/60 italic font-light text-2xl md:text-4xl leading-tight max-w-4xl mx-auto relative z-10">
            &quot;Il mio obiettivo è tradurre la complessità del business in semplicità digitale, unendo l&apos;intelligenza artificiale all&apos;intuizione umana.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}